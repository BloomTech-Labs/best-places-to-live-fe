import {
  FETCH_LOCATIONS_BY_FACTORS_INITIALIZE,
  FETCH_LOCATIONS_BY_FACTORS_SUCCESS,
  FETCH_LOCATIONS_BY_FACTORS_FAIL
} from "../actions/index.js";

import initialState from "./initialState";

const locationsByFactorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_BY_FACTORS_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        fetchLocationsByFactorsError: ""
      };
    case FETCH_LOCATIONS_BY_FACTORS_SUCCESS:
      return {
        ...state,
        displayedCities: action.payload.filter(
          city => city.photoWeb !== null && city.photoMobile !== null
        ),
        isFetching: false,
        fetchLocationsByFactorsError: ""
      };
    case FETCH_LOCATIONS_BY_FACTORS_FAIL:
      return {
        ...state,
        fetchLocationsByFactorsError: action.payload
      };
    default:
      return state;
  }
};

export default locationsByFactorsReducer;
