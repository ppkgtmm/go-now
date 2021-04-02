import React from "react"
import Buttons from "./Buttons"
export default function SideBar() {
    return (
        <div className="sidebar hidden md:block bg-black fixed overflow-y-scroll top-44px left-0px z-50 md:w-72 h-full">
            <div className="side-content px-8">
                <h1 className="text-white text-4xl">Travel Now</h1>
                <h2 className="text-emerald-200 text-lg mt-4">
                    simple site help planning vacation
                </h2>
                <Buttons />
            </div>
        </div>
    )
}
