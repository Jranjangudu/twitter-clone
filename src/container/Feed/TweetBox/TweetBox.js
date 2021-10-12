import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import db from "../../../firebase";
import "./TweetBox.css";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "react developer",
      userName: "developer12",
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://v4.mui.com/static/images/avatar/3.jpg",
      verified: false,
      timestamp: new Date(),
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweet__box">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__inputs">
          <Avatar
            alt="avatar"
            src="https://v4.mui.com/static/images/avatar/3.jpg"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            className="tweetMessage"
            type="text"
            required
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          className="tweetImage"
          type="URL"
        />

        <button className="tweet__btn" disable={!tweetMessage} type="submit">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
