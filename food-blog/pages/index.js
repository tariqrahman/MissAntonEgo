import Cuisine from '../components/cuisine';

const Homepage = (props) => {
  
  
  return (
    <div className="background-color text-cyan-900 bg-amber-50 pb-20">
      <div className="justify-center text-center pt-20 text-3xl">
        MISS AND MISTER ANTON EGO
      </div>
      <div className="relative pb-20">
        <div
          className="w-full absolute inset-0 flex items-center place-content-center"
          aria-hidden="true"
        >
          <div className="w-48 border-t border-black" />
        </div>
      </div>
      <div className="w-full flex items-center place-content-center">
        <p className="p-2 h-20 text-center border border-black w-1/2 text-sm">
          {' '}
          "I don't like food. I love it. If I don't love it, I don't swallow." -Anton Ego
          {' '}
        </p>
      </div>
      <Cuisine title={'American'} type={'american'} />
      <Cuisine title={'Mexican'} type={'mexican'} />
      <Cuisine title={'Japanese'} type={'japanese'} />
      <Cuisine title={'Bakeries'} type={'bakeries'} />
      <Cuisine title={'South Eastern'} type={'southEast'}/>
    </div>
  );
};

export default Homepage;
