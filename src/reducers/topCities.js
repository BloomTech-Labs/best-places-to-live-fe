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
        fetchTopCitiesError: ""
      };
    case FETCH_TOP_CITIES_SUCCESS:
      return {
        ...state,
        topCities: action.payload.filter(
          city =>
            city.photo !=
            "https://letsmovehomie-city-photoes.nyc3.digitaloceanspaces.com/no-photo-available.jpg"
        ),
        isFetching: false,
        fetchTopCitiesError: ""
      };
    case FETCH_TOP_CITIES_FAIL:
      return {
        ...state,
        fetchTopCitiesError: action.payload
      };
    default:
      return state;
  }
};

export default topCitiesReducer;
