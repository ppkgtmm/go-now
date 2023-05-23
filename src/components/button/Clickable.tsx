import React from "react"
type Props = {
    config: {
        isHomePage: boolean
        styleClass?: string
        path?: string
    }
    children: React.ReactNode
}
export default function Clickable(props: Props) {
    const isHomePage = props.config.isHomePage
    const styleClass = props.config.styleClass || ""
    const path = props.config.path || "#"
    if (isHomePage) {
        return null
    }
    return (
        <a className={styleClass} href={path}>
            {props.children}
        </a>
    )
}
