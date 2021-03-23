import React from 'react';
import './App.css'
function RandomContent(props) {
        return(
            <div className="random-content h-auto relative mt-8" >
                <img className="m-auto" src={require("./img/"+ props.url).default} alt="not available"/>
                <div className="data w-8/12 m-auto">
                    <h3 className="text-center">{props.name}</h3>
                    <p className="text-justify"> {props.content}</p>
                </div>
            </div>
        );
}
export default RandomContent

