import React from "react";
import "./NavLinks.css"

const NavLinks = (props) => {
    return (
        <ul className="navs">
            <li className="nav-btn" onClick={()=>{props.handleClick("main")}} >Portfolio<span></span></li>
            <li className="nav-btn" onClick={()=>{props.handleClick("skills")}}>My skills<span></span></li>
            <li className="nav-btn" onClick={()=>{props.handleClick("contact")}}>Contact me<span></span></li>
        </ul>
    )
}

export default NavLinks;