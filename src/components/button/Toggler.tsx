import React from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { Menu, X } from "react-feather"
import { mapToggleToProps, selectToggle } from "../../functions"

export default function Toggler() {
    const style = {
        color: "white",
        strokeWidth: "1.6",
    }
    const sideActive = useSelector(selectToggle)
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch({ type: "toggle" })
    }
    if (!sideActive)
        return (
            <button onClick={toggle}>
                <Menu {...style} />
            </button>
        )

    return (
        <button onClick={toggle}>
            <X {...style} />
        </button>
    )
}
connect(mapToggleToProps)(Toggler)
