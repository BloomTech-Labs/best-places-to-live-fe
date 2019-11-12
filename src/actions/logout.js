import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import { LOGOUT } from "./index";

export const logout = credentials => dispatch => {
  dispatch({ type: LOGOUT });

  localStorage.removeItem("token");
  localStorage.removeItem("id");

  dispatch({
    type: LOGOUT
  });
};
