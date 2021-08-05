import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabledInfo}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
      <div className={classes.PricePerPiece}>
        <strong className={classes.Strong}>Price: ${props.pp}</strong>
      </div>
    </div>
  );
};

export default buildControl;
