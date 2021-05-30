import React from "react";
import { Avatar } from "antd";

const Comment = ({ answer }) => {
  return (
    <div className="comment-wrapper">
      <div className="card-content">
        <div className="avatar-wrapper">
          <Avatar src="https://i.imgur.com/NBXZrAR.jpg" />
        </div>
        <div className="answer">
          <div className="answer__author">
            {answer?.first_name} {answer?.last_name}
          </div>
          <div className="answer__text">{answer?.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
