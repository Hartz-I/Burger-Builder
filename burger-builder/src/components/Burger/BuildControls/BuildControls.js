import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div className={classes.Price}>
        <strong>দাম: {props.price.toFixed(2)} টাকা</strong>
      </div>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredentRemoved(ctrl.type)}
            disabledInfo={props.disabledInfo[ctrl.type]}
            pp={props.pp[ctrl.type]}
          />
        );
      })}
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW!
      </button>
    </div>
  );
};

export default buildControls;
