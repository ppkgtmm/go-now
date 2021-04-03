import { createStore } from "redux"
import rootReducer from "../reducers/index"
import { data } from "../../data"
import { getRandomNumber } from "../../functions"
import { State } from "../../types"

const preloadedState: State = {
    places: data,
    toggle: false,
    randomNumber: getRandomNumber(data.length),
}
const store = createStore(rootReducer, preloadedState)
export default store
