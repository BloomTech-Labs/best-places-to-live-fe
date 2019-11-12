import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { SIGNUP_INITIALIZE, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./index";

export const signup = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });

  axiosWithAuth
    .post(`/users/register`, userData)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.id });
    })
    .catch(err => ({
      type: SIGNUP_FAIL,
      payload: { err, message: "Error: Please try again" }
    }));
};
