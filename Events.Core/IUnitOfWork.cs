using Events.Core.Repositories;

namespace Events.Core
{
    public interface IUnitOfWork
    {
        IEventsRepository Events { get; }
        int Complete();
    }
}
