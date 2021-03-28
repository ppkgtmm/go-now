import { getRandomNumber } from "../../utils"
export function randomizeReducer(state = 0, action = { type: "unknown" }) {
    switch (action.type) {
        case "randomize":
            return getRandomNumber(action.length || 0)
        default:
            return state
    }
}
