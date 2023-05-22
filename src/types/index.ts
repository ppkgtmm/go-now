export type Place = {
    id: number
    imgPath: string
    name: string
    content: string
    url: string
    season: string
}
export type Action = {
    type: string
}

export type RandomReducerAction = {
    type: string
    length: number
}
export type SideBarReducer = (state: toggle, action: Action) => toggle

export type PlaceReducer = (state: Place[], action: Action) => Place[]

export type RandomReducer = (
    state: number,
    action: RandomReducerAction
) => number

export type State = {
    places: Place[]
    toggle: toggle
}

export interface SeasonButton {
    name: string
    path: string
}

export enum animate {
    IN = 'slide-in',
    OUT = 'slide-out'
}

export enum toggle {
    SHOW = 'show',
    HIDE = 'hide',
    INIT = 'init'

}
export const iconStyle = {
    color: "white",
    strokeWidth: "1.6",
}