import logo from "./logo.svg";
import classes from "./App.css";

import React, { Component } from "react";

import styles from "./style.module.css";

class App extends Component {
  render() {
    const assignedClasses = [styles.red, styles.center];

    console.log(assignedClasses.join(" "));
    return <div className={assignedClasses.join(" ")}>Hello</div>;
  }
}

export default App;
