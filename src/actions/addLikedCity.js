import axios from "axios";
import {
  ADD_LIKED_CITY_FAIL,
  ADD_LIKED_CITY_INITIALIZE,
  ADD_LIKED_CITY_SUCCESS
} from "./index";

export const addLikedCity = data => dispatch => {
  dispatch({ type: ADD_LIKED_CITY_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axios
    .post("/users", data)
    .then(res => {
      dispatch({
        type: ADD_LIKED_CITY_SUCCESS,
        payload: res.data
      });
      return "Successful";
    })
    .catch(err => {
      dispatch({
        type: ADD_LIKED_CITY_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
