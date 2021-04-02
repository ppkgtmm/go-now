import { get } from "lodash"
import React from "react"
function Content({ data, style }) {
    return (
        <div className={get(style, "container", "")}>
            <img
                src={get(data, "url", "")}
                className="mx-auto block max-h-400px md:min-h-400px"
                alt="not available"
            />
            <div className={get(style, "textContainer", "")}>
                <h3 className="text-center content-header">
                    {get(data, "name", "")}
                </h3>
                <p className="text-justify content text-sm">
                    {get(data, "content", "")}
                </p>
            </div>
        </div>
    )
}
export default Content
