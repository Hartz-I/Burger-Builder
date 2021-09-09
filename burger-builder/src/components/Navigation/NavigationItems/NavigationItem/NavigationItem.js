import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem} style={props.sideNavItemStyle}>
      <NavLink
        to={props.link}
        //need it to use the unique classname for css modules
        activeClassName={classes.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
