import { LOGOUT } from "../actions/index.js";

import initialState from "./initialState";

const logoutReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user: {
          isLoggedIn: false
        },
        error: ""
      };
    default:
      return state;
  }
};

export default logoutReducer;
