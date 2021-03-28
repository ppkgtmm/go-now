import { get } from "lodash"
import React from "react"
import "./App.css"
function RandomContent({ data }) {
    return (
        <div className="random-content h-auto relative mt-4">
            <img
                className="m-auto"
                src={get(data, "url", "")}
                alt="not available"
            />
            <div className="data w-8/12 m-auto">
                <h3 className="text-center pt-4">{get(data, "name", "")} </h3>
                <p className="text-justify pt-2"> {get(data, "content", "")}</p>
            </div>
        </div>
    )
}
export default RandomContent
