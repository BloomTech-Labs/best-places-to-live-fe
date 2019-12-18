import locationsByFactorsReducer from "./locationsByFactors";
import locationsByNameReducer from "./locationsByName";
import signupReducer from "./signup";
import loginReducer from "./login";
import logoutReducer from "./logout";
import reduceReducers from "reduce-reducers";
import initialState from "../reducers/initialState";
import topCitiesReducer from "./topCities";
import addLikedCityReducer from "./addLikedCity";
import addDislikedCityReducer from "./addDislikedCity";
import deleteLikedCityReducer from "./deleteLikedCity";
import deleteDislikedCityReducer from "./deleteDislikedCity";
import updateProfileReducer from "./updateProfile";
import addComparedCitiesReducer from "./addComparedCities";

const reducer = reduceReducers(
  initialState,
  loginReducer,
  signupReducer,
  locationsByFactorsReducer,
  locationsByNameReducer,
  logoutReducer,
  topCitiesReducer,
  addLikedCityReducer,
  addDislikedCityReducer,
  deleteLikedCityReducer,
  deleteDislikedCityReducer,
  updateProfileReducer,
  addComparedCitiesReducer
);

export default reducer;
