import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

export class NewTweet extends Component {
  state = {
    text: ""
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

    dispatch(handleAddTweet(text, id));

    this.setState(() => ({ text: "" }));
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;

    /** TODO: redirect to home view if submitted */

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
