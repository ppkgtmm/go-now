import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect, useSelector } from "react-redux"
import { seasons } from "./data"
import { mapPlaceToProps, selectPlaces } from "./functions"
import { Seasons, Randomize } from "./components"

function App() {
    const places = useSelector(selectPlaces)
    return (
        <div className="App">
            <Router basename="/">
                <Route exact path="/">
                    <Randomize upper={places.length} places={places} />
                </Route>
                <Seasons places={places} seasons={seasons} />
            </Router>
        </div>
    )
}
connect(mapPlaceToProps)(App)
export default App
