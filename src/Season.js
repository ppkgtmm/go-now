import React from 'react'
import './App.css';
import Content from './Content'
import SideBar from "./layouts/desktop/SideBar"
import data from './data/data.json'
class Season extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                sideActive : false
            }
            this.open = this.open.bind(this);
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
                <div className="Season">
                    <div className="up-nav">
                        <div className="items right">
                            <a className="rand-link" href="/">Randomize</a>
                        </div>
                    </div>
                    {!this.state.sideActive?  <button className="side-bar open" onClick={this.open}> <img src={require("./img/open-menu.png")}/></button> 
                    : <button className="side-bar close" onClick= {this.close}>X</button>}
                    {this.state.sideActive ? <SideBar/> : ''}
                    <div className="Cards"> 
                    {
                            data[this.props.season].map((info,i)=>{
                                return (
                                    <div className="card" key={i}>
                                        <Content name={info.name} content={info.content} url={info.imgPath} />
                                    </div>
                                );
                            })}
                    </div>
                </div>


        );
}
}
export default Season