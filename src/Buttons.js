import React from "react"
import AButton from "./AButton"
function Buttons(){
        return(
                <nav className="nav">
                    <ul className="nav-list">
                        <AButton link = "spring" name="Spring"/><br/>
                        <AButton link = "summer" name="Summer"/><br/>
                        <AButton link = "autumn" name="Autumn"/><br/>
                        <AButton link = "winter" name="Winter"/><br/>
                    </ul>
                </nav>
        )
}
export default Buttons