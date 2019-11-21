import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { SIGNUP_INITIALIZE, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./index";

export const signup = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });
  return axiosWithAuth()
    .post(`/users/register`, userData)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data._id);
      dispatch({
        type: SIGNUP_SUCCESS,
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
        type: SIGNUP_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
