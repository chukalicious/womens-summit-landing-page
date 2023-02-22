import liquidcheese from "../assets/liquidcheese.svg";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${liquidcheese})` }}
    >
      <div className="hero-overlay bg-opacity-10"></div>

      <div className="hero-content text-center text-accent flex flex-col">
        <div className="min-w-lg">
          <h2 className="mb-16 text-lg mt-[-7rem] uppercase min-w-content ">
            International Women's Day Summit - march 08, 2023 - 9am cst
          </h2>
        </div>
        <div className="min-w-lg">
          <div className="max-w-md flex mx-auto">
            <h1 className="mb-5 text-[2.75rem] leading-10 ">
              Celebrate <span className="text-secondary">women</span>. Activate
              change.
            </h1>
          </div>
          <p
            style={{ fontFamily: "Domine" }}
            className="mb-8 mt-6 text-2xl max-w-[80%] mx-auto"
          >
            Join <span className="font-bold">World Encounter</span> as we bring
            together entrepeneurs, BIPOC business owners, CEOs and mothers to
            talk, learn, laugh, and inspire one another-and you- through a
            series of thought provoking conversations available online to
            everyone, everywhere on International Women's Day.
          </p>
          <button className="btn btn-secondary mt-6 capitalize rounded-full">
            Save my Spot!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
