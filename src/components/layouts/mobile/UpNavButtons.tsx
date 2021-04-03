import React from "react"
import { useDispatch } from "react-redux"
import { Button } from "../../button"
import { Clickable } from "../../button"
import { SeasonButton } from "../../../types"

type Props = {
    isRandomPage: boolean
    upper: number
    buttonData: SeasonButton[]
}

export default function Buttons(props: Props) {
    const buttonClass =
        "text-white hover:bg-white hover:text-black px-4 py-2 text-center block text-md w-full"
    const dispatch = useDispatch()
    const updateRandomPlace = () => {
        dispatch({ type: "randomize", length: props.upper })
    }
    const renderRandomButton = () => {
        const isRandomPage = props.isRandomPage
        const config = { styleClass: buttonClass }
        return (
            <Clickable
                config={{
                    ...config,
                    redirectable: !isRandomPage,
                    clickHandler: updateRandomPlace,
                    path: "/",
                }}
            >
                randomize
            </Clickable>
        )
    }
    return (
        <ul className="relative flex md:hidden bg-black flex-col items-stretch w-full">
            {props.buttonData.map((data, index) => (
                <li key={index} className="block w-full">
                    <Button buttonClass={buttonClass} link={data.path}>
                        {data.name || data.path}
                    </Button>
                </li>
            ))}
            <li className="block">{renderRandomButton()}</li>
        </ul>
    )
}
