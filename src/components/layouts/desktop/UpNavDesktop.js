import { get } from "lodash"
import React from "react"
import { useDispatch } from "react-redux"
import Clickable from "../Clickable"
import Toggler from "../Toggler"

export default function UpNavDesktop(props) {
    const dispatch = useDispatch()
    const handleOnRandomize = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    const renderRandomButton = () => {
        const isRandomPage = get(props, "isRandomPage", false)
        const buttonClass =
            "hidden md:block text-white border border-white rounded px-8 py-1 outline-none hover:bg-white hover:text-black"
        const config = { styleClass: buttonClass }
        if (isRandomPage)
            return (
                <Clickable
                    config={{
                        ...config,
                        redirectable: false,
                        clickHandler: handleOnRandomize,
                    }}
                >
                    randomize
                </Clickable>
            )
        return <Clickable config={config}>randomize</Clickable>
    }
    return (
        <header className="sticky top-0 z-50 hidden md:block bg-black w-full h-auto mt-0">
            <div className="flex p-2.5 items-center justify-between">
                <Toggler />
                {renderRandomButton()}
            </div>
        </header>
    )
}
