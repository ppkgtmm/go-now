import React from "react"
import { Toggler } from "../../button"
import Buttons from "./UpNavButtons"
import { seasons as seasonData } from "../../../data"
import { toggle } from "../../../types"

type Props = {
    isRandomPage: boolean
    upper: number
    toggle: toggle
}
export default function UpNavMobile(props: Props) {
    const renderButtonMenu = () => {
        return props.toggle === toggle.SHOW ? (
            <Buttons
                upper={props.upper}
                isRandomPage={props.isRandomPage}
                buttonData={seasonData}
            />
        ) : null
    }
    return (
        <nav className="sticky top-0 z-50 md:hidden bg-black h-auto">
            <div className="flex flex-col p-2.5 items-center">
                <div className="self-start">
                    <Toggler />
                </div>
                {renderButtonMenu()}
            </div>
        </nav>
    )
}
