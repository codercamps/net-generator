using <%= appNamespace %>.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace <%= appNamespace %>.Services
{
    public class GenreService : IGenreService
    {
        private List<Genre> _genres = new List<Genre> {
              new Genre {
               Id=1,
               Name="action",
               Movies = new List<Movie> {
                 new Movie {Id=1, Title ="Die Hard"},
                 new Movie {Id=2, Title="Broken Arrow"}
                }
              },
              new Genre {
                Id=2,
                Name="science fiction",
                Movies = new List<Movie> {
                  new Movie {Id=3, Title="Star Wars"},
                  new Movie {Id=4, Title="Bladerunner"},
                  new Movie {Id=5, Title="Ex Machina"}
                }
              },
              new Genre {
                Id=3,
                Name="drama",
                Movies = new List<Movie> {
                  new Movie {Id=6, Title="The Godfather"},
                  new Movie {Id=7, Title="Training Day"}
                }
           }
        };

        public IList<Genre> ListGenres()
        {
            return _genres;
        }

        public Genre FindGenre(int id)
        {
            return _genres.Find(g => g.Id == id);
        }

    }
}
