import React from "react"
import "./App.css"
function RandomContent(props) {
    return (
        <div className="random-content h-auto relative mt-4">
            <img className="m-auto" src={props.url} alt="not available" />
            <div className="data w-8/12 m-auto">
                <h3 className="text-center pt-4">{props.name}</h3>
                <p className="text-justify pt-2"> {props.content}</p>
            </div>
        </div>
    )
}
export default RandomContent
