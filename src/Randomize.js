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
            data : info
        }
        this.handleRandom = this.handleRandom.bind(this)
    }
    handleRandom = () =>{
        this.setState ({
            index : (Math.floor(Math.random() * Math.floor(this.state.data.length)))%this.state.data.length})
    }
    render(){
        return(
            <div className="randomize">
                <SideBar />
                <div className="up-nav">
                </div>
                <div className="Cards" style={{width:1000,display:"block"}}>
                    <div className="card" style={{width:1000,padding:20}}>
                            <button className="rand-button"  onClick={this.handleRandom}>
                                Random
                            </button>
                        <RandomContent name={this.state.data[this.state.index].name} content={this.state.data[this.state.index].content} url={this.state.data[this.state.index].imgPath}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Randomize