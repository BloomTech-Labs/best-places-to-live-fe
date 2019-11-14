import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_LOCATIONS_BY_FACTORS_INITIALIZE,
  FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
  FETCH_LOCATIONS_BY_FACTORS_FAIL
} from "./index";

export const fetchLocationsByFactors = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_FACTORS_INITIALIZE });

  return axiosWithAuth()
    .post("/city/search", data)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
        payload: res.data
      });
      return "Successful";
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_FAIL,
        payload: { err, message: "Error in locations" }
      });
      return "Failure";
    });
};
