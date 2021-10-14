import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Post.css";
const Post = ({ displayName, userName, text, image, avatar, verified }) => {
  return (
    <div className="post__wrapper">
      <div className="post__avatar">
        <Avatar alt="avatar" src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__displayname">
            <h3>
              {displayName}
              {verified && (
                <span>
                  <VerifiedUserIcon className="post__verifiedbadge" />
                </span>
              )}

              <span className="post__username">@{userName}</span>

              <MoreHorizIcon className="post__deleteIcon" />
            </h3>{" "}
          </div>{" "}
        </div>

        <div className="post__description">{text}</div>
        {image && <img src={image} alt="posts" className="post__image" />}
        <div className="post__footer">
          <IconButton>
            {" "}
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RepeatOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <PublishOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
