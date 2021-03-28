import { get } from "lodash"
import React from "react"
function Content({ data, style }) {
    return (
        <div className={get(style, "container", "")}>
            <img
                src={get(data, "url", "")}
                className="m-auto"
                alt="not available"
            />
            <div className={get(style, "textContainer", "")}>
                <h3 className="text-center pt-4">{get(data, "name", "")} </h3>
                <p className="text-justify pt-2"> {get(data, "content", "")}</p>
            </div>
        </div>
    )
}
export default Content
