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
        fetchLocationsByNameError: ""
      };
    case FETCH_LOCATIONS_BY_NAME_SUCCESS:
      return {
        ...state,
        displayedCities: action.payload.filter(
          city =>
            city.photo !=
            "https://letsmovehomie-city-photoes.nyc3.digitaloceanspaces.com/no-photo-available.jpg"
        ),
        isFetching: false,
        fetchLocationsByNameError: ""
      };
    case FETCH_LOCATIONS_BY_NAME_FAIL:
      return {
        ...state,
        fetchLocationsByNameError: action.payload
      };
    default:
      return state;
  }
};

export default locationsByNameReducer;
