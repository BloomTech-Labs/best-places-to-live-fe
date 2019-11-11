import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/index.js.js";

import initialState from "./initialState";

const loginReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default loginReducer;
