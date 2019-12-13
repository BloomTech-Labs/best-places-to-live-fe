import { LOGOUT } from "./index";
import { toast } from "react-toastify";

export const logout = credentials => dispatch => {
  dispatch({ type: LOGOUT });

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");

  dispatch({
    type: LOGOUT
  });
  toast.success("Logout Successful! - See you soon!");
};
