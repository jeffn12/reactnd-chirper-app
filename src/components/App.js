import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return <h1>Welcome to the Chirpy App, a Twitter clone.</h1>;
  }
}

export default connect()(App);
