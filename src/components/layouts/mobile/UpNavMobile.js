import React from "react"
import Toggler from "../Toggler"
import Buttons from "./Buttons"
export default function UpNavMobile(props) {
    const renderButtonMenu = () => {
        return props.toggle ? (
            <Buttons upper={props.upper} isRandomPage={props.isRandomPage} />
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
