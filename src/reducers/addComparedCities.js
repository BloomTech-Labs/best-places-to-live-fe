import {
  ADD_COMPARED_CITIES_FAIL,
  ADD_COMPARED_CITIES_INITIALIZE,
  ADD_COMPARED_CITIES_SUCCESS
} from "../actions/index.js";

import initialState from "./initialState";

const addComparedCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPARED_CITIES_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case ADD_COMPARED_CITIES_SUCCESS:
      return {
        ...state,
        comparedCities: action.payload,
        isFetching: false,
        error: ""
      };
    case ADD_COMPARED_CITIES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default addComparedCitiesReducer;
