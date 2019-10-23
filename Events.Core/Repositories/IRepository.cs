using System.Collections.Generic;

namespace Events.Core.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Get(int id);
        IEnumerable<TEntity> GetAll();

        void Add(TEntity entity);
        void Remove(TEntity entity);
    }
}
