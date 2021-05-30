import React from "react";

import "./style.scss";

const NewForDemoNews = ({ title = "", content = "" }) => {
  return (
    <div className="new">
      <div className="new__pre">{title}</div>
      <div className="new__post">{content}</div>
    </div>
  );
};

export default NewForDemoNews;
