import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "./index";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchTopCities = factor => dispatch => {
  dispatch({ type: FETCH_TOP_CITIES_INITIALIZE });
  //data is the factor as a string

  return axios
    .post("https://bestplacesbe-test.herokuapp.com/city/ds?limit=10", {
      input1: [factor]
    })
    .then(res => {
      dispatch({
        type: FETCH_TOP_CITIES_SUCCESS,
        payload: { [factor]: res.data.result }
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
