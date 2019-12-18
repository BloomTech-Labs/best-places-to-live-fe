import React from "react";
import { connect } from "react-redux";
import CityStats from "./CityStats";
import { Flex } from "../styles/index";

const ComparisonPage = ({ comparedCities, history }) => {
  const [city1, city2] = comparedCities;
  return (
    <Flex justifyContent="center">
      <CityStats city1={city1} city2={city2} history={history} />
    </Flex>
  );
};

const mapStateToProps = state => {
  return {
    comparedCities: state.comparedCities
  };
};

export default connect(mapStateToProps, {})(ComparisonPage);
