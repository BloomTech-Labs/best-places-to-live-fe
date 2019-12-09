import React, { useState } from "react";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import { Container, Input, StyledSearchBar } from "../styles/index";

function SearchBar({ fetchLocationsByName, isFetching, error, page, ...rest }) {
  const [location, setLocation] = useState("");

  const fetchLocation = async data => {
    const response = await fetchLocationsByName({
      searchTerm: data
    });
    //If no error, push user to new page else
    if (response === "Successful" && page === "landing") {
      rest.history.push("/search");
    } else {
    }
  };

  const handleInput = event => {
    if (event.keyCode === 13) {
      fetchLocation(location);
    }
  };

  return (
    <Container width="20%" display="flex" justifyContent="center">
      <StyledSearchBar
        type="text"
        placeholder="Search for cities or states"
        name="location"
        value={location}
        width={1500}
        fontSize={2}
        width="100%"
        onChange={e => setLocation(e.target.value)}
        onKeyDown={e => handleInput(e)}
      />
    </Container>
  );
}

const mapStateToProps = state => {
  const { isFetching } = state;
  return {
    isFetching
  };
};

export default connect(mapStateToProps, { fetchLocationsByName })(SearchBar);
