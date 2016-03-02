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
    public class MoviesController : Controller
    {
        private IMovieService _movieService;

        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _movieService.ListMovies();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return _movieService.FindMovie(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Movie movie)
        {
            _movieService.SaveMovie(movie);
        }


        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _movieService.DeleteMovie(id);
        }
    }
}
