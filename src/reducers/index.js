import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({
  input: inputReducer,
  messages: messageReducer
});

export default reducers;
