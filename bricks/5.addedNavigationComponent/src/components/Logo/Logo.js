import React from "react";

//this is important. so that no errors are made when public
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="myBurger" />
    </div>
  );
};

export default logo;
