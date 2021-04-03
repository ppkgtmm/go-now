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
export type SideBarReducer = (state: boolean, action: Action) => boolean

export type PlaceReducer = (state: Place[], action: Action) => Place[]

export type RandomReducer = (
    state: number,
    action: RandomReducerAction
) => number

export type State = {
    places: Place[]
    toggle: boolean
    randomNumber: number
}

export interface SeasonButton {
    name: string
    path: string
}
