import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem
        link="/"
        active={true}
        sideNavItemStyle={props.sideNavItemStyle}
      >
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" sideNavItemStyle={props.sideNavItemStyle}>
        Check out
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
