import {
  FETCH_FACTORS_INITIALIZE,
  FETCH_FACTORS_SUCCESS,
  FETCH_FACTORS_FAIL
} from "../actions/index.js";

//something like this
import initialState from "../reducers/initialState";

const factorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FACTORS_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_FACTORS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          factors: [...action.payload]
        },
        isFetching: false,
        error: ""
      };
    case FETCH_FACTORS_FAIL:
      console.log("reducer", action);
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default factorsReducer;
