import locationsReducer from "./locations";
import factorsReducer from "./factors";
import registerReducer from "./register";
import loginReducer from "./login";
import logoutReducer from "./logout";
import reduceReducers from "reduce-reducers";
import initialState from "../reducers/initialState";

const reducer = reduceReducers(
  initialState,
  loginReducer,
  registerReducer,
  factorsReducer,
  locationsReducer,
  logoutReducer
);

export default reducer;
