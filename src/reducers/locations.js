import {
  FETCH_LOCATIONS_INITIALIZE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAIL
} from "../actions/index.js";

//something like this
import initialState from "../reducers/initialState";

const locationsReducer = (state = initialState, action) => {
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
      console.log("reducer", action);

      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default locationsReducer;
