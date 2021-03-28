import { get } from "lodash"
import React from "react"
function Button(props) {
    const defaultClass =
        "text-center block bg-transparent hover:bg-white hover:text-black text-white py-1.5 px-4 border border-white-500 hover:border-none rounded"
    return (
        <a
            className={get(props, "buttonClass", defaultClass)}
            href={get(props, "link", "#")}
        >
            {props.children}
        </a>
    )
}
export default Button
