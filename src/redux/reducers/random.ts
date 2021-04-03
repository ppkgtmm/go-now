import { getRandomNumber } from "../../functions"
import { RandomReducerAction } from "../../types"
export function randomizeReducer(
    state: number = 0,
    action: RandomReducerAction = { type: "unknown", length: 0 }
): number {
    switch (action.type) {
        case "randomize":
            return getRandomNumber(action.length)
        default:
            return state
    }
}
