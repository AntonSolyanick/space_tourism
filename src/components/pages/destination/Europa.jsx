import classes from "./DestinationPlanet.module.css";
import imageEuropa from "../../../assets/destination/image-europa.png";

const Europa = () => {
  return (
    <div className={classes.container}>
      <img src={imageEuropa} width="445" height="445" alt="europa"></img>
      <div className={classes.textBlock}>
        <h3 className={classes.heading}>EUROPA</h3>
        <p className={classes.text}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className={classes.travelInfo}>
          <div className={classes.infoTextContainer}>
            <p>AVG. DISTANCE</p>
            <p className={classes.infoNumbers}>628 MIL. KM</p>
          </div>
          <div className={classes.infoTextContainer}>
            <p>Est. travel time</p>
            <p className={classes.infoNumbers}>3 YEARS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
