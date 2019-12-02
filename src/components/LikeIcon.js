import React from "react";
import { addLikedCity } from "../actions/addLikedCity";
import { connect } from "react-redux";
import { FaRegHeart } from "react-icons/fa";

function LikeIcon({ addLikedCity, ...rest }) {
  const handleClick = async () => {
    const response = await addLikedCity();

    if (response === "Failure") {
      rest.history.push("/signup");
    } else {
    }
  };

  return (
    <FaRegHeart
      onClick={handleClick}
      style={{ color: "white", fontSize: "20px" }}
    />
  );
}

/* Future: Good place to put errors, connect to state */
export default connect(null, { addLikedCity })(LikeIcon);
