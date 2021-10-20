import React, { useState, useEffect } from "react";
import Post from "../../components/Posts/Post";
import db from "../../firebase";
import css from "./Feed.module.css";
import TweetBox from "./TweetBox/TweetBox";
import { useHistory } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("auth");
    history.push("/login");
    window.location.reload();
  };

  return (
    <div className={css.feet__container}>
      <div className={css.feed__header}>
        <h2 className={css.home}> Home</h2>
        <h2 className={css.logout} onClick={handleLogout}>
          Logout
        </h2>
      </div>
      <TweetBox />
      {posts ? (
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
        })
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default Feed;
