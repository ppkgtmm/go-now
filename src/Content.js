import React from 'react';
function Content(props) {
	return(
    <div className="content">
    <img src={require("./img/"+props.url)} alt="not available"/>
    <h3>{props.name}</h3>
    <p> {props.content}</p>
    </div>
	);
}
export default Content


