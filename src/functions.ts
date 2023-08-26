import { filter, sampleSize } from "lodash"
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

export const selectPlaces = (state: State): Place[] => state.places

export const selectToggle = (state: State): toggle => state.toggle

export function getFilteredSeasonData(allData: Place[], season: string) {
    return filter(allData, { season })
}

export function sampleSeasonData(allData: Place[], n: number) {
    return sampleSize(allData, n)
}
