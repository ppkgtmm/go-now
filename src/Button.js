import React from "react"
function Button(props){

        return(
                <li className="self-end w-full my-3">
                    <a className="text-center block bg-transparent hover:bg-white text-white hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded" href={props.link}>{props.name}</a>
                </li>
        )

}
export default Button