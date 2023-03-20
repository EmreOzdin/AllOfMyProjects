import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  blog: blogReducer,
});
export default rootReducer;
