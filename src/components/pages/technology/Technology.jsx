import classes from "./Technology.module.css";
import "../../../App.css";
import { technologyData } from "../../../assets/data";
import TechnologySlider from "./TechnologySlider";

const Technology = () => {
  return (
    <div className={`${classes.backgroundImage} background`}>
      <section className="mainSection">
        <h2 className="heading">
          <span className="headingNumber"> 03</span>SPACE LAUNCH 101
        </h2>
        <TechnologySlider sliderData={technologyData}></TechnologySlider>
      </section>
    </div>
  );
};

export default Technology;
