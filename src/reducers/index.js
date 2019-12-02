import locationsByFactorsReducer from "./locationsByFactors";
import locationsByNameReducer from "./locationsByName";
import factorsReducer from "./factors";
import signupReducer from "./signup";
import loginReducer from "./login";
import logoutReducer from "./logout";
import reduceReducers from "reduce-reducers";
import initialState from "../reducers/initialState";
import topCitiesReducer from "./topCities";
import addLikedCityReducer from "./addLikedCity";

const reducer = reduceReducers(
  initialState,
  loginReducer,
  signupReducer,
  factorsReducer,
  locationsByFactorsReducer,
  locationsByNameReducer,
  logoutReducer,
  topCitiesReducer,
  addLikedCityReducer
);

export default reducer;
