import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";
import MenuButton from "./MenuButton/MenuButton";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.MobileOnly}>
        <MenuButton buttonClick={props.openDrawer} />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
