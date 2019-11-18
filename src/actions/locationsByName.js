import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_LOCATIONS_BY_NAME_INITIALIZE,
  FETCH_LOCATIONS_BY_NAME_SUCCESS,
  FETCH_LOCATIONS_BY_NAME_FAIL
} from "./index";

export const fetchLocationsByName = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_NAME_INITIALIZE });

  return axiosWithAuth()
    .post("/city/search", data)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_SUCCESS,
        payload: res.data.cities
      });
      return "Successful";
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
