import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_LOCATIONS_BY_NAME_INITIALIZE,
  FETCH_LOCATIONS_BY_NAME_SUCCESS,
  FETCH_LOCATIONS_BY_NAME_FAIL
} from "./index";
import { toast } from "react-toastify";

export const fetchLocationsByName = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_NAME_INITIALIZE });
  //Check if user is logged in
  const token = sessionStorage.getItem("token");
  const url = token ? "/city/spec-search" : "/city/search";
  return axiosWithAuth()
    .post(url, data)
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_SUCCESS,
        payload: res.data.cities
      });
      return true;
    })
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return false;
    });
};
