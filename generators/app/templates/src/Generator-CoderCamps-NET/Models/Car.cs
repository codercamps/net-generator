using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Generator_CoderCamps_NET.Models
{
    public class Car
    {
        public int Id { get; set; }

        public int CarMakeId { get; set; }

        public string ShortDescription { get; set; }

        public string FullDescription { get; set; }

        public decimal Price { get; set; }

        public string ImageUrl { get; set; }


    }
}
