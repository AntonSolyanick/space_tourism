import "../../../App.css";
import classes from "./Crew.module.css";
import CrewSlider from "./CrewSlider";
import { crewData } from "../../../assets/data";

const Crew = () => {
  return (
    <div className={`${classes.backgroundImage} background`}>
      <section className="mainSection">
        <h2 className="heading">
          <span className="headingNumber"> 02</span>MEET YOUR TEAM
        </h2>
        <CrewSlider sliderData={crewData}></CrewSlider>
      </section>
    </div>
  );
};

export default Crew;
