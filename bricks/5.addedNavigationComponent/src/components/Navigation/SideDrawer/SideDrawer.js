import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

import Aux from "../../../hoc/Auxillary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  const sideNavStyle = {
    border: "2px solid white",
    padding: "16px",
    color: "white",
    borderRadius: "5px",
  };

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div
          className={
            classes.Logo /* this doen't over ride but create a new class cuz of css modules */
          }
        >
          <Logo />
        </div>
        <nav>
          <NavigationItems sideNavItemStyle={sideNavStyle} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
