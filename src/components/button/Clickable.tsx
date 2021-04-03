import React from "react"
import classNames from "classnames"
import { noop } from "lodash"
type Props = {
    config: {
        redirectable: boolean
        styleClass?: string
        path?: string
        clickHandler?: () => void
    }
    children: React.ReactNode
}
export default function Clickable(props: Props) {
    const redirectable = props.config.redirectable
    const styleClass = props.config.styleClass || ""
    const path = props.config.path || "#"
    if (!redirectable)
        return (
            <button
                className={classNames(styleClass, "clickable")}
                onClick={props.config.clickHandler || noop}
            >
                {props.children}
            </button>
        )
    return (
        <a className={styleClass} href={path}>
            {props.children}
        </a>
    )
}
