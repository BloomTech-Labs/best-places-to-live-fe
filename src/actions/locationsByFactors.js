import axios from "axios";
import {
  FETCH_LOCATIONS_BY_FACTORS_INITIALIZE,
  FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
  FETCH_LOCATIONS_BY_FACTORS_FAIL
} from "./index";

export const fetchLocationsByFactors = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_FACTORS_INITIALIZE });
  /* 
  {"input1": ["population", "score_safety"]}
*/
  return axios
    .post("https://best-places-api.herokuapp.com/api", { input1: data })
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
        payload: res.data
      });
      return "Successful";
    })
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
