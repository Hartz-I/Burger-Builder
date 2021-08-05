import React from "react";

import classes from "./MenuButton.module.css";

const menuButton = (props) => {
  return (
    <button className={classes.MenuButton} onClick={props.buttonClick}>
      Menu
    </button>
  );
};

export default menuButton;
