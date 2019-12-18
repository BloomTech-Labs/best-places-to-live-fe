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
        error: ""
      };
    case ADD_DISLIKED_CITY_SUCCESS:
      const dislikeIDs = action.payload.map(city => city._id);
      return {
        ...state,
        user: {
          ...state.user,
          dislikes: action.payload
        },
        displayedCities: state.displayedCities.filter(
          city => !dislikeIDs.includes(city._id)
        ),
        isFetching: false,
        error: ""
      };
    case ADD_DISLIKED_CITY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default addDislikedCityReducer;
