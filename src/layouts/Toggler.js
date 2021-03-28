import React from "react"
import { useSelector, useDispatch, connect } from "react-redux"
import { Menu, X } from "react-feather"

const selectToggleState = (state) => state.toggle
const mapStateToProps = (state) => {
    return {
        toggle: state.toggle,
    }
}

export default function Toggler() {
    const sideActive = useSelector(selectToggleState)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch({ type: "toggle" })
    }
    if (!sideActive)
        return (
            <button onClick={toggle}>
                <Menu color="white" strokeWidth="1.6" />
            </button>
        )
    else
        return (
            <button onClick={toggle}>
                <X color="white" strokeWidth="1.6" />
            </button>
        )
}
connect(mapStateToProps)(Toggler)
