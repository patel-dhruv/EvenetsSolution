using System.Collections.Generic;

namespace Events.Core.Repositories
{
    public interface IEventsRepository : IRepository<Event>
    {
        IEnumerable<Event> GetTopEvents(int count);
        IEnumerable<Event> GetEventsWithType(int Id);
    }
}
