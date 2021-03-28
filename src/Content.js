import React from 'react';
function Content(props) {
	return(
    <div className="content">
    <img src={props.url} alt="not available"/>
    <div className="text">
    <h3>{props.name}</h3>
    <p> {props.content}</p>
    </div>
    </div>
	);
}
export default Content


