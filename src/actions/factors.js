import {
  FETCH_FACTORS_INITIALIZE,
  FETCH_FACTORS_SUCCESS
  // FETCH_FACTORS_FAIL
} from "./index";
import { factors } from "../utils/factors";

export const fetchFactors = () => dispatch => {
  dispatch({ type: FETCH_FACTORS_INITIALIZE });
  // rank, factor, display name
  dispatch({ type: FETCH_FACTORS_SUCCESS, payload: factors });
  // axiosWithAuth()
  //   .get("/backendpointneeded")
  //   .then(res => {
  //     dispatch({ type: FETCH_FACTORS_SUCCESS });
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: FETCH_FACTORS_FAIL,
  //       payload: { err, message: err.message }
  //     });
  //   });
};
