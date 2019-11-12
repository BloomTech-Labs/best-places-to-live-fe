import {
  SIGNUP_INITIALIZE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
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
      console.log("reducer", action);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default registerReducer;
