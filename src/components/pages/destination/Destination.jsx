import { Outlet } from "react-router-dom";

import classes from "./Destination.module.css";
import "../../../App.css";
import DestinationNavigation from "../../layout/DestinationNavigation";

const Destination = () => {
  return (
    <div className={`${classes.backgroundImage} background`}>
      <section className="mainSection">
        <h2 className="heading">
          <span className="headingNumber"> 01</span>PICK YOUR DESTINATION
        </h2>
        <DestinationNavigation></DestinationNavigation>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Destination;
