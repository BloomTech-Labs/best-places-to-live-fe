import React from "react";
import { addLikedCity } from "../actions/addLikedCity";
import styled from "styled-components";
import { connect } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { Button } from "../styles";

function LikeIcon({ addLikedCity, deleteLikedCity, city, liked, ...rest }) {
  const handleClick = async () => {
    let response;
    if (liked) {
      response = await deleteLikedCity({ city_id: city.city_id });
    } else {
      response = await addLikedCity(city);
    }

    if (response === "Failure") {
      rest.history.push("/sign-up");
    }
  };

  const StyledRegHeart = styled(FiHeart)`
    color: ${() => (rest.iconColor ? "black" : "white")};
    font-size: 20px;
    fill: ${() => (liked ? "red" : "transparent")};
    transition: all 0.225s ease-in-out;

    &:hover {
      cursor: pointer;
      fill: #e81919;
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
      {" "}
      <StyledRegHeart />{" "}
    </IconButton>
  );
}

/* Future: Good place to put errors, connect to state */
export default connect(null, { addLikedCity, deleteLikedCity })(LikeIcon);
