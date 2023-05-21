import { Action, toggle } from "../../types"

export function sidebarToggleReducer(
    state: toggle = toggle.INIT,
    action: Action = { type: "unknown" }
): toggle {
    switch (action.type) {
        case "toggle":
            return toggle.SHOW
        case "untoggle":
            return toggle.HIDE
        case "reset":
            return state === toggle.HIDE ? toggle.INIT : state
        default:
            return state
    }
}
