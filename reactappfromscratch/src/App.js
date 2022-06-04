import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hello, World. This is react project which has been setup from scratch.
          And not using create-react-app command ddd.
        </h1>
      </div>
    );
  }
}

export default hot(module)(App);
