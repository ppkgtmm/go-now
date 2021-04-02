import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Season from "./components/Season"
import Randomize from "./components/Randomize"
import { connect, useSelector } from "react-redux"
import seasons from "./data/seasons.json"
import { getFilteredSeasonData } from "./functions"
import { mapPlaceToProps, selectPlaces } from "./functions"

function App() {
    const places = useSelector(selectPlaces)
    return (
        <div className="App">
            <Router basename="/">
                <Route exact path="/">
                    <Randomize upper={places.length} places={places} />
                </Route>
                {seasons.map((season, index) => (
                    <Route exact path={season.path} key={index}>
                        <Season
                            places={getFilteredSeasonData(places, season.name)}
                        />
                    </Route>
                ))}
            </Router>
        </div>
    )
}
connect(mapPlaceToProps)(App)
export default App
