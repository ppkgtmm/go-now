import React from "react"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import SideBar from "./desktop/SideBar"
import UpNavMobile from "./mobile/UpNavMobile"
import UpNavDesktop from "./desktop/UpNavDesktop"

const selectToggleState = (state) => state.toggle

const mapStateToProps = (state) => {
    return {
        randomize: state.randomize,
        toggle: state.toggle,
    }
}
const Layout = (props) => {
    const toggleState = useSelector(selectToggleState)
    const renderSideBar = () => {
        return toggleState ? <SideBar /> : null
    }
    return (
        <div className="relative h-full overflow-y-visible">
            <UpNavMobile
                upper={props.upper}
                toggle={toggleState}
                isRandomPage={props.isRandomPage}
            />
            <UpNavDesktop
                upper={props.upper}
                isRandomPage={props.isRandomPage}
            />
            {renderSideBar()}
            {props.children}
        </div>
    )
}
connect(mapStateToProps)(Layout)

export default Layout
