import {
  UPDATE_PROFILE_INITIALIZE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case UPDATE_PROFILE_SUCCESS:
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
        error: ""
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default updateProfileReducer;
