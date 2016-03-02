using System.Collections.Generic;
using <%= appNamespace %>.Models;

namespace <%= appNamespace %>.Services
{
    public interface IGenreService
    {
        Genre FindGenre(int id);
        IList<Genre> ListGenres();
    }
}
