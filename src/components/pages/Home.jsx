import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.backGround}>
      <div className={classes.wrapper}>
        <p className={`${classes.text} ${classes.textColumn}`}>
          <span className={classes.mediumText}>SO, YOU WANT TO TRAVEL TO</span>{" "}
          <br />
          <span className={classes.bigText}>SPACE</span> <br />
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <NavLink to="/destination" className={classes.button}>
          EXPLORE
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
