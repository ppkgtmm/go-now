import React from "react"
import Button from "./Button"
function Buttons(){
        return(
                    <ul className="nav-list flex flex-col justify-evenly items-end w-28 ml-auto">
                        <Button link = "spring" name="Spring"/>
                        <Button link = "summer" name="Summer"/>
                        <Button link = "autumn" name="Autumn"/>
                        <Button link = "winter" name="Winter"/>
                    </ul>
        )
}
export default Buttons