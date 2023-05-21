import { filter } from "lodash"
import { Place, State, toggle } from "./types"

export const mapPlaceToProps = (state: State) => {
    return {
        places: state.places,
    }
}
export const mapToggleToProps = (state: State) => {
    return {
        toggle: state.toggle,
    }
}

export const mapRandomNumberToProps = (state: State) => {
    return {
        randomNumber: state.randomNumber,
    }
}

export const selectPlaces = (state: State): Place[] => state.places

export const selectRandom = (state: State): number => state.randomNumber

export const selectToggle = (state: State): toggle => state.toggle

export const getRandomNumber = (upper: number): number => {
    return (Math.floor(Math.random() * upper) + 2) % upper
}

export function getFilteredSeasonData(allData: Place[], season: string) {
    return filter(allData, { season })
}
