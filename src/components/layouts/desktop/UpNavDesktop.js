import React from "react"
import { useDispatch } from "react-redux"
import Toggler from "../Toggler"

export default function UpNavDesktop(props) {
    const dispatch = useDispatch()
    const handleOnRandomize = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    return (
        <header className="sticky top-0 z-50 hidden md:block bg-black w-full h-auto mt-0">
            <div className="flex p-2.5 items-center justify-between">
                <Toggler />
                <button
                    className="hidden md:block text-white border border-white rounded px-4 py-1 outline-none hover:bg-white hover:text-black"
                    onClick={handleOnRandomize}
                >
                    randomize
                </button>
            </div>
        </header>
    )
}
