import React from "react"
import Button from "../../button/Button"
import seasonsData from "../../../data/seasons.json"
function Buttons() {
    return (
        <ul className="nav-list flex flex-col justify-evenly items-end w-28 ml-auto">
            {seasonsData.map((seasonData, index) => (
                <li className="my-1 w-full" key={index}>
                    <Button link={seasonData.path}>
                        {seasonData.season || seasonsData.path}
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default Buttons
