const CallToAction = () => {
  return (
    <div className="flex flex-col mt-4 justify-center">
      <h3 style={{ fontFamily: "Domine" }} className="text-center">
        More details comming soon!{" "}
      </h3>
      <h2 className="text-4xl min-w-content font-extrabold text-center py-3">
        Want to save your spot?
      </h2>
      <h3 style={{ fontFamily: "Domine" }} className="text-center">
        Register now to let us know you'll be attending
      </h3>
      <button className="mb-16 mx-auto btn btn-secondary mt-6 capitalize rounded-full">
        Save my Spot!
      </button>
    </div>
  );
};

export default CallToAction;
