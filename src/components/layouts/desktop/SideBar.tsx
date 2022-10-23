import React from "react"
import Buttons from "./SideBarButtons"
import { seasons as seasonsData } from "../../../data"

export default function SideBar() {
    return (
        <div className="hidden md:block bg-black fixed overflow-y-scroll top-44px left-0px z-50 md:w-72 h-full sidebar slide">
            <div className="side-content px-8">
                <h1 className="text-white text-4xl">Travel Now</h1>
                <h2 className="text-teal-100 text-lg mt-4">
                    catalouge to help choose vacation venue
                </h2>
                <Buttons buttonsData={seasonsData} />
            </div>
        </div>
    )
}
