import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { seasons } from "./data"
import { mapPlaceToProps, selectPlaces, sampleSeasonData } from "./functions"
import { Seasons } from "./components"
import Season from "./components/seasons/Season"

function App() {
    const showCount = 11
    const places = useSelector(selectPlaces)
    const dispatch = useDispatch()
    React.useEffect(() => {
        const handleResize = () => dispatch({ type: "reset" })
        window.addEventListener("resize", handleResize)
    })
    return (
        <div className="App">
            <Router basename="/">
                <Route exact path="/">
                    <Season
                        places={sampleSeasonData(places, showCount)}
                        isHomePage={true}
                    />
                </Route>
                <Seasons places={places} seasons={seasons} isHomePage={false} />
            </Router>
        </div>
    )
}
connect(mapPlaceToProps)(App)
export default App
