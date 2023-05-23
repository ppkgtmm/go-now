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
                    <div className="mx-3 md:mx-20 lg:mx-auto flex flex-col py-12 md:py-16 min-h-screen">
                        <p className="mx-auto text-center text-4xl md:text-5xl uppercase font-semibold">Welcome</p>
                        <span className="text-center mt-10 md:mt-16 text-xl mx-auto max-w-xs md:max-w-none font-light">find vacation venue by <i className="font-bold">season</i> their best to be visited in</span>
                        <div className="md:grid grid-cols-2 md:mx-auto gap-4 justify-items-stretch mt-4 md:mt-6">
                            {seasons.map((season) => {
                                return <a key={season.name} href={season.path} className="relative overflow-hidden block text-center w-48 h-48 rounded-md md:rounded-lg shadow-lg md:hover:shadow-xl my-4 mx-auto md:m-0 season">
                                    <img
                                        src={season.img_path}
                                        className="mx-auto block lg:mx-0"
                                        alt="not available"
                                    />

                                    <p className="bg-white absolute bottom-0 w-full h-8 season-name">
                                        {season.name}
                                    </p>
                                    {/* <div className="absolute top-0 w-full h-full backdrop-filter backdrop-blur-sm bg-white/30 group-hover:backdrop-blur-lg" >
                                    </div>
                                    <span className="absolute top-0 flex flex-col justify-center w-full h-full md:text-2x z-50">{season.name}</span>
                                    <img src={season.img_path} className="object-cover w-full h-full" /> */}

                                </a>
                            })
                            }
                        </div>
                    </div>
                </Route>
                <Seasons places={places} seasons={seasons} />
            </Router>
        </div >
    )
}
connect(mapPlaceToProps)(App)
export default App
