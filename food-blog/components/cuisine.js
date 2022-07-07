import Restaurant from './restaurant';
import {
  getAmerican,
  getBakeries,
  getJapanese,
  getMexican,
  getSouthEast,
} from '../data';

const Cuisine = (props) => {
  const americanRestaurants = getAmerican();
  const mexicanRestaurants = getMexican();
  const japaneseRestaurants = getJapanese();
  const bakeries = getBakeries();
  const southEastRestaurants = getSouthEast();

  return (
    <>
    <div className='text-center pt-5'>
      {props.title}
    </div>
    <p className=' text-3xl text-center w-screen'>..........</p>
      <div className="flex flex-col items-center bg-amber-50">
        {props.type === 'american' && (
          <>
            {americanRestaurants.map((restaurant) => (
              <Restaurant
                id={restaurant.id}
                key={restaurant.id}
                restaurant={restaurant.name}
                location={restaurant.location}
              />
            ))}
          </>
        )}
        {props.type === 'mexican' && (
          <>
            {mexicanRestaurants.map((restaurant) => (
              <Restaurant
                id={restaurant.id}
                key={restaurant.id}
                restaurant={restaurant.name}
                location={restaurant.location}
              />
            ))}
          </>
        )}
        {props.type === 'japanese' && (
          <>
            {japaneseRestaurants.map((restaurant) => (
              <Restaurant
                id={restaurant.id}
                key={restaurant.id}
                restaurant={restaurant.name}
                location={restaurant.location}
              />
            ))}
          </>
        )}
        {props.type === 'bakeries' && (
          <>
            {bakeries.map((restaurant) => (
              <Restaurant
                id={restaurant.id}
                key={restaurant.id}
                restaurant={restaurant.name}
                location={restaurant.location}
              />
            ))}
          </>
        )}
        {props.type === 'southEast' && (
          <>
            {southEastRestaurants.map((restaurant) => (
              <Restaurant
                id={restaurant.id}
                key={restaurant.id}
                restaurant={restaurant.name}
                location={restaurant.location}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Cuisine;
