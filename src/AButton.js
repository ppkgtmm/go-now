import React from "react"
function AButton(props){

        return(
                <li className="nav-item">
                    <a className="bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded" href={props.link}>{props.name}</a>
                </li>
        )

}
export default AButton