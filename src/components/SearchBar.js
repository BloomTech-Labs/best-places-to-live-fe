import React, { useState } from "react";
import { fetchLocationsByName } from "../actions/locationsByName";
import { connect } from "react-redux";
import { Container, StyledSearchBar, Flex, Button } from "../styles/index";
import { IoIosSearch } from "react-icons/io";

function SearchBar({
  fetchLocationsByName,
  isFetching,
  error,
  page,
  showModal,
  show,
  ...rest
}) {
  const [location, setLocation] = useState("");
  const fetchLocation = async data => {
    const response = await fetchLocationsByName({
      searchTerm: data
    });
    //If no error, push user to new page else
    if (response && page !== "landing") {
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
    <Flex width={["100%", "50%"]} justifyContent={["none", "center"]}>
      <Container
        borderTopLeftRadius="5px"
        borderBottomLeftRadius="5px"
        display="inline-block"
        padding=".5em .75em"
        border="0"
        backgroundColor="#E6E4EA"
        opacity="0.48"
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
        placeholder="Search for a city or state"
        name="location"
        value={location}
        onChange={e => handleChange(e)}
        onKeyDown={e => handleInput(e)}
      />
      <Button
        display={show ? "none" : ""}
        onClick={showModal}
        borderRadius="45rem"
        borderColor="blue"
        alignSelf="flex-start"
        width="100%"
        maxWidth={["105px", "150px"]}
        marginLeft="20px"
        marginBottom="0px"
        backgroundColor="#3171E4"
        color="white"
      >
        Add Filters
      </Button>
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
