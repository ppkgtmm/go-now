import React from "react";
import "./style/index.css"
import SideBar from "./SideBar";
import data from "./data";
import RandomContent from "./RandomContent";
import { Hamburger } from "./icons/Hanburger";
import { Close } from "./icons/Close";
class Randomize extends React.Component{
    constructor(props) {
        super(props);
        let info = [];
        this.props.seasons.map((season,i)=>{
            data[season].map((item,j)=>{
                info.push(item)
            })
        })
        this.state = {
            index : (Math.floor(Math.random() * Math.floor(info.length+2)))%info.length,
            data : info,
            sideActive : false
        }
        this.handleRandom = this.handleRandom.bind(this)
    }
    handleRandom = () =>{
        this.setState ({
            index: (
                Math.floor(Math.random() * Math.floor(this.state.data.length))
            ) % this.state.data.length
        })
    }
    open = () => {
        this.setState({ 
            sideActive : true
        });
    }
    close = () => {
        this.setState({ 
            sideActive : false
        });
    }
    render(){
        return (
           
            <div className="randomize">
            <nav className="bg-black h-auto">
            <div className="flex p-2.5 items-center justify-between">
                {!this.state.sideActive?   <button onClick={this.open}><Hamburger/></button> 
                : <button onClick= {this.close}><Close/></button>}
            <div>
                <button className="hidden md:block text-white border border-white rounded px-4 py-1 outline-none hover:bg-white hover:text-black" onClick={this.handleRandom}>randomize</button> 
            </div>
            </div>
                </nav>
                <button className="relative mt-8 block md:hidden text-black border border-black rounded px-4 py-1 outline-none hover:bg-black hover:text-white mx-auto" onClick={this.handleRandom}>randomize</button> 
                {this.state.sideActive ? <SideBar /> : null}
                    <RandomContent name={this.state.data[this.state.index].name} content={this.state.data[this.state.index].content} url={this.state.data[this.state.index].imgPath}/>
            </div>
        );
    }
}
export default Randomize