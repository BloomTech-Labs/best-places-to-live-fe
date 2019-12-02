import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  ADD_LIKED_CITY_FAIL,
  ADD_LIKED_CITY_INITIALIZE,
  ADD_LIKED_CITY_SUCCESS
} from "./index";
import { toast } from "react-toastify";

export const addLikedCity = data => dispatch => {
  dispatch({ type: ADD_LIKED_CITY_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axiosWithAuth()
    .post("/users", data)
    .then(res => {
      dispatch({
        type: ADD_LIKED_CITY_SUCCESS,
        payload: res.data
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
};
