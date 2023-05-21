import React from "react"
import SideBar from "./desktop/SideBar"
import UpNavMobile from "./mobile/UpNavMobile"
import UpNavDesktop from "./desktop/UpNavDesktop"
import { connect, useSelector } from "react-redux"
import { mapToggleToProps, selectToggle } from "../../functions"
import { toggle } from "../../types"

type Props = {
    upper: number
    isRandomPage: boolean
    children: React.ReactNode
}
const Layout = (props: Props) => {
    const toggleState = useSelector(selectToggle)
    return (
        <div className="relative h-full overflow-y-visible">
            <UpNavMobile toggle={toggleState} {...props} />
            <UpNavDesktop toggle={toggleState} {...props} />
            {toggleState === toggle.INIT ? null : <SideBar toggle={toggleState} />}
            {props.children}
        </div>
    )
}

connect(mapToggleToProps)(Layout)
export default Layout
