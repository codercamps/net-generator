using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using <%= appNamespace %>.Models;
using <%= appNamespace %>.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace <%= appNamespace %>.API
{
    [Route("api/[controller]")]
    public class MakesController : Controller
    {
        private ICarService _carService;

        public MakesController(ICarService carService)
        {
            _carService = carService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<CarMake> Get()
        {
            return _carService.ListMakes();
        }


    }
}
