import { useState } from "react";

import classes from "./CrewSlider.module.css";

const CrewSlider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className={classes.container}>
      <div>
        <p className={classes.jobTitle}>{sliderData[currentSlide].jobTitle}</p>
        <p className={classes.name}>{sliderData[currentSlide].name}</p>
        <p className="text">{sliderData[currentSlide].description}</p>
        <div className={classes.dotsContainer}>
          {sliderData.map((slide) => (
            <div
              key={slide.index}
              className={`${classes.dot} ${
                currentSlide === slide.index ? classes.active : ""
              }`}
              onClick={() => goToSlide(slide.index)}
            ></div>
          ))}
        </div>
      </div>

      <img
        src={sliderData[currentSlide].image}
        className={classes.image}
        width={sliderData[currentSlide].imageWidth}
        height={sliderData[currentSlide].imageHeight}
        alt={sliderData.name}
      ></img>
      {console.log(currentSlide)}
    </section>
  );
};

export default CrewSlider;
