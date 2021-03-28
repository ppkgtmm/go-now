export function sidebarToggleReducer(
  state = false,
  action = { type: "unknown" }
) {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      return state;
  }
}
