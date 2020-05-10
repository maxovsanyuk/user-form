import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

export const rootReduser = combineReducers({
  app: appReducer,
});
