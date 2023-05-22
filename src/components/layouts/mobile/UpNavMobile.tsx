import React from "react"
import { Toggler } from "../../button"
import Buttons from "./UpNavButtons"
import { seasons as seasonData } from "../../../data"
import { toggle } from "../../../types"

type Props = {
    isHomePage: boolean
    // upper: number
    toggle: toggle
}
export default function UpNavMobile(props: Props) {
    const renderButtonMenu = () => {
        return props.toggle === toggle.SHOW ? (
            <Buttons
                // upper={props.upper}
                isHomePage={props.isHomePage}
                buttonData={seasonData}
            />
        ) : null
    }
    return (
        <nav className="fixed top-0 w-full md:hidden bg-black h-auto">
            <div className="flex flex-col p-2.5 items-center">
                <div className="self-start">
                    <Toggler />
                </div>
                {renderButtonMenu()}
            </div>
        </nav>
    )
}
