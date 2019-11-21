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
        signupError: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name,
          location: action.payload.location,
          isLoggedIn: true
        },
        isFetching: false,
        signupError: ""
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signupError: action.payload
      };
    default:
      return state;
  }
};

export default registerReducer;
