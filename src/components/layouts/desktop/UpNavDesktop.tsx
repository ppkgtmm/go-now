import React from "react"
import { toggle } from "../../../types"
import { Toggler } from "../../button"
import RandomButton from "../../button/RandomButton"
type Props = {
    isRandomPage: boolean
    upper: number
    toggle: toggle
}
export default function UpNavDesktop(props: Props) {
    const buttonClass =
        "hidden md:block text-white border border-white rounded px-8 py-1 outline-none hover:bg-white hover:text-black"
    return (
        <header className="sticky top-0 z-50 hidden md:block bg-black w-full h-auto mt-0">
            <div className="flex p-2.5 items-center justify-between">
                <Toggler />
                <RandomButton {...props} buttonClass={buttonClass} />
            </div>
        </header>
    )
}
