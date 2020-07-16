import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

export class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  };

  handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;

    this.setState(() => ({ text }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    if (text.length > 280) {
      alert(
        `Your Chirp is too long.  Please remove ${
          text.length - 280
        } characters and try again.`
      );
    } else {
      dispatch(handleAddTweet(text, id));
      this.setState(() => ({ text: "", toHome: id ? false : true }));
    }
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;

    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Compose New Chirp</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            placeholder="What's on your mind?"
            value={text}
            onChange={this.handleChange}
          />
          {tweetLeft <= 100 && (
            <div
              className={
                tweetLeft < 0 ? "tweet-length over-length" : "tweet-length"
              }
            >
              {tweetLeft}
            </div>
          )}
          <button className="btn" type="submit" disabled={text === ""}>
            Chirp
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
