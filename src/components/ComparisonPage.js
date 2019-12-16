import React from "react";
import { connect } from "react-redux";

const ComparisonPage = ({ comparedCities }) => {
  const [city1, city2] = comparedCities;
  return (
    <div>
      <h1>{city1.name}</h1>
      <h1>{city2.name}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comparedCities: state.comparedCities
  };
};

export default connect(mapStateToProps, {})(ComparisonPage);
