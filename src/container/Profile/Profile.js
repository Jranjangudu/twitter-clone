import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./profile.css";
const Profile = () => {
  const UserData = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div className="profile__container">
      <h1>
        {" "}
        <ArrowBackIcon className="arrow" /> {UserData.userName}
      </h1>
      <div className="banner">{/* <img src="" alt="" /> */}</div>
      <section className="user__wrapper">
        <div className="user__header">
          <img
            src={`https://ui-avatars.com/api/?color=ff0000&name=${UserData.userName}`}
            alt="logo"
          />

          <div className="delete__account">
            <DeleteOutlineIcon />
          </div>
        </div>
        <div className="user__info">
          <h2 className="user__name">{UserData.userName}</h2>
          <p className="join__date">Joined {UserData.timestamp}</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
