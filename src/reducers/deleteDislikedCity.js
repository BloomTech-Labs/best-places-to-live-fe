import {
  DELETE_DISLIKED_CITY_FAIL,
  DELETE_DISLIKED_CITY_INITIALIZE,
  DELETE_DISLIKED_CITY_SUCCESS
} from "../actions/index.js";

import initialState from "./initialState";

const deleteDislikedCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DISLIKED_CITY_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_DISLIKED_CITY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          dislikes: action.payload
        },
        isFetching: false,
        error: ""
      };
    case DELETE_DISLIKED_CITY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default deleteDislikedCityReducer;
