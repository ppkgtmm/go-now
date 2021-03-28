import { filter } from "lodash"

export function getRandomNumber(upper) {
    return (Math.floor(Math.random() * upper) + 2) % upper
}

export function getFilteredSeasonData(allData, season) {
    return filter(allData, { season })
}
