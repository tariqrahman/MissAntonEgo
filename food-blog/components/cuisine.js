import Restaurant from './restaurant';
import { getData } from '../data';

const Cuisine = () => {
  const restaurants = getData();

  return (
    <>
      <div className='flex flex-col items-center pt-8'>
        {restaurants.map((restaurant) => (
          <Restaurant
            restaurant={restaurant.name}
            location={restaurant.location}
          />
        ))}
      </div>
    </>
  );
};

export default Cuisine;
