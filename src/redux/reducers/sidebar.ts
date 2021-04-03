import { Action } from "../../types"

export function sidebarToggleReducer(
    state: boolean = false,
    action: Action = { type: "unknown" }
): boolean {
    switch (action.type) {
        case "toggle":
            return !state
        default:
            return state
    }
}
