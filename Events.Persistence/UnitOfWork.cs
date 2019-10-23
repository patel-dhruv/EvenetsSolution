using Events.Core;
using Events.Core.Repositories;
using Events.Persistence.Repositories;

namespace Events.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EventsContext _context;
        public IEventsRepository Events { get; private set; }

        public UnitOfWork(EventsContext context)
        {
            _context = context;
            Events = new EventsRepository(_context);
        }

        public int Complete()
        {
           return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
