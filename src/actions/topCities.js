import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "./index";

export const fetchTopCities = data => dispatch => {
  dispatch({ type: FETCH_TOP_CITIES_INITIALIZE });

  return axiosWithAuth()
    .get("/city/topten-score_total")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_TOP_CITIES_SUCCESS,
        payload: res.data.cities
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_TOP_CITIES_FAIL,
        payload: { err, message: err.message }
      });
    });
};
