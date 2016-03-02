using <%= appNamespace %>.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace <%= appNamespace %>.Services
{
    public class CarService : ICarService
    {
        private static List<CarMake> _makes = new List<CarMake>
        {
            new CarMake {Id=1, Name="BMW" },
            new CarMake {Id=2, Name="Tesla" },
            new CarMake {Id=3, Name="MiniCooper" }
        };

        private static List<Car> _cars = new List<Car>
        {
            new Car
            {
                Id = 1,
                ShortDescription = "Green MINI Cooper S",
                FullDescription = "This MINI Cooper S is great for the city.",
                CarMakeId = 3,
                Price = 30000m,
                ImageUrl = "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
            },
            new Car
            {
                Id = 2,
                ShortDescription = "Orange MINI Cooper S",
                FullDescription = "Orange is an odd color for a car.",
                CarMakeId = 3,
                Price = 25000m,
                ImageUrl = "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
            },
            new Car
            {
                Id = 3,
                ShortDescription = "Black MINI Cooper Countryman",
                FullDescription = "Holds more people than a normal MINI cooper and it is invisible at night.",
                CarMakeId = 3,
                Price = 45000m,
                ImageUrl = "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
            },
            new Car
            {
                Id = 4,
                ShortDescription = "Tesla Model S",
                FullDescription = "This red Tesla Model S has a 120 mile range.",
                CarMakeId = 2,
                Price = 130000m,
                ImageUrl = "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
            },
            new Car
            {
                Id = 5,
                ShortDescription = "Tesla Model X",
                FullDescription = "A Tesla Mini Van with Falcon Doors.",
                CarMakeId = 2,
                Price = 150000m,
                ImageUrl = "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
            }
        };


        public IEnumerable<CarMake> ListMakes()
        {
            return _makes;
        }


        public IEnumerable<Car> ListCars()
        {
            return _cars;
        }

        public Car FindCar(int id)
        {
            return _cars.Find(c => c.Id == id);
        }
    }
}
