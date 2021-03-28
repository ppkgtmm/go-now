import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Season from "./Season"
import Randomize from "./Randomize"
import { connect, useSelector } from "react-redux"

const selectPlaces = (state) => state.places
const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}
function App() {
    const seasons = ["spring", "summer", "autumn", "winter"]
    const places = useSelector(selectPlaces)
    return (
        <div className="App">
            <Router basename="/">
                <Route exact path="/">
                    <Randomize upper={places.length} places={places} />
                </Route>
                <Route exact path="/spring">
                    <Season season={seasons[0]} />
                </Route>
                <Route exact path="/summer">
                    <Season season={seasons[1]} />
                </Route>
                <Route exact path="/autumn">
                    <Season season={seasons[2]} />
                </Route>
                <Route exact path="/winter">
                    <Season season={seasons[3]} />
                </Route>
            </Router>
        </div>
    )
}
connect(mapStateToProps)(App)
export default App
