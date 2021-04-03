import React from "react"
import { Route } from "react-router-dom"
import { getFilteredSeasonData } from "../../functions"
import { Place } from "../../types"
import { SeasonButton } from "../../types"
import Season from "./Season"

type Props = {
    places: Place[]
    seasons: SeasonButton[]
}

export default function Seasons(props: Props) {
    return (
        <div>
            {props.seasons.map((season, index) => (
                <Route exact path={season.path} key={index}>
                    <Season
                        places={getFilteredSeasonData(
                            props.places,
                            season.name
                        )}
                    />
                </Route>
            ))}
        </div>
    )
}
