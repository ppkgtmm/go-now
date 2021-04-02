import React from "react"
import Button from "../../button/Button"
import { SeasonButton } from "./types"

type Props = {
    buttonsData: SeasonButton[]
}

function Buttons(props: Props) {
    return (
        <ul className="nav-list flex flex-col justify-evenly items-end w-28 ml-auto">
            {props.buttonsData.map((seasonData, index) => (
                <li className="my-1 w-full" key={index}>
                    <Button link={seasonData.path}>{seasonData.name}</Button>
                </li>
            ))}
        </ul>
    )
}
export default Buttons
