import React from 'react';
function RandomContent(props) {
        return(
            <div className="random-content" >
                <img src={require("./img/"+props.url)} alt="not available"/>
                <div className="data">
                    <h3>{props.name}</h3>
                    <p> {props.content}</p>
                </div>
            </div>
        );
}
export default RandomContent

