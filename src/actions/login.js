import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { LOGIN_INITIALIZE, LOGIN_SUCCESS, LOGIN_FAIL } from "./index";
import { toast } from "react-toastify";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_INITIALIZE });

  return axiosWithAuth()
    .post(`/users/login`, credentials)
    .then(res => {
      console.log(res);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("id", res.data._id);
      dispatch({
        type: LOGIN_SUCCESS,
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
        type: LOGIN_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      return false;
    });
};
