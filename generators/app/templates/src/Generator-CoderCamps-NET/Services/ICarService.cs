using System.Collections.Generic;
using <%= appNamespace %>.Models;

namespace <%= appNamespace %>.Services
{
    public interface ICarService
    {
        Car FindCar(int id);
        IEnumerable<Car> ListCars();
        IEnumerable<CarMake> ListMakes();
    }
}
