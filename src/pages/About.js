import { AboutCopy } from "../assets/aboutCopy";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h2 className="uppercase text-3xl mt-16 text-center font-extrabold">
        Together <span className=" text-secondary">we</span> can make waves for
        women entrepeneurs
      </h2>
      <div className="w-full flex justify-evenly">
        {AboutCopy.map((copy, index) => (
          <AboutCard data={copy} key={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
