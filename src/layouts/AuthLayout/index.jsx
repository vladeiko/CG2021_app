import React from "react";
import MainLayout from "../MainLayout";

import "./style.scss";

const AuthLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="auth-layout">
        <div className="intro">
          <div className="intro__top">
            <div className="intro__top__pre">Hackathon</div>
            <div className="intro__top__post">Cyber Garden</div>
          </div>
          <div className="intro__down">{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthLayout;
