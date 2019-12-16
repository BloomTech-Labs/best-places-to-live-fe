import React from "react";
import { connect } from "react-redux";
import CityStats from "./CityStats";
import { Grid } from "../styles/index";

const ComparisonPage = ({ comparedCities }) => {
  const [city1, city2] = comparedCities;
  return (
    <Grid twoColumns>
      <CityStats city={city1} />
      <CityStats city={city2} />
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    comparedCities: state.comparedCities
  };
};

export default connect(mapStateToProps, {})(ComparisonPage);
