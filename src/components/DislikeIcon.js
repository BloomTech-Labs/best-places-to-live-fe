import React from "react";
import { addDislikedCity } from "../actions/addDislikedCity";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";

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
  return (
    <FaTimes
      onClick={handleClick}
      style={{ color: "white", fontSize: "20px" }}
    />
  );
}

export default connect(null, {
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity
})(DislikeIcon);
