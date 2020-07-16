import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import { Tweet } from "./Tweet";
import TweetPage from "./TweetPage";

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
        {!this.props.loading && (
          <div>
            <TweetPage match={{ params: { id: "2mb6re13q842wu8n106bhk" } }} />
            <NewTweet />
            <Dashboard />
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
