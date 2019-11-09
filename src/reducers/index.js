import {
  FETCH_DOGS_START,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAIL
} from "../actions";

import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_DOGS_START:
      console.log("mew");
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_DOGS_SUCCESS:
      return {
        ...state,
        dogs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_DOGS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
