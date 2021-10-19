import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import db from "../../../firebase";
import "./TweetBox.css";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const UserData = JSON.parse(localStorage.getItem("userdata"));
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: UserData.userName,
      userName: UserData.userName + randomNumber,
      text: tweetMessage,
      image: tweetImage,
      avatar: `https://ui-avatars.com/api/?color=ff0000&name=${UserData.userName}`,
      verified: true,
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
            src={`https://ui-avatars.com/api/?color=ff0000&name=${UserData.userName}`}
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

        <button className="tweet__btn"  type="submit">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
