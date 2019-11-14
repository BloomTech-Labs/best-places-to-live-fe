import {
  FETCH_LOCATIONS_BY_NAME_INITIALIZE,
  FETCH_LOCATIONS_BY_NAME_SUCCESS,
  FETCH_LOCATIONS_BY_NAME_FAIL
} from "../actions/index.js";

import initialState from "../reducers/initialState";

const locationsByNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_BY_NAME_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_LOCATIONS_BY_NAME_SUCCESS:
      return {
        ...state,
        displayedCities: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_LOCATIONS_BY_NAME_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default locationsByNameReducer;
