import React from "react";
import "./App.css";
import Feed from "./container/Feed/Feed";
import Sidebar from "./container/sidebar/Sidebar";
import TimeLine from "./container/TimeLine/TimeLine";

const LandingPage = () => {
  return (
    <div className="container">
      <main className="container__main">
        {/* <!-- Left sidebar --> */}

        <aside className="container__left">
          {" "}
          <Sidebar />
        </aside>

        {/* <!-- Main content --> */}
        <article className="container__middle">
          <article className="container__feed">
            <Feed />
          </article>
          {/* <!-- Right sidebar --> */}
          <aside className="container__right">
            <TimeLine />
          </aside>
        </article>
      </main>
    </div>
  );
};

export default LandingPage;
