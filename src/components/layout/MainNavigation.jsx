import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { burgerStateHandler, isBurgerActive, setIsBurgerActive } =
    useContext(Context);
  const navLinks = [
    { number: "00", text: "home" },
    { number: "01", text: "destination" },
    { number: "02", text: "crew" },
    { number: "03", text: "technology" },
  ];

  return (
    <header>
      <nav>
        <ul className={classes.containerNav}>
          <li className={classes.logo} onClick={() => setIsBurgerActive(false)}>
            <Link to="/home" className={classes.logo}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fillRule="evenodd">
                  <circle cx="24" cy="24" r="24" fill="#FFF" />
                  <path
                    fill="#0B0D17"
                    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                  />
                </g>
              </svg>
            </Link>
          </li>
          <span className={classes.line}></span>
          <div
            className={isBurgerActive ? classes.cross : classes.burger}
            onClick={burgerStateHandler}
          >
            <div></div>
          </div>
          <li
            className={`${classes.container} ${
              isBurgerActive && classes.navActive
            }`}
            onClick={() => {
              setIsBurgerActive(false);
            }}
          >
            <ul className={classes.conrainerLinks}>
              {navLinks.map((link) => (
                <li
                  key={link.text}
                  className={classes.link}
                  onClick={(e) => e.stopPropagation()}
                >
                  <NavLink to={`/${link.text}`} className={classes.link}>
                    <span className={classes.linkNumber}>{link.number}</span>
                    <span>{link.text.toUpperCase()}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
