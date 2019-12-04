import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  UPDATE_PROFILE,
  UPDATE_PROFILEUPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILEUPDATE_PROFILE_FAIL
} from "./index";
import { toast } from "react-toastify";

export const updateProfileupdateProfile = userData => dispatch => {
  dispatch({ type: UPDATE_PROFILE_INITIALIZE });
  return axiosWithAuth()
    .post(`/users/register`, userData)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data._id);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: {
          id: res.data._id,
          email: res.data.email,
          name: res.data.name,
          location: res.data.location
        }
      });
      return "Successful";
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return "Failure";
    });
};
