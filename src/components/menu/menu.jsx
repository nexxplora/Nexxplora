import React from "react";
import "./menu.scss";
import { HashLink } from 'react-router-hash-link';
export default function Menu(props){

    return(
        <div className={props.state?"menu active":"menu"} >
            <ul>
                <li onClick={()=>props.setState(false)}>
               <HashLink to="/Nexxplora/#intro">Home</HashLink>
                </li>
                <li onClick={()=>props.setState(false)}>
                <HashLink to="/Nexxplora/#events">Events</HashLink>
                </li>
                <li onClick={()=>props.setState(false)}>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdtfhKUUuPEqTRlON0WjMt_0I513avg_fxYHcKZvSM1-DfwKw/viewform">Register</a>
                </li>
                
            </ul>
        </div>
    );
}