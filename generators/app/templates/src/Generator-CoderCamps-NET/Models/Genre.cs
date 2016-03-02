using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace <%= appNamespace %>.Models
{
    public class Genre
    {
        public Genre()
        {
            this.Movies = new List<Movie>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection Movies { get; set; }
    }
}
