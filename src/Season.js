import React from 'react'
import './App.css';
import Content from './Content'
import SideBar from "./SideBar"
import data from './data'
function Season(props){

        return(
                <div className="Season">
                    <SideBar />
                    <div className="up-nav">
                        <div className="items">
                            <a className="rand-link" href="/">Randomize</a>
                        </div>
                    </div>
                    <div className="container">
                    <div className="Cards">
                        {
                            data[props.season].map((info,i)=>{
                                return (
                                    <div className="card" key={i}>
                                        <Content name={info.name} content={info.content} url={info.imgPath} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
                </div>


        );
}
export default Season