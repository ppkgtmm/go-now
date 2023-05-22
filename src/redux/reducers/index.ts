import { placeReducer } from "./place"
import { sidebarToggleReducer } from "./sidebar"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    places: placeReducer,
    toggle: sidebarToggleReducer,
})
export default rootReducer
