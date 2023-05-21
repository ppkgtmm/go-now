import React from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { Menu, X } from "react-feather"
import { mapToggleToProps, selectToggle } from "../../functions"
import { iconStyle, toggle } from "../../types"

export default function Toggler() {
    const sideActive = useSelector(selectToggle)
    const dispatch = useDispatch()
    const toggleIt = () => {
        dispatch({ type: "toggle" })
    }
    const unToggleIt = () => {
        dispatch({ type: "untoggle" })
    }
    if (sideActive !== toggle.SHOW)
        return (
            <button onClick={toggleIt}>
                <Menu {...iconStyle} />
            </button>
        )
    return (
        <button onClick={unToggleIt}>
            <X {...iconStyle} />
        </button>
    )
}
connect(mapToggleToProps)(Toggler)
