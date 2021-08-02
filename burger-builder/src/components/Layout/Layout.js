//start with layout
import React from "react";

import Aux from "../../hoc/Auxillary";
//npm i css-modules to install css modules
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer, BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
