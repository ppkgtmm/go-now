import React from "react"
type Props = {
    config: {
        styleClass?: string
        path?: string
    }
    children: React.ReactNode
}
export default function Clickable(props: Props) {
    const styleClass = props.config.styleClass || ""
    const path = props.config.path || "#"
    return (
        <a className={styleClass} href={path}>
            {props.children}
        </a>
    )
}
