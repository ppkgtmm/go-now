import React from "react";
import "./style/index.css"
import SideBar from "./SideBar";
import data from "./data";
import RandomContent from "./RandomContent";
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
            <div className="hidden md:flex p-2.5 items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <div>
                <button className="text-white border border-white rounded px-4 py-1 outline-none hover:bg-white hover:text-black" onClick={this.handleRandom}>randomize</button> 
            </div>
            </div>
            <div class="md:hidden p-3" id="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            </div>
                </nav>
                {/* {!this.state.sideActive?  <button className="side-bar open" onClick={this.open}> <img src={require("./img/open-menu.png").default}/></button> 
                    : <button className="side-bar close" onClick= {this.close}>X</button>} */}
                {this.state.sideActive ? <SideBar /> : ''}
                    <RandomContent name={this.state.data[this.state.index].name} content={this.state.data[this.state.index].content} url={this.state.data[this.state.index].imgPath}/>
            </div>
        );
    }
}
export default Randomize