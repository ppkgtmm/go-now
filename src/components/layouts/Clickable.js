import { get, noop } from "lodash"
import React from "react"
export default function Clickable(props) {
    const redirectable = get(props, "config.redirectable", true)
    const styleClass = get(props, "config.styleClass", "")
    const path = get(props, "config.path", "/")
    const clickHandler = get(props, "config.clickHandler", noop)
    if (!redirectable)
        return (
            <button className={styleClass} onClick={clickHandler}>
                {props.children}
            </button>
        )
    return (
        <a className={styleClass} href={path}>
            {props.children}
        </a>
    )
}
