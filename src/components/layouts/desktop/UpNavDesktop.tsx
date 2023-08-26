import React from "react"
import { Toggler } from "../../button"
import HomeButton from "../../button/HomeButton"
type Props = {
    isHomePage: boolean
}
export default function UpNavDesktop(props: Props) {
    const buttonClass =
        "hidden md:block border border-white text-white rounded hover:bg-white hover:text-black px-8 py-1 leading-6"
    return (
        <header className="fixed top-0 z-50 hidden md:block bg-black w-full h-auto mt-0">
            <div className="flex p-2.5 items-center justify-between">
                <Toggler />
                <HomeButton {...props} buttonClass={buttonClass} text='home' />
                {if(isHomePage) {<div className="h-[34px]"></div>}}
            </div>
        </header>
    )
}
