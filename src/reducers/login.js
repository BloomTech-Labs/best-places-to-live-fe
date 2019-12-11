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
        user: {
          ...state.user,
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name,
          location: action.payload.location,
          likes: action.payload.likes,
          dislikes: action.payload.dislikes,
          isLoggedIn: true
        },
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
