import React from "react";
import Navigation from "../Navigation";
import HomeSearchBar from "../HomeSearchBar";
import TopTenGrid from "../TopTen";
import GoogleMap from "../GoogleMap";
import CategoryContent from "../CategoryContentHelper";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeSearchBar />
      <CategoryContent />
      <TopTenGrid />
    </div>
  );
};

export default Home;
