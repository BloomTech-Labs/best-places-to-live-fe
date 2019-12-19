import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Text, Container, Flex, Nav } from "../styles/index";
import DislikeIcon from "./DislikeIcon";
import theme from "../theme";
import CategoryForm from "./CategoryForm";
import { connect } from "react-redux";

const AddFilters = ({ handleClose, ...rest }) => {
  const resetForm = () => {
    const reset = document.getElementById("reset");
    reset.click();
  };

  return (
    <>
      <Container
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="auto"
      >
        <Container
          width="100%"
          borderBottom={`.5px solid ${theme.colors.blackPearl}`}
          backgroundColor="athensGray"
        >
          <Nav display="grid" gridTemplateColumns="1fr 4fr 1fr">
            <Button
              border="none"
              marginBottom="0"
              backgroundColor="athensGray"
              padding="0"
              onClick={resetForm}
            >
              Clear All
            </Button>
            <Text textAlign="center" fontSize="1.25rem">
              Filters
            </Text>
            <Flex justifyContent="center" alignItems="center">
              <DislikeIcon
                actionType="closeModal"
                handleClose={handleClose}
                iconColor="black"
              ></DislikeIcon>
            </Flex>
          </Nav>
        </Container>
        <Container>
          <Text textAlign="center" color="choronozon" as="h2" fontSize={5}>
            Refine Your Search
          </Text>
          <Text
            textAlign="center"
            color="black"
            as="h3"
            fontSize={2}
            color="choronozon"
            fontWeight="normal"
          >
            Select the variables most important to you:
          </Text>
        </Container>
        <CategoryForm
          resetForm={resetForm}
          handleClose={handleClose}
          {...rest}
        />
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selectedFactors: state.selectedFactors
  };
};

export default withRouter(connect(mapStateToProps, null)(AddFilters));
