import { combineReducers } from "redux";
import locationsReducer from "./locations";
import factorsReducer from "./factors";
import registerReducer from "./register";
import loginReducer from "./login";
import logoutReducer from "./logout";

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  factorsReducer,
  locationsReducer,
  logoutReducer
});

export default reducer;
