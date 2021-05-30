import React from "react";
import { Link } from "react-router-dom"

import "./style.scss";

const MainQuestion = () => {
  return (
    <div className="qBlok">
      <span>Вопрос/Ответ</span>
      <div className="cont">
        <div className="col1">
          <div className="col1__pre">Задайте вопрос нашим менторам</div>
          <Link className="col1__post">Или найди готовый ответ</Link>
        </div>
      </div>
    </div>
  );
};

export default MainQuestion;
