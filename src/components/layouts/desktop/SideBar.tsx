import React from "react"
import Buttons from "./SideBarButtons"
import { seasons as seasonsData } from "../../../data"
import { animate, toggle } from '../../../types'
import { connect, } from "react-redux"
import { mapToggleToProps } from "../../../functions"
type Props = {
    toggle: toggle
}
export default function SideBar(props: Props) {
    let animateIt = animate.OUT
    if (props.toggle === toggle.SHOW) {
        animateIt = animate.IN
    }
    return (
        <div className={`sidebar hidden md:block bg-black overflow-y-scroll fixed top-0 z-0 h-full ${animateIt}`}>
            <div className="mt-36 px-8">
                <h1 className="text-white text-4xl">Go Now</h1>
                <h2 className="text-lg mt-4 font-light subheading">
                    catalogue to help you find vacation venue
                </h2>
                <Buttons buttonsData={seasonsData} />
            </div>
        </div>
    )
}
connect(mapToggleToProps)(SideBar)