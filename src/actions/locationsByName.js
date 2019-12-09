import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_LOCATIONS_BY_NAME_INITIALIZE,
  FETCH_LOCATIONS_BY_NAME_SUCCESS,
  FETCH_LOCATIONS_BY_NAME_FAIL
} from "./index";
import { toast } from "react-toastify";

export const fetchLocationsByName = data => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_BY_NAME_INITIALIZE });
  console.log("data before action creator", data);
  return axiosWithAuth()
    .post("/city/spec-search?limit=10", data)
    .then(res => {
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_SUCCESS,
        payload: res.data.cities
      });
      return "Successful";
    })
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_BY_NAME_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return "Failure";
    });
};
