import React from "react";
import { addDislikedCity } from "../actions/addDislikedCity";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";

function DislikeIcon({ addDislikedCity, ...rest }) {
  const handleClick = async () => {
    const response = await addDislikedCity();

    if (response === "Failure") {
      rest.history.push("/signup");
    } else {
    }
  };
  return (
    <FaTimes
      onClick={handleClick}
      style={{ color: "white", fontSize: "20px" }}
    />
  );
}

export default connect(null, { addDislikedCity })(DislikeIcon);
