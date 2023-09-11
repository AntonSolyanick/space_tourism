import { useState } from "react";

import classes from "./TechnologySlider.module.css";

const TechnologySlider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className={classes.container}>
      <div className={classes.dotsContainer}>
        {sliderData.map((slide) => (
          <div
            key={slide.index}
            className={`${classes.dot} ${
              currentSlide === slide.index ? classes.active : ""
            }`}
            onClick={() => goToSlide(slide.index)}
          >
            {slide.index + 1}
          </div>
        ))}
      </div>
      <div>
        <p className={classes.terminology}>THE TERMINOLOGY…</p>
        <p className={classes.title}>{sliderData[currentSlide].title}</p>
        <p className="text">{sliderData[currentSlide].text}</p>
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

export default TechnologySlider;
