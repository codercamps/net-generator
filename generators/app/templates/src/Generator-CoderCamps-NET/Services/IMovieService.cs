using System.Collections.Generic;
using <%= appNamespace %>.Models;

namespace <%= appNamespace %>.Services
{
    public interface IMovieService
    {
        void DeleteMovie(int id);
        Movie FindMovie(int id);
        IList<Movie> ListMovies();
        void SaveMovie(Movie movie);
    }
}
