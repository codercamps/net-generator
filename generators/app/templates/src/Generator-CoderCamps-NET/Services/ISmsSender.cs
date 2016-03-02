using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Generator_CoderCamps_NET.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
