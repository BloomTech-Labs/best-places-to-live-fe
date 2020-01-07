import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "./index";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchTopCities = factor => dispatch => {
  dispatch({ type: FETCH_TOP_CITIES_INITIALIZE });
  //data is the factor as a string

  //If user logged in, top cities won't display their dislikes
  console.log("awoeifjapwoeifj", sessionStorage.getItem("token"));
  const token = sessionStorage.getItem("token");
  const url = token ? "spec-ds" : "ds";

  return axiosWithAuth()
    .post(`https://bestplacesbe-test.herokuapp.com/city/${url}?limit=10`, {
      input1: [factor]
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_TOP_CITIES_SUCCESS,
        payload: { [factor]: token ? res.data.final : res.data.result }
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
