import React from "react"
import { Button } from "../../button"
import { SeasonButton } from "../../../types"
import RandomButton from "../../button/RandomButton"

type Props = {
    isRandomPage: boolean
    upper: number
    buttonData: SeasonButton[]
}

export default function Buttons(props: Props) {
    const buttonClass =
        "text-white hover:bg-white hover:text-black px-4 py-2 text-center block text-md w-full"
    return (
        <ul className="relative flex md:hidden bg-black flex-col items-stretch w-full">
            {props.buttonData.map((data, index) => (
                <li key={index} className="block w-full">
                    <Button buttonClass={buttonClass} link={data.path}>
                        {data.name || data.path}
                    </Button>
                </li>
            ))}
            <li className="block">
                <RandomButton {...props} buttonClass={buttonClass} />
            </li>
        </ul>
    )
}
