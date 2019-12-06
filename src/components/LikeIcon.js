import React from "react";
import { addLikedCity } from "../actions/addLikedCity";
import styled from "styled-components";
import { connect } from "react-redux";
import { FiHeart } from "react-icons/fi";

function LikeIcon({ addLikedCity, city, liked, ...rest }) {
  const handleClick = async () => {
    const response = await addLikedCity(city);

    if (response === "Failure") {
      rest.history.push("/signup");
    } else {
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

  return <StyledRegHeart onClick={handleClick} />;
}

/* Future: Good place to put errors, connect to state */
export default connect(null, { addLikedCity })(LikeIcon);
