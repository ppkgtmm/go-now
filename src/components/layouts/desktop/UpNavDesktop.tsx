import React from "react"
import { Clickable } from "../../button"
import { Toggler } from "../../button"
import { useDispatch } from "react-redux"
type Props = {
    isRandomPage: boolean
    upper: number
    toggle: boolean
}
export default function UpNavDesktop(props: Props) {
    const dispatch = useDispatch()
    const handleOnRandomize = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    const renderRandomButton = () => {
        const buttonClass =
            "hidden md:block text-white border border-white rounded px-8 py-1 outline-none hover:bg-white hover:text-black"
        const config = { styleClass: buttonClass }
        return (
            <Clickable
                config={{
                    ...config,
                    redirectable: !props.isRandomPage,
                    clickHandler: handleOnRandomize,
                    path: "/",
                }}
            >
                randomize
            </Clickable>
        )
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
