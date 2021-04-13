import React from "react"
import { useDispatch } from "react-redux"
import Clickable from "./Clickable"

type Props = {
    isRandomPage: boolean
    buttonClass: string
    upper: number
    path?: string
}
export default function RandomButton(props: Props) {
    const dispatch = useDispatch()
    const updateRandomPlace = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    const isRandomPage = props.isRandomPage
    const config = { styleClass: props.buttonClass }
    return (
        <Clickable
            config={{
                ...config,
                redirectable: !isRandomPage,
                clickHandler: updateRandomPlace,
                path: props.path || "/",
            }}
        >
            randomize
        </Clickable>
    )
}
