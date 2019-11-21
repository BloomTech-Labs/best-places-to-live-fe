import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "./index";
import axios from "axios";

export const fetchTopCities = data => dispatch => {
  dispatch({ type: FETCH_TOP_CITIES_INITIALIZE });

  return axios
    .post("https://best-places-api.herokuapp.com/api", {
      input1: ["score_total"]
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_TOP_CITIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_TOP_CITIES_FAIL,
        payload: { err, message: err.message }
      });
    });
};
