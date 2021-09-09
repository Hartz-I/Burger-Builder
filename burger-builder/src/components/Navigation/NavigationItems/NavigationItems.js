import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem
        link="/burger-builder"
        exact
        // active={true}
        sideNavItemStyle={props.sideNavItemStyle}
      >
        Burger Builder
      </NavigationItem>

      <NavigationItem link="/orders" sideNavItemStyle={props.sideNavItemStyle}>
        Orders
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
