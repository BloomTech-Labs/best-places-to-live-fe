import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  DELETE_DISLIKED_CITY_FAIL,
  DELETE_DISLIKED_CITY_INITIALIZE,
  DELETE_DISLIKED_CITY_SUCCESS
} from "./index";

export const deleteLikedCity = data => dispatch => {
  dispatch({ type: DELETE_DISLIKED_CITY_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axiosWithAuth()
    .delete("/users", data)
    .then(res => {
      dispatch({
        type: DELETE_DISLIKED_CITY_SUCCESS,
        payload: res.data
      });
      toast.success("Success - City was removed from your dislikes!");
    })
    .catch(err => {
      dispatch({
        type: DELETE_DISLIKED_CITY_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};
