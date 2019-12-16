import { toast } from "react-toastify";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import {
  ADD_COMPARED_CITIES_FAIL,
  ADD_COMPARED_CITIES_INITIALIZE,
  ADD_COMPARED_CITIES_SUCCESS
} from "./index";

export const addComparedCities = data => dispatch => {
  dispatch({ type: ADD_COMPARED_CITIES_INITIALIZE });

  /* Data in body of request is {id, cityID} */
  return axiosWithAuth()
    .post("/city", { ids: data })
    .then(res => {
      dispatch({
        type: ADD_COMPARED_CITIES_SUCCESS,
        payload: res.data.data
      });
      return "Successful";
      toast.success("Success - Cities are sent to Comparison!");
    })
    .catch(err => {
      dispatch({
        type: ADD_COMPARED_CITIES_FAIL,
        payload: { err, message: err.message }
      });
      return "Error";
      toast.error(err.message);
    });
};
