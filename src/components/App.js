import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from "../navigation/NavBar";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import TweetPage from "./TweetPage";

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />

        {this.props.loading ? null : (
          <div className="container">
            <NavBar />
            <Route path="/" exact component={Dashboard} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/new" component={NewTweet} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);
