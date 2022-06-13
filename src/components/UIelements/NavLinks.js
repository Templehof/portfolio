import React from "react";
import "./NavLinks.css"

const Navas = (props) => {
    return (
        <ul className="navs">
            <li className="nav-btn"><a className="nav-link" href="#main">Main</a><span></span></li>
            <li className="nav-btn"><a className="nav-link" href="#portfolio">Portfolio</a><span></span></li>
            <li className="nav-btn"><a className="nav-link" href="#skills">My Skills</a><span></span></li>
            <li className="nav-btn"><a className="nav-link" href="#contact">Contact me</a><span></span></li>
        </ul>
    )
}

export default Navas;