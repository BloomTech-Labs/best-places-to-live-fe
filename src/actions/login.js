import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { LOGIN_INITIALIZE, LOGIN_SUCCESS, LOGIN_FAIL } from "./index";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INITIALIZE });

  return axiosWithAuth()
    .post(`/users/login`, credentials)
    .then(res => {
      console.log("login response", res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data._id);
      dispatch({
        type: LOGIN_SUCCESS,
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
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        payload: { err, message: err.message }
      });
      return "Failure";
    });
};
