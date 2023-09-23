import { NavLink } from "react-router-dom";
import { destinationLinks } from "../../assets/data";

import classes from "./DestinationNavigation.module.css";
import "../../App.css";

const DestinationNavigation = () => {
  return (
    <>
      <ul className={classes.destinationLinks}>
        {destinationLinks.map((link) => (
          <li key={link}>
            <NavLink className="link" to={`${link}`}>
              {link.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DestinationNavigation;
