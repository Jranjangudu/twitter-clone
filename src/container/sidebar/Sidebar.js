import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import { NavLink } from "react-router-dom";
import LinkData from "./LinkData";

const Sidebar = () => {
  return (
    <aside className={style.border__right}>
      <TwitterIcon className={style.twitter_logo} />
      {LinkData.map((link) => (
        <NavLink to={link.path} className={style.nav__link} key={link.id}>
          <SidebarOption text={link.text} Icons={link.icon} />
        </NavLink>
      ))}

      {/* tweet_button */}
      <NavLink to="/" className={style.nav__link}>
        <button className={style.tweet__btn}>Tweet</button>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
