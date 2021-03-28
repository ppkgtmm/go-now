import React from "react"
import Button from "../../button/Button"
import buttonsData from "../../data/buttons.json"
function Buttons() {
    return (
        <ul className="nav-list flex flex-col justify-evenly items-end w-28 ml-auto">
            {buttonsData.map((buttonData, index) => (
                <li className="my-1 w-full" key={index}>
                    <Button link={buttonData.path}>
                        {buttonData.text || buttonData.path}
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default Buttons
