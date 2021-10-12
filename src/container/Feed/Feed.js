import React, { useState, useEffect } from "react";
import Post from "../../components/Posts/Post";
import db from "../../firebase";
import css from "./Feed.module.css";
import TweetBox from "./TweetBox/TweetBox";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className={css.feet__container}>
      <h2 className={css.feet__header}>Home</h2>
      <TweetBox />
      {posts &&
        posts.map((post, idx) => {
          return (
            <div key={idx + 10}>
              <Post
                displayName={post.displayName}
                userName={post.userName}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
                verified={post.verified}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Feed;
