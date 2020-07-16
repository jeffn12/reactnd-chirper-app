import React, { Component } from "react";

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

    // TODO: dispatch new tweet to the store

    console.log("NEW TWEET: ", text);
    this.setState(() => ({ text: "" }));
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;

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

export default NewTweet;
