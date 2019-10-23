using Events.Core;
using Microsoft.AspNetCore.Mvc;

namespace Events.Services.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IUnitOfWork _repository;
        

        public EventsController(IUnitOfWork repository)
        {
            _repository = repository;
        }
        public IActionResult GetAll()
        {            
                var Events = _repository.Events.GetAll();
                if (Events != null)
                    return Ok(Events);
                else
                    return NotFound();
            
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            
                var eventDetail = _repository.Events.Get(id);
                if (eventDetail != null)
                    return Ok(eventDetail);
                else
                    return NotFound();

           
            
            /* Can use below code if we want to return Events with its Type*/
            //return Ok(_repository.Events.GetEventsWithType(id));
        }
    }
}