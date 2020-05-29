import React from "react";
import "./App.css"
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
            index : (Math.floor(Math.random() * Math.floor(this.state.data.length)))%this.state.data.length})
    }
    open = () => {
        this.setState({ 
            sideActive : true
        });
        // console.log(this.state.sideActive);
    }
    close = () => {
        this.setState({ 
            sideActive : false
        });
    }
    render(){
        return(
            <div className="randomize">
                <div className="up-nav" style={{height:50}}>
                <button className="rand-button"  onClick={this.handleRandom}>
                                Random
                            </button>
                </div>
                {!this.state.sideActive?  <button className="side-bar open" onClick={this.open}> <img src={require("./img/open-menu.png")}/></button> 
                    : <button className="side-bar close" onClick= {this.close}>X</button>}
                    {this.state.sideActive ? <SideBar/> : ''}
                <div className="Cards">
                    <div className="card">
                        <RandomContent name={this.state.data[this.state.index].name} content={this.state.data[this.state.index].content} url={this.state.data[this.state.index].imgPath}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Randomize