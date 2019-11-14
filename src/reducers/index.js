import locationsReducer from "./locations";
import factorsReducer from "./factors";
import signupReducer from "./signup";
import loginReducer from "./login";
import logoutReducer from "./logout";
import reduceReducers from "reduce-reducers";
import initialState from "../reducers/initialState";

console.log(initialState);
const reducer = reduceReducers(
  initialState,
  loginReducer,
  signupReducer,
  factorsReducer,
  locationsReducer,
  logoutReducer
);

export default reducer;
