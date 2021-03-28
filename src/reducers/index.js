import { placeReducer } from "./place";
import { sidebarToggleReducer } from "./sidebar";
import { randomizeReducer } from './random';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  places: placeReducer,
  toggle: sidebarToggleReducer,
  randomize: randomizeReducer
});
export default rootReducer;
