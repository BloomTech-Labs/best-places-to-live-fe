import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  ADD_DISLIKED_CITY_FAIL,
  ADD_DISLIKED_CITY_INITIALIZE,
  ADD_DISLIKED_CITY_SUCCESS
} from "./index";

export const addDislikedCity = data => dispatch => {
  dispatch({ type: ADD_DISLIKED_CITY_INITIALIZE });
  const token = sessionStorage.getItem("token");
  if (!token) {
    toast.error("You need to be logged in!");
  } else {
    /* Data in body of request is {id, cityID} */
    return axiosWithAuth()
      .post("/users/dislikes", data)
      .then(res => {
        console.log("addDislikeCity", res.data);
        dispatch({
          type: ADD_DISLIKED_CITY_SUCCESS,
          payload: res.data.dislikes
        });
        toast.success("Success - City was added to your dislikes!");
      })
      .catch(err => {
        dispatch({
          type: ADD_DISLIKED_CITY_FAIL,
          payload: { err, message: err.message }
        });
        toast.error(err.message);
      });
  }
};
