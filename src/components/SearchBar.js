import React, { useState } from "react";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import { Container, StyledSearchBar, Flex } from "../styles/index";
import { IoIosSearch } from "react-icons/io";

function SearchBar({ fetchLocationsByName, isFetching, error, page, ...rest }) {
  const [location, setLocation] = useState("");

  const fetchLocation = async data => {
    const response = await fetchLocationsByName({
      searchTerm: data
    });
    //If no error, push user to new page else
    if (response && page === "landing") {
      rest.history.push("/search");
    } else {
    }
  };

  const handleChange = e => {
    setLocation(e.target.value);
  };

  const handleInput = event => {
    if (event.keyCode === 13) {
      fetchLocation(location);
    }
  };

  return (
    <Flex marginBottom="20px">
      <Container
        border="1px solid lightgrey"
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="10px"
        display="inline-block"
        padding=".5em .75em"
        borderRight="0"
        backgroundColor="#fff"
      >
        <IoIosSearch
          display="inline"
          fontSize="25px"
          width="auto"
          height="auto"
        />
      </Container>
      <StyledSearchBar
        type="text"
        placeholder="Search for cities or states"
        name="location"
        value={location}
        onChange={e => handleChange(e)}
        onKeyDown={e => handleInput(e)}
      />
    </Flex>
  );
}

const mapStateToProps = state => {
  const { isFetching } = state;
  return {
    isFetching
  };
};

export default connect(mapStateToProps, { fetchLocationsByName })(SearchBar);
