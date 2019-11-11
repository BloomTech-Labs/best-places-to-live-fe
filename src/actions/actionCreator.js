import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_LOCATIONS_INITIALIZE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAIL,
  FETCH_FACTORS_INITIALIZE,
  FETCH_FACTORS_SUCCESS,
  FETCH_FACTORS_FAIL
} from "./index";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INITIALIZE });

  axiosWithAuth()
    .post(`/users/login`, credentials)
    .then(res => {
      console.log("actionCreator", res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data._id);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          id: res.data._id,
          email: res.data.email,
          name: res.data.name
        }
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

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
    .catch(err => ({ type: SIGNUP_FAIL, payload: "Error: Please try again" }));
};

export const fetchLocations = (location, factors = []) => dispatch => {
  dispatch({ type: FETCH_LOCATIONS_INITIALIZE });
  let url;
  let data;
  if (factors.length === 0) {
    url = "/city/search";
    data = location;
  } else {
    url = "";
    data = factors;
  }

  axiosWithAuth()
    .post(url, data)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_LOCATIONS_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FETCH_LOCATIONS_FAIL, payload: err });
    });
};

export const fetchFactors = () => dispatch => {
  dispatch({ type: FETCH_FACTORS_INITIALIZE });

  axiosWithAuth()
    .get("backendpointneeded")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FACTORS_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FETCH_FACTORS_FAIL, payload: err });
    });
};
