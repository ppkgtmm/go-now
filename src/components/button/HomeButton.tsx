import React from "react"
import Clickable from "./Clickable"

type Props = {
    isHomePage: boolean
    buttonClass: string
    text: string
    // upper: number
    path?: string

}
export default function HomeButton(props: Props) {
    const isHomePage = props.isHomePage
    const config = { styleClass: props.buttonClass }
    return (
        <Clickable
            config={{
                ...config,
                isHomePage,
                path: props.path || "/",
            }}
        >
            {props.text}
        </Clickable>
    )
}
