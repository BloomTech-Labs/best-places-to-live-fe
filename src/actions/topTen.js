import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  FETCH_TOP_TEN_INITIALIZE,
  FETCH_TOP_TEN_SUCCESS,
  FETCH_TOP_TEN_FAIL
} from "./index";

export const fetchTopTen = data => dispatch => {
  dispatch({ type: FETCH_TOP_TEN_INITIALIZE });

  return axiosWithAuth()
    .get("/city/topten-score_total")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_TOP_TEN_SUCCESS,
        payload: res.data.cities
      });
      return "Successful";
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_TOP_TEN_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
