import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "./index";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INITIALIZE });

  axiosWithAuth()
    .post(`/users/login`)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const register = userData => dispatch => {
  dispatch({ type: SIGNUP_INITIALIZE });

  axiosWithAuth
    .post(`/users/register`)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.id });
    })
    .catch(err => ({ type: SIGNUP_FAIL, payload: "Error: Please try again" }));
};
