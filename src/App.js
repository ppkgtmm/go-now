import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Season from "./components/Season"
import Randomize from "./components/Randomize"
import seasons from "./data/seasons.json"
import { connect, useSelector } from "react-redux"
import { getFilteredSeasonData } from "./utils"

const selectPlaces = (state) => state.places
const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}
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
                            places={getFilteredSeasonData(
                                places,
                                season.season
                            )}
                        />
                    </Route>
                ))}
            </Router>
        </div>
    )
}
connect(mapStateToProps)(App)
export default App
