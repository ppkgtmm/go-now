import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { seasons } from "./data"
import { mapPlaceToProps, selectPlaces } from "./functions"
import { Seasons, Randomize } from "./components"

function App() {
    const places = useSelector(selectPlaces)
    const dispatch = useDispatch()
    React.useEffect(() => {
        const handleResize = () => dispatch({ type: "reset" })
        window.addEventListener('resize', handleResize)
    })
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
