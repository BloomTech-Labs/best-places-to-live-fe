import { toast } from "react-toastify";
import {
  EDIT_FACTORS_INITIALIZE,
  EDIT_FACTORS_SUCCESS,
  EDIT_FACTORS_FAIL
} from "./index";

export const editFactors = data => dispatch => {
  dispatch({ type: EDIT_FACTORS_INITIALIZE });

  axiosWithAuth()
    .put("/backendpointneeded", data)
    .then(res => {
      dispatch({ type: EDIT_FACTORS_SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: EDIT_FACTORS_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};
