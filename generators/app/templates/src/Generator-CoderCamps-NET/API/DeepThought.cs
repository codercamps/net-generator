using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using System.Threading;
using <%= appNamespace %>.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace <%= appNamespace %>.API
{
    [Route("api/[controller]")]
    public class DeepThought : Controller
    {
        [HttpGet("GetAnswer")]
        public IActionResult GetAnswer()
        {
            Thread.Sleep(3000);
            var possibilities = new string[]
            {
                "42", "popcorn", "vacations", "money", "friends", "movies"

            };
            var rnd = new Random();
            var index = rnd.Next(possibilities.Length);
            var answer = new Answer { Text = "The answer is " + possibilities[index] };
            return Ok(answer);
        }

        [HttpGet("GetFortune")]
        public IActionResult GetFortune()
        {
            Thread.Sleep(3000);
            var possibilities = new string[]
            {
                "You are destined to be eaten by a bear.",
                "You will be rich and powerful beyond your dreams.",
                "You will win a talent show and start a succesful rock band."
            };
            var rnd = new Random();
            var index = rnd.Next(possibilities.Length);
            var answer = new Answer { Text = possibilities[index] };
            return Ok(answer);
        }
    }
}
