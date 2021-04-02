import React from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { Menu, X } from "react-feather"
import { mapToggleToProps, selectToggle } from "../../functions"

export default function Toggler() {
    const sideActive = useSelector(selectToggle)
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
connect(mapToggleToProps)(Toggler)
