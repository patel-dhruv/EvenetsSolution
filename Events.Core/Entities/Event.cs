using System;
using System.ComponentModel.DataAnnotations;

namespace Events.Core
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public DateTime Date { get; set; }
        public  EventType Type { get; set; }

    }
}
