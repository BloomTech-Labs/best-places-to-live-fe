import React, { useState } from "react";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import Error from "./Error";
import { withRouter } from "react-router-dom";
import { Container, Flex, Input } from "../styles/index";

function SearchBar({ history, fetchLocationsByName, isFetching, error }) {
  const [location, setLocation] = useState("");

  const fetchLocation = async data => {
    const response = await fetchLocationsByName({
      searchTerm: data
    });
    //If no error, push user to new page else
    if (response === "Successful") {
    } else {
      console.log(response);
    }
  };

  const handleInput = event => {
    if (event.keyCode === 13) {
      fetchLocation(location);
    }
  };

  console.log("SearchByCity error", error);
  return (
    <Container>
      {error && <Error error={error} />}
      <Input
        type="text"
        placeholder="location"
        name="location"
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyDown={e => handleInput(e)}
      />
    </Container>
  );
}

const mapStateToProps = state => {
  const { isFetching } = state;
  return {
    isFetching,
    error: state.fetchLocationsByNameError
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchLocationsByName })(SearchBar)
);
