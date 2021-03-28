import React from "react"
import { Content } from "../src/Content"
import "../src/App.css"
import SideBar from "./SideBar"
export class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <SideBar />
                <div className="up-nav">
                    <div className="items">
                        <a href="/">Randomize</a>
                    </div>
                </div>
                <Content />
            </div>
        )
    }
}
