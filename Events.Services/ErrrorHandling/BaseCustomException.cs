using System;

namespace Events.Services
{
    public class BaseCustomException : Exception
    {
        public string _description;
        public int _code;

        public int Code { get => _code; }
        public string Description { get => _description; }

        public BaseCustomException(string message,string description,int code) : base(message)
        {
            _code = code;
            _description = description;
        }
    }
}