import React, { useEffect } from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./top-rated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
