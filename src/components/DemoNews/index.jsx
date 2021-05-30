import React from "react";
import { Link } from "react-router-dom";
import NewsItem from "../NewForDemoNews";

import "./style.scss";

const DemoNews = () => {
  return (
    <div className="demo-news">
      <span>Новости Cyber Garden</span>
      <div className="news">
        <NewsItem title="конкурс от ценрт-инвест" content="Мемы, мемы, много мемов" />
        <NewsItem title="конкурс от ценрт-инвест" content="Мемы, мемы, много мемов" />
        <NewsItem title="конкурс от ценрт-инвест" content="Мемы, мемы, много мемов" />
      </div>
      <Link className="link" to="/news">
        Все новости
      </Link>
    </div>
  );
};

export default DemoNews;
