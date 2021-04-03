import React from "react"
import { Place } from "../types"
type Props = {
    data: Place
    style?: {
        container: string
        textContainer: string
    }
}
function Content(props: Props) {
    return (
        <div className={props.style?.container || ""}>
            <img
                src={props.data.url}
                className="mx-auto block"
                alt="not available"
            />
            <div className={props.style?.textContainer || ""}>
                <h3 className="text-center content-header">
                    {props.data.name}
                </h3>
                <p className="text-justify content text-sm paragraph">
                    {props.data.content}
                </p>
            </div>
        </div>
    )
}
export default Content
