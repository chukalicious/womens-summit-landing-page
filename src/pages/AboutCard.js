const AboutCard = (props) => {
  console.log(props);
  return (
    <div className="z-0 card w-1/3 mx-4 bg-base-100 mt-7 mb-6">
      <figure className="p-10 w-60 mx-auto">
        <img src={props.data.url} alt="logo" />
      </figure>
      <div className="card-body p-8 text-center">
        <h2 className="font-semibold text-2xl capitalize text-center">
          {props.data.header}
        </h2>
        <p style={{ fontFamily: "Domine" }} className="text-base px-4">
          {props.data.paragraph}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
