import React from "react";
import { Link } from "react-router-dom";
import { PaperAirplane } from "../svg/PaperAirplane";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nav">
        <div className="logo">
          <span className="logo__pre">Hackathon</span>
          <span className="logo__post">Cyber Garden</span>
        </div>
        <Link className="link" to="/main">
          Глаавная
        </Link>
        <Link className="link" to="/events">
          События
        </Link>
        <Link className="link" to="/questions">
          Вопрос/Ответ
        </Link>
        <Link className="link" to="/chat">
          Чат
        </Link>
      </div>
      <div className="dispatch">
        <span className="dispatch__text">Подписаться на рассылку новостей</span>
        <div className="dispatch-input">
          <input className="input" type="text" placeholder="Ваш E-mail" />
          <PaperAirplane />
        </div>
      </div>
      <div className="map">
        <div className="fake-map" />
      </div>
    </div>
  );
};

export default Footer;
