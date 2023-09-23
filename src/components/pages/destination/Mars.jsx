import classes from "./DestinationPlanet.module.css";
import imageMars from "../../../assets/destination/image-mars.png";

const Mars = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.planetImage}
        src={imageMars}
        width="445"
        height="445"
        alt="moon"
      ></img>
      <div className={classes.textBlock}>
        <h3 className={classes.heading}>MARS</h3>
        <p className={classes.text}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <div className={classes.travelInfo}>
          <div className={classes.infoTextContainer}>
            <p>AVG. DISTANCE</p>
            <p className={classes.infoNumbers}>225 MIL. KM</p>
          </div>
          <div className={classes.infoTextContainer}>
            <p>Est. travel time</p>
            <p className={classes.infoNumbers}>9 MONTHS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mars;
