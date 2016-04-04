using <%= appNamespace %>.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace <%= appNamespace %>.Services
{
    public class MovieService : IMovieService
    {
        private static List<Movie> _movies;
        private static int _movieId;

        static MovieService()
        {
            _movies = new List<Movie> {
               new Movie {Id=1, Title="Star Wars", Director="Lucas" },
               new Movie {Id=2, Title="The Martian", Director="Scott" },
               new Movie {Id=3, Title="Ex Machina", Director="Garland" },
               new Movie {Id=4, Title="Superman", Director="Donner" },
               new Movie {Id=5, Title="Shrek", Director="Adamson" }
            };

            // unique movie id
            _movieId = _movies.Count();
        }

        public IList<Movie> ListMovies()
        {
            return _movies;
        }

        public Movie FindMovie(int id)
        {
            return _movies.Find(m => m.Id == id);
        }


        public void SaveMovie(Movie movie)
        {
            if (movie.Id == 0)
            {
                movie.Id = ++ _movieId;
                _movies.Add(movie);
            } else
            {
                var original = this.FindMovie(movie.Id);
                if (original == null)
                {
                    throw new Exception("Could not find movie with id " + movie.Id);
                }
                original.Title = movie.Title;
                original.Director = movie.Director;
            }
        }

        public void DeleteMovie(int id)
        {
            var original = this.FindMovie(id);
            if (original == null)
            {
                    throw new Exception("Could not find movie with id " + id);
            }
            _movies.Remove(original);
        }

        public IList<Movie> SearchMovies(string searchText)
        {
          return _movies
           .Where(m => m.Title.ToLower().Contains(searchText.ToLower()))
           .ToList();
        }



    }
}
