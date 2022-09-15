import React from "react";
import "./menu.scss";
export default function Menu(props){

    return(
        <div className={props.state?"menu active":"menu"} >
            <ul>
                <li onClick={()=>props.setState(false)}>
                <a href="/">Home</a>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a href="/#events">Events</a>
                </li>
                
            </ul>
        </div>
    );
}