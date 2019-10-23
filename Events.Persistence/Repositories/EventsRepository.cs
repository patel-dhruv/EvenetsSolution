using Events.Core;
using Events.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Events.Persistence.Repositories
{
    public class EventsRepository : Repository<Event>, IEventsRepository
    {
        public EventsRepository(EventsContext context) : base(context)
        {

        }

        public IEnumerable<Event> GetTopEvents(int count)
        {
            return EventsContext.Events.Include(e=>e.Type).OrderByDescending(e => e.Title).Take(count).ToList();
        }

        
        public IEnumerable<Event> GetEventsWithType(int id)
        {
            return EventsContext.Events.Where(e => e.Id == id).Include(e => e.Type);
        }

        public EventsContext EventsContext
        {
            get { return _context as EventsContext; }
        }
    }
}
