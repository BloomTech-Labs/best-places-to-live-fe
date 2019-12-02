import {
  DELETE_LIKED_CITY_FAIL,
  DELETE_LIKED_CITY_INITIALIZE,
  DELETE_LIKED_CITY_SUCCESS
} from "../actions/index.js";

import initialState from "./initialState";

const deleteLikedCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_LIKED_CITY_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_LIKED_CITY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          likes: action.payload
        },
        isFetching: false,
        error: ""
      };
    case DELETE_LIKED_CITY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default deleteLikedCityReducer;
