import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  DELETE_LIKED_CITY_FAIL,
  DELETE_LIKED_CITY_INITIALIZE,
  DELETE_LIKED_CITY_SUCCESS
} from "./index";

export const deleteLikedCity = data => dispatch => {
  dispatch({ type: DELETE_LIKED_CITY_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axiosWithAuth()
  .delete("/users/likes", { data } )
    .then(res => {
      console.log(res);
      dispatch({
        type: DELETE_LIKED_CITY_SUCCESS,
        payload: res.data.likes
      });
      toast.success("Success - City was removed from your likes!");
    })
    .catch(err => {
      dispatch({
        type: DELETE_LIKED_CITY_FAIL,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};
