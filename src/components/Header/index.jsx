import React from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../svg/UserIcon";

import "./style.scss";

const Header = () => {
  return (
    <div className="header">
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
      <Link className="link" to="/signin">
        <UserIcon />
      </Link>
    </div>
  );
};

export default Header;
