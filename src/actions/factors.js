import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_FACTORS_INITIALIZE,
  FETCH_FACTORS_SUCCESS,
  FETCH_FACTORS_FAIL
} from "./index";

export const fetchFactors = () => dispatch => {
  dispatch({ type: FETCH_FACTORS_INITIALIZE });
  axiosWithAuth()
    .get("/backendpointneeded")
    .then(res => {
      dispatch({ type: FETCH_FACTORS_SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FACTORS_FAIL,
        payload: { err, message: err.message }
      });
    });
};
