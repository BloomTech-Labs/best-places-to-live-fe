import React from "react";
import { addLikedCity } from "../actions/addLikedCity";
import styled from "styled-components";
import { connect } from "react-redux";
import { FiHeart } from "react-icons/fi";

function LikeIcon({ addLikedCity, ...rest }) {
  const handleClick = async () => {
    const response = await addLikedCity();

    if (response === "Failure") {
      rest.history.push("/signup");
    } else {
    }
  };

  const StyledRegHeart = styled(FiHeart)`
    color: #fff;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  `;

  return <StyledRegHeart onClick={handleClick} />;
}

/* Future: Good place to put errors, connect to state */
export default connect(null, { addLikedCity })(LikeIcon);
