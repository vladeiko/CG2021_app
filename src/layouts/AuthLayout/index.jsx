import React from "react";
import MainLayout from "../MainLayout";
import Header from "../../components/Header";

import "./style.scss";

const AuthLayout = ({ children, title = "", subtitle = "" }) => {
  return (
    <MainLayout>
      <div className="auth-layout">
        <Header />
        <div className="intro">
          <div className="intro__title">{title}</div>
          <div className="intro__subtitle">{subtitle}</div>
        </div>
        {children}
      </div>
    </MainLayout>
  );
};

export default AuthLayout;
