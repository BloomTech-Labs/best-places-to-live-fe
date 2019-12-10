import React, { useState, useEffect } from "react";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import styled from "styled-components";
import theme from "../theme";
import useDebounce from "../hooks/useDebounce";
import { Container, Input, StyledSearchBar, Flex } from "../styles/index";
import { IoIosSearch } from "react-icons/io";

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

  const handleChange = e => {
    console.log(e);
    setLocation(e.target.value);
  };

  const handleInput = event => {
    console.log(event);
    if (event.keyCode === 13) {
      fetchLocation(location);
    }
  };

  /*
    outside div - relative/
    icon
    inner div/
    label
    input
     /close inner div
     /close outer div
  */

  return (
    // <StyledSearchBar
    //   type="text"
    //   placeholder="&#xF002; Search for cities or states"
    //   name="location"
    //   value={location}
    //   fontSize={2}
    //   fontFamily="FontAwesome"
    //   maxWidth="100%"
    //   width="375px"
    //   onChange={e => handleChange(e)}
    //   onKeyDown={e => handleInput(e)}
    // />

    <Container position="relative">
      <Container position="absolute" top="7px" left="8px">
        <IoIosSearch fontSize="25px" />
      </Container>
      <StyledSearchBar
        type="text"
        placeholder="Search for cities or states"
        name="location"
        value={location}
        fontSize={2}
        maxWidth="100%"
        width="375px"
        onChange={e => handleChange(e)}
        onKeyDown={e => handleInput(e)}
        paddingLeft="40px"
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
