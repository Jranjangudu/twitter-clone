import React from "react";
import "./SidebarOption.css";
const SidebarOption = ({ text, Icons }) => {
  return (
    <div className="sidebar__options">
      <Icons />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
