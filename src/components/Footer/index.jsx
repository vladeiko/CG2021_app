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
          Главная
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
        <div className="map-text">Мы тут</div>
        <img className="map-img" src="https://i.imgur.com/nZqhMO4.png" alt="ABOBA" />
      </div>
    </div>
  );
};

export default Footer;
