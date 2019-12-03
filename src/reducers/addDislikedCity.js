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
      return {
        ...state,
        user: {
          ...state.user,
          dislikes: action.payload
        },
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
