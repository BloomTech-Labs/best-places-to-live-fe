import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  UPDATE_PROFILE_INITIALIZE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from "./index";
import { toast } from "react-toastify";

export const updateProfile = userData => dispatch => {
  dispatch({ type: UPDATE_PROFILE_INITIALIZE });
  console.log(userData)
  return axiosWithAuth()
    .put(`/users/profile`, userData)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: {
          email: res.data.email,
          name: res.data.name
        }
      });
      toast.success("Profile successfully updated!");
      return "Successful";
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return "Failure";
    });
};
