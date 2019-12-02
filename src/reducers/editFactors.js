import {
  EDIT_FACTORS_INITIALIZE,
  EDIT_FACTORS_SUCCESS,
  EDIT_FACTORS_FAIL
} from "../actions/index.js";

//something like this
import initialState from "../reducers/initialState";

const editFactorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FACTORS_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case EDIT_FACTORS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          factors: [...action.payload]
        },
        isFetching: false,
        error: ""
      };
    case EDIT_FACTORS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default editFactorsReducer;
