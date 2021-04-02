import React from "react"
import SideBar from "./desktop/SideBar"
import UpNavMobile from "./mobile/UpNavMobile"
import UpNavDesktop from "./desktop/UpNavDesktop"
import { connect, useSelector } from "react-redux"
import { mapToggleToProps, selectToggle } from "../../functions"
type Props = {
    upper: number
    isRandomPage: boolean
    children: React.ReactNode
}
const Layout = (props: Props) => {
    const toggleState = useSelector(selectToggle)
    const renderSideBar = () => {
        return toggleState ? <SideBar /> : null
    }
    return (
        <div className="relative h-full overflow-y-visible">
            <UpNavMobile toggle={toggleState} {...props} />
            <UpNavDesktop toggle={toggleState} {...props} />
            {renderSideBar()}
            {props.children}
        </div>
    )
}

connect(mapToggleToProps)(Layout)
export default Layout
