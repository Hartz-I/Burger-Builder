import styles from "./App.module.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    btnClass: "",
    clicked: false,
  };

  btnStyleHandler = () => {
    const clicked = this.state.clicked;
    this.setState({ btnClass: styles.red, clicked: !clicked });

    if (this.state.clicked) {
      this.setState({ btnClass: "" });
    }
  };
  render() {
    return (
      <div className={styles.App}>
        <button className={this.state.btnClass} onClick={this.btnStyleHandler}>
          Push
        </button>
      </div>
    );
  }
}

export default App;
