import Link from 'next/link';

const Restaurant = (props) => {
  const restaurantLink = `/${props.id}`;

  return (
    <div className="w-1/2 pt-3">
      <div className="w-full text-sm hover:text-base">
        <span className='hover:text-red-600 hover:italic'>
          <Link href={restaurantLink}>{props.restaurant}</Link>
        </span>
        <span className="float-right">{props.location}</span>
      </div>
    </div>
  );
};

export default Restaurant;
