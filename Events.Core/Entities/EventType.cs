using System.ComponentModel.DataAnnotations;

namespace Events.Core
{
    public class EventType
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
