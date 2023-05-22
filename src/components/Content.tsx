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
                className="mx-auto block lg:mx-0"
                alt="not available"
            />
            <div className={props.style?.textContainer || ""}>
                <h3 className="text-xl md:text-2xl content-header uppercase">
                    {props.data.name}
                </h3>
                <p className="content paragraph">
                    {props.data.content}
                </p>
            </div>
        </div>
    )
}
export default Content
