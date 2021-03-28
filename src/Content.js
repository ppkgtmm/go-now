import { get } from "lodash"
import React from "react"
function Content({ data }) {
    return (
        <div className="w-72 m-2 rounded-lg shadow-lg overflow-hidden">
            <img src={get(data, "url", "")} alt="not available" />
            <div className="px-2 py-4">
                <h3>{get(data, "name", "")}</h3>
                <p> {get(data, "content", "")}</p>
            </div>
        </div>
    )
}
export default Content
