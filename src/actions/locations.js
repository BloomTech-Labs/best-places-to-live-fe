import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_LOCATIONS_INITIALIZE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAIL
} from "./index";

export const fetchLocations = (location, factors = []) => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_INITIALIZE });
  let url;
  let data;
  if (factors.length === 0) {
    url = "/city/search";
    data = location;
  } else {
    url = "";
    data = factors;
  }

  axiosWithAuth()
    .post(url, data)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_LOCATIONS_SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: FETCH_LOCATIONS_FAIL,
        payload: { err, message: "Error in locations" }
      });
    });
};
