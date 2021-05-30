import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainLayout from "../MainLayout";

import "./style.scss";

const ContentLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="content-layout">
        <Header />
        {children}
        <Footer />
      </div>
    </MainLayout>
  );
};

export default ContentLayout;
