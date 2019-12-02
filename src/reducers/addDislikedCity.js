import {
  ADD_DISLIKED_CITY_FAIL,
  ADD_DISLIKED_CITY_INITIALIZE,
  ADD_DISLIKED_CITY_SUCCESS
} from "../actions/index.js";

import initialState from "./initialState";

const addDislikedCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISLIKED_CITY_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        addDislikedCitiesError: ""
      };
    case ADD_DISLIKED_CITY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          dilikes: action.payload
        },
        isFetching: false,
        addLikedCitiesError: ""
      };
    case ADD_DISLIKED_CITY_FAIL:
      return {
        ...state,
        addLikedCitiesError: action.payload
      };
    default:
      return state;
  }
};

export default addDislikedCityReducer;
