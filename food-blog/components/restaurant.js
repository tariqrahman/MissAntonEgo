const Restaurant = (props) => {
  return (
    <div className="w-1/2 pt-3">
      <div className="w-full text-xs">
        <span className="">{props.restaurant}</span>
        <span className="float-right">{props.location}</span>
      </div>
    </div>
  );
};

export default Restaurant;
