import { AboutCopy } from "../assets/aboutCopy";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="w-full flex justify-evenly">
        {AboutCopy.map((copy, index) => (
          <AboutCard data={copy} key={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
