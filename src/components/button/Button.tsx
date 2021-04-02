import React from "react"

type Props = {
    buttonClass?: string
    link: string
    children: React.ReactNode
}
function Button(props: Props) {
    const defaultClass =
        "text-center block bg-transparent hover:bg-white hover:text-black text-white py-1.5 px-4 border border-white-500 hover:border-none rounded"
    return (
        <a className={props.buttonClass || defaultClass} href={props.link}>
            {props.children}
        </a>
    )
}
export default Button
