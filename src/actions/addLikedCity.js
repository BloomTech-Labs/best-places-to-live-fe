import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  ADD_LIKED_CITY_FAIL,
  ADD_LIKED_CITY_INITIALIZE,
  ADD_LIKED_CITY_SUCCESS
} from "./index";

export const addLikedCity = data => dispatch => {
  dispatch({ type: ADD_LIKED_CITY_INITIALIZE });

  const token = sessionStorage.getItem("token");
  if (!token) {
    toast.error("You need to be logged in!");
  } else {
    /* Data in body of request is {city_id, city_name} */
    return axiosWithAuth()
      .post("/users/likes", data)
      .then(res => {
        dispatch({
          type: ADD_LIKED_CITY_SUCCESS,
          payload: res.data.likes
        });
        toast.success("Success - City was added to your likes!");
      })
      .catch(err => {
        dispatch({
          type: ADD_LIKED_CITY_FAIL,
          payload: { err, message: err.message }
        });
        toast.error(err.message);
      });
  }
};
