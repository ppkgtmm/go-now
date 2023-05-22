import { createStore } from "redux"
import rootReducer from "../reducers/index"
import { data } from "../../data"
import { State, toggle } from "../../types"

const preloadedState: State = {
    places: data,
    toggle: toggle.INIT,
}
const store = createStore(rootReducer, preloadedState)
export default store
