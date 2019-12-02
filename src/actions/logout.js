import { LOGOUT } from "./index";
import { toast } from "react-toastify";

export const logout = credentials => dispatch => {
  dispatch({ type: LOGOUT });

  localStorage.removeItem("token");
  localStorage.removeItem("id");

  dispatch({
    type: LOGOUT
  });
  toast.success("Logout Successful! - See you soon!");
};
