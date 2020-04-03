import React from "react"
function AButton(props){

        return(
                <li className="nav-item">
                    <a className="pure-button" href={props.link}>{props.name}</a>
                </li>
        )

}
export default AButton