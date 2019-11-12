import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const loginReducer = (state = initialState, action) => {
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
        error: "",
        isLoggedIn: true
      };
    case LOGIN_FAIL:
      console.log("reducer", action);

      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
