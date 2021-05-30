/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
import React from "react";

import "./style.scss";

const YouTube = () => {
  return (
    <div className="you-tube">
      <span>Прямой эфир</span>
      <iframe
        autoplay="autoplay"
        width="956"
        height="538"
        src="https://www.youtube.com/embed/HOJ7H6gh8Jo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  );
};

export default YouTube;
