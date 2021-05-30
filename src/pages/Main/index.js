import React from "react";
import ContentLayout from "../../layouts/ContentLayout";
import DemoNews from "../../components/DemoNews";
import MainQuestion from "../../components/MainQuestion";
import YouTube from "../../components/YouTube";

const TestPage = () => {
  return (
    <ContentLayout>
      <DemoNews />
      <MainQuestion />
      <YouTube />
    </ContentLayout>
  );
};

export default TestPage;
