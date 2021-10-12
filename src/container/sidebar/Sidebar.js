import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
const Sidebar = () => {
  return (
    <aside className={style.border__right}>
      <TwitterIcon
        className={style.twitter_logo}
        style={{ fontSize: "40px" }}
      />
      <SidebarOption text="Home" Icons={HomeIcon} />
      <SidebarOption text="Explore" Icons={SearchIcon} />
      <SidebarOption text="Notifications" Icons={NotificationsIcon} />
      <SidebarOption text="Messages" Icons={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icons={BookmarkBorderIcon} />
      <SidebarOption text="Profile" Icons={PersonOutlineIcon} />

      {/* tweet_button */}
      <button className={style.tweet__btn}>Tweet</button>
    </aside>
  );
};

export default Sidebar;
