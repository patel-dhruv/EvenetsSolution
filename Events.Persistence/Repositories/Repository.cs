using Events.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Events.Persistence.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly EventsContext _context;

        public Repository(EventsContext context)
        {
            _context = context;
        }
        public void Add(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public TEntity Get(int id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().ToList();
        }

        public void Remove(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
