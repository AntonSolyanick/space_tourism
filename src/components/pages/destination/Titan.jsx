import classes from "./DestinationPlanet.module.css";
import imageTitan from "../../../assets/destination/image-titan.png";

const Titan = () => {
  return (
    <div className={classes.container}>
      <img src={imageTitan} width="445" height="445" alt="titan"></img>
      <div className={classes.textBlock}>
        <h3 className={classes.heading}>TITAN</h3>
        <p className={classes.text}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className={classes.travelInfo}>
          <div className={classes.infoTextContainer}>
            <p>AVG. DISTANCE</p>
            <p className={classes.infoNumbers}>1.6 BIL. KM</p>
          </div>
          <div className={classes.infoTextContainer}>
            <p>Est. travel time</p>
            <p className={classes.infoNumbers}>7 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titan;
