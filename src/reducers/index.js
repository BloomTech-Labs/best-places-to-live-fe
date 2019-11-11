import { combineReducers } from "redux";
import locationsReducer from "./locations";
import factorsReducer from "./factors";
import registerReducer from "./register";
import loginReducer from "./login";

const reducer = combineReducers({
  loginReducer,
  registerReducer,
  factorsReducer,
  locationsReducer
});

export default reducer;
