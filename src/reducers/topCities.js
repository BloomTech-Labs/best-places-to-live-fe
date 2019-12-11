import {
  FETCH_TOP_CITIES_INITIALIZE,
  FETCH_TOP_CITIES_SUCCESS,
  FETCH_TOP_CITIES_FAIL
} from "../actions/index.js";

import initialState from "../reducers/initialState";

const topCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_CITIES_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_TOP_CITIES_SUCCESS:
      return {
        ...state,
        topCities: { ...state.topCities, ...action.payload },
        isFetching: false,
        error: ""
      };
    case FETCH_TOP_CITIES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default topCitiesReducer;
