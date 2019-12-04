import React from "react";
import { addDislikedCity } from "../actions/addDislikedCity";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

function DislikeIcon({
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity,
  ...rest
}) {
  const handleClick = async () => {
    let response;
    console.log(rest.actionType);
    if (rest.actionType === "deleteLike") {
      response = await deleteLikedCity();
    } else if (rest.actionType === "deleteDislike") {
      response = await deleteDislikedCity();
    } else {
      response = await addDislikedCity();
    }
  };

  const StyledFaTimes = styled(FaTimes)`
    color: #fff;
    font-size: 20px;

    transition: opacity 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  `;

  return <StyledFaTimes onClick={handleClick} />;
}

export default connect(null, {
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity
})(DislikeIcon);
