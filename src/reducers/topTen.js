import {
  FETCH_TOP_TEN_INITIALIZE,
  FETCH_TOP_TEN_SUCCESS,
  FETCH_TOP_TEN_FAIL
} from "../actions/index.js";

import initialState from "../reducers/initialState";

const topTenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TEN_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        fetchTopTenError: ""
      };
    case FETCH_TOP_TEN_SUCCESS:
      return {
        ...state,
        displayedCities: action.payload,
        isFetching: false,
        fetchTopTenError: ""
      };
    case FETCH_TOP_TEN_FAIL:
      return {
        ...state,
        fetchTopTenError: action.payload
      };
    default:
      return state;
  }
};

export default topTenReducer;
