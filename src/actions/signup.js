import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { SIGNUP_INITIALIZE, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./index";
import { toast } from "react-toastify";

export const signup = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });
  return axiosWithAuth()
    .post(`/users/register`, userData)
    .then(res => {
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("id", res.data._id);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          id: res.data._id,
          email: res.data.email,
          name: res.data.name,
          location: res.data.location,
          likes: res.data.likes,
          dislikes: res.data.dislikes,
          factors: res.data.factors
        }
      });
      return true;
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return false;
    });
};
