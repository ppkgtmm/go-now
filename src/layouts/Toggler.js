import React from "react"
import { Hamburger } from "../icons/Hamburger"
import { Close } from "../icons/Close"
import { useSelector, useDispatch, connect } from "react-redux"

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
                <Hamburger />
            </button>
        )
    else
        return (
            <button onClick={toggle}>
                <Close />
            </button>
        )
}
connect(mapStateToProps)(Toggler)
