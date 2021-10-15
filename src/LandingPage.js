import React from "react";
import "./App.css";
import Feed from "./container/Feed/Feed";
import Sidebar from "./container/sidebar/Sidebar";
import TimeLine from "./container/TimeLine/TimeLine";
import { useParams } from "react-router-dom";
import withPageTitle from "./services/withPageTitle";
import Explore from "./container/Explore/Explore";
import Notifications from "./container/Notificatioin/Notifications";
import Profile from "./container/Profile/Profile";
import Bookmarks from "./container/Bookmarks/Bookmarks";

const ExplorePageComponent = withPageTitle({
  component: Explore,
  title: "Explore -  twitter clone",
});
const NotificationsPageComponent = withPageTitle({
  component: Notifications,
  title: "Notifications -  twitter clone",
});
const ProfilePageComponent = withPageTitle({
  component: Profile,
  title: "Profile -  twitter clone",
});
const BookmarksPageComponent = withPageTitle({
  component: Bookmarks,
  title: "Bookmarks -  twitter clone",
});
const LandingPage = () => {
  const { pathID } = useParams();

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
            {pathID === undefined ? (
              <Feed />
            ) : pathID === "1" ? (
              <ExplorePageComponent />
            ) : pathID === "2" ? (
              <NotificationsPageComponent />
            ) : pathID === "3" ? (
              <BookmarksPageComponent />
            ) : (
              pathID === "4" && <ProfilePageComponent />
            )}
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
