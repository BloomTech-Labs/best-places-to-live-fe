import axios from "axios";
import {
  FETCH_LOCATIONS_BY_FACTORS_INITIALIZE,
  FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
  FETCH_LOCATIONS_BY_FACTORS_FAIL
} from "./index";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchLocationsByFactors = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_FACTORS_INITIALIZE });
  /* 
  {"input1": ["population", "score_safety"]}
*/
  const token = sessionStorage.getItem("token");
  const url = token
    ? "https://bestplacesbe-test.herokuapp.com/city/spec-ds"
    : "https://bestplacesbe-test.herokuapp.com/city/ds";
  console.log(url);
  return axiosWithAuth()
    .post(url, { input1: data })
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
        payload: {
          cities: token ? res.data.final : res.data.result,
          selectedFactors: data
        }
      });
      return true;
    })
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_BY_FACTORS_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return false;
    });
};
