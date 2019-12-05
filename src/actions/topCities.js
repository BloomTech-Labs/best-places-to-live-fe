import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "./index";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchTopCities = data => dispatch => {
  dispatch({ type: FETCH_TOP_CITIES_INITIALIZE });
  //data is the factor as a string
  return axios
    .post("https://best-places-api.herokuapp.com/api", {
      input1: [data]
    })
    .then(res => {
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
      toast.error(err.message);
    });
};
