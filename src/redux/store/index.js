import { createStore } from "redux"
import rootReducer from "../reducers/index"
import data from "../data/data.json"
import { getRandomNumber } from "../utils"

const preloadedState = {
    places: data,
    toggle: false,
    randomize: getRandomNumber(data.length),
}
const store = createStore(rootReducer, preloadedState)
export default store
