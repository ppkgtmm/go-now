import React from "react"
import { useDispatch } from "react-redux"
import Button from "../../button/Button"
import seasonsData from "../../../data/seasons.json"
import { get } from "lodash"
import Clickable from "../Clickable"

export default function Buttons(props) {
    const buttonClass =
        "text-white hover:bg-white hover:text-black px-4 py-2 text-center block text-md w-full"
    const dispatch = useDispatch()
    const updateRandomPlace = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    const renderRandomButton = () => {
        const isRandomPage = get(props, "isRandomPage", false)
        const config = { styleClass: buttonClass }
        if (isRandomPage)
            return (
                <Clickable
                    config={{
                        ...config,
                        redirectable: false,
                        clickHandler: updateRandomPlace,
                    }}
                >
                    randomize
                </Clickable>
            )
        return <Clickable config={config}>randomize</Clickable>
    }
    return (
        <ul className="relative flex md:hidden bg-black flex-col items-stretch w-full">
            {seasonsData.map((seasonData, index) => (
                <li key={index} className="block w-full">
                    <Button buttonClass={buttonClass} link={seasonData.path}>
                        {seasonData.season || seasonData.path}
                    </Button>
                </li>
            ))}
            <li className="block">{renderRandomButton()}</li>
        </ul>
    )
}
