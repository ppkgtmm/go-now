import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { seasons } from "./data"
import { mapPlaceToProps, selectPlaces } from "./functions"
import { Seasons } from "./components"

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
                    <div className="mx-6 md:mx-20 lg:mx-auto flex flex-col py-12 md:py-28 bg-white min-h-screen">
                        <p className="mx-auto text-center text-4xl md:text-5xl uppercase font-bold">Welcome !</p>
                        <span className="mx-auto md:w-7/12 text-center md:text-xl mt-8 break-words align-middle">you are at <b className="font-semibold bg-lime-300 rounded-xl px-3">go-now</b>, a <b className="font-semibold bg-cyan-200 rounded-xl px-3">vacation venue catalogue</b> with travel destinations categorized by season their best to be visited in</span>
                        <span className="text-center mt-8 md:mt-16 text-xl mx-auto max-w-xs font-light">choose a <b className="font-medium italic">season</b> to continue</span>
                        {/* <span className="md:hidden text-center mt-8 md:mt-16 text-xl font-medium">pick a season below to continue</span> */}
                        <div className="md:grid grid-cols-2 md:mx-auto gap-x-4 justify-items-stretch mt-2 md:mt-6">
                            {seasons.map((season) => {
                                return <a key={season.name} href={season.path} className="block mx-auto text-center my-3 w-52 md:w-72 py-2 px-4 rounded-md bg-white hover:bg-black hover:text-white border border-black text-lg md:text-xl font-light">
                                    {season.name}
                                </a>
                            })
                            }
                        </div>
                    </div>
                </Route>
                <Seasons places={places} seasons={seasons} />
            </Router>
        </div>
    )
}
connect(mapPlaceToProps)(App)
export default App
