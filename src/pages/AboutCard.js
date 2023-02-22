const AboutCard = (props) => {
  console.log(props);
  return (
    <div className="card w-1/3 mx-4 bg-base-100 mt-7">
      <figure>
        <img src={props.data.url} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-2xl capitalize text-center">
          {props.data.header}
        </h2>
        <p className="text-lg">{props.data.paragraph}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default AboutCard;
