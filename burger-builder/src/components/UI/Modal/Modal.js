//Seperate cuz might use later
import React, { Component } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

//can use pure components but won't cuz that will do more checks than nessesary
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children //this is needed for the spinner
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    //console.log("[Modal.js] did update");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "scale(1)" : "scale(0)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
