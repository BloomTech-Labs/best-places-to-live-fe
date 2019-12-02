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
        error: ""
      };
    case ADD_LIKED_CITY_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          likes: action.payload
        },
        isFetching: false,
        error: ""
      };
    case ADD_LIKED_CITY_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default addLikedCityReducer;
