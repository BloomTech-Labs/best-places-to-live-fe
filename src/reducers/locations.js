import {
  FETCH_LOCATIONS_INITIALIZE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAIL
} from "../actions/index.js.js";

import initialState from "./initialState";

const locationsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
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

export default locationsReducer;