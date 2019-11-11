import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_LOCATIONS_INITIALIZE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAIL
} from "../action/index.js";

import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case LOGIN_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case SIGNUP_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: ""
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case FETCH_LOCATIONS_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_LOCATIONS_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
