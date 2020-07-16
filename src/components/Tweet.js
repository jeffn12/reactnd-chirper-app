import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// API helpers
import { formatTweet } from "../utils/helpers";
import { formatDate } from "../utils/helpers";
// Icons
import { BsFillReplyFill, BsHeartFill, BsHeart } from "react-icons/bs";
import { handleToggleTweet } from "../actions/tweets";

export class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/tweet/${id}`);
  };

  handleHeart = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, tweet } = this.props;
    dispatch(
      handleToggleTweet({ id: tweet.id, hasLiked: tweet.hasLiked, authedUser })
    );
  };

  handleReply = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/tweet/${id}`);
  };

  render() {
    const { tweet } = this.props;

    if (!tweet) return <p>This Chirp doesn't exist</p>;

    const {
      name,
      avatar,
      timestamp,
      text,
      id,
      likes,
      replies,
      hasLiked,
      parent
    } = tweet;

    return (
      <Link to={`/tweet/${id}`} className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @ {parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <BsFillReplyFill
              className="tweet-icon"
              onClick={(e) => this.handleReply(e, id)}
            />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleHeart}>
              {hasLiked ? (
                <BsHeartFill size={20} color="blue" className="tweet-icon" />
              ) : (
                <BsHeart size={20} className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Tweet));
