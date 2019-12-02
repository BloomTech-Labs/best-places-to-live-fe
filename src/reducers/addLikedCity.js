import {
  ADD_LIKED_CITY_FAIL,
  ADD_LIKED_CITY_INITIALIZE,
  ADD_LIKED_CITY_SUCCESS
} from "../actions/index.js";

import initialState from "./initialState";

const addLikedCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKED_CITY_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        fetchLocationsByFactorsError: ""
      };
    case ADD_LIKED_CITY_SUCCESS:
      return {
        ...state,
        displayedCities: action.payload.filter(
          city => city.photoWeb !== null && city.photoMobile !== null
        ),
        isFetching: false,
        fetchLocationsByFactorsError: ""
      };
    case ADD_LIKED_CITY_FAIL:
      return {
        ...state,
        fetchLocationsByFactorsError: action.payload
      };
    default:
      return state;
  }
};

export default addLikedCityReducer;
