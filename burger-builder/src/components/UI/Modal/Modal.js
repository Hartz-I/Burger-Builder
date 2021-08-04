//Seperate cuz might use later
import React from "react";

import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <div
      style={{
        transform: props.show ? "scale(1)" : "scale(0)",
        opacity: props.show ? "1" : "0",
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  );
};

export default modal;
