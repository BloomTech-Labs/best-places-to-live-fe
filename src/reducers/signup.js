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
        user: {
          ...state.user,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name,
          location: action.payload.location,
          isLoggedIn: true,
          likes: action.payload.likes,
          dislikes: action.payload.dislikes
        },
        isFetching: false,
        error: ""
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default registerReducer;
