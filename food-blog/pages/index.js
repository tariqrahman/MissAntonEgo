import Cuisine from '../components/cuisine';

const Home = (props) => {
  return (
    <div className="h-screen bg-amber-50">
      <div className="justify-center text-center pt-20 pb-5 text-3xl">
        MISS ANTON EGO
      </div>
      <div className="relative">
        <div
          className="w-full absolute inset-0 flex items-center place-content-center"
          aria-hidden="true"
        >
          <div className="w-48 border-t border-black" />
        </div>
      </div>
      <div className= 'border-2 border-black w-1/2'>
        <p className=''> Description ... </p>
      </div>
    </div>
  );
};

export default Home;
