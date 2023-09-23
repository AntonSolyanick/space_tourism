import classes from "./DestinationPlanet.module.css";
import imageMoon from "../../../assets/destination/image-moon.png";

const Moon = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.planetImage}
        src={imageMoon}
        width="445"
        height="445"
        alt="moon"
      ></img>
      <div className={classes.textBlock}>
        <h3 className={classes.heading}>MOON</h3>
        <p className={classes.text}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className={classes.travelInfo}>
          <div className={classes.infoTextContainer}>
            <p>AVG. DISTANCE</p>
            <p className={classes.infoNumbers}>384,400 KM</p>
          </div>
          <div className={classes.infoTextContainer}>
            <p>Est. travel time</p>
            <p className={classes.infoNumbers}>3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
