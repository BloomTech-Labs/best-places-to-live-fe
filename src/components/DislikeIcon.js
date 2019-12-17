import React from "react";
import { addDislikedCity } from "../actions/addDislikedCity";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";
import styled, { css } from "styled-components";
import { Button } from "../styles";

function DislikeIcon({
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity,
  city,
  handleClose,
  ...rest
}) {
  const handleClick = async () => {
    let response;
    if (rest.actionType === "closeModal") {
      handleClose();
    } else if (rest.actionType === "deleteLike") {
      response = await deleteLikedCity({ city_id: city.city_id });
    } else if (rest.actionType === "deleteDislike") {
      response = await deleteDislikedCity({ city_id: city.city_id });
    } else {
      response = await addDislikedCity(city);
    }
  };

  const StyledFaTimes = styled(FaTimes)`
    color: ${() => (rest.iconColor ? "black" : "white")};

    font-size: 20px;

    transition: all 0.225s ease-in-out;

    &:hover {
      cursor: pointer;
      fill: ${() => (rest.actionType === "closeModal" ? "black" : "#e81919")};
      opacity: 0.75;
      transform: scale(1.5);
    }
  `;

  const IconButton = styled(Button)`
    background-color: transparent;
    border: none;
    position: relative;
    padding: 0px;
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <IconButton onClick={handleClick}>
      <StyledFaTimes />{" "}
    </IconButton>
  );
}

export default connect(null, {
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity
})(DislikeIcon);
