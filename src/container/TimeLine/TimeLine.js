import React from "react";
import "./Timeline.css";
const TimeLine = () => {
  return (
    <div>
      <div className="search__people">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <h4 className="search__header">What’s happening</h4>
      <a
        className="twitter-timeline"
        href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
      >
        Loading....
      </a>
    </div>
  );
};

export default TimeLine;
