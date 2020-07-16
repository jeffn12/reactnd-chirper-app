import React, { Component } from "react";
import { connect } from "react-redux";
// API helpers
import { formatTweet } from "../utils/helpers";

export class Tweet extends Component {
  render() {
    console.log(this.props);
    return <div className="tweet">{JSON.stringify(this.props.tweet)}</div>;
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  };
};

export default connect(mapStateToProps)(Tweet);
