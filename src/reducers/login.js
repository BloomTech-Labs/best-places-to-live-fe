import {
  LOGIN_INITIALIZE,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const loginReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case LOGIN_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        loginError: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name,
          isLoggedIn: true
        },
        isFetching: false,
        loginError: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginError: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
