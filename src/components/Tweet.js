import React, { Component } from "react";
import { connect } from "react-redux";
// API helpers
import { formatTweet } from "../utils/helpers";

export class Tweet extends Component {
  render() {
    return !this.props.tweet ? (
      <p>This Chirp doesn't exist</p>
    ) : (
      <div className="tweet">{JSON.stringify(this.props.tweet)}</div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets ? tweets[id] : null;
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
};

export default connect(mapStateToProps)(Tweet);
