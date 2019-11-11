import { combinedReducers } from "redux";
import locationsReducer from "./locations";
import factorsReducer from "./factors";
import registerReducer from "./register";
import loginReducer from "./login";

reducer = combinedReducers(
  loginReducer,
  registerReducer,
  factorsReducer,
  locationsReducer
);

export default reducer;
