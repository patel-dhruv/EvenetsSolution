using Events.Core;
using Microsoft.EntityFrameworkCore;

namespace Events.Persistence
{
    public class EventsContext : DbContext
    {
        public EventsContext(DbContextOptions<EventsContext> options) : base(options)
        {

        }
        public DbSet<Event> Events { get; set; }

        public DbSet<EventType> EventTypes { get; set; }
    }
}
