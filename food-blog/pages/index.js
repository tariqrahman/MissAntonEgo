import Cuisine from '../components/cuisine';


const Homepage = (props) => {
  return (
    <div className="h-screen bg-amber-50">
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
        <p className="p-2 h-20 border border-black w-1/2 text-sm">
          {' '}
          Description ...{' '}
        </p>
      </div>
      <Cuisine />
    </div>
  );
};

export default Homepage;
