import React from "react";
import { connect } from "react-redux";
import CityCard from "./CityCard";
import Footer from "./Footer";

function SearchResultsPage({ displayedCities }) {
  //props = from state => displayedCities

  return (
    <div className="search-results">
      <p className="search title"> Search Results</p>
      {displayedCities.map(city => (
        <CityCard key={city._id} city={city} />
      ))}
      <Footer />
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    displayedCities: state.displayedCities
  };
};

export default connect(mapStatetoProps)(SearchResultsPage);
