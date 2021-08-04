//Seperate cuz might use later
import React from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "scale(1)" : "scale(0)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
