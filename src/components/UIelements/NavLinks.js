import React from "react";
import { Link } from "react-router-dom"
import "./NavLinks.css"

const NavLinks = (props) => {
    return (
        <ul className="navs">
            <li className="nav-btn"><Link className="nav-link" to="/">Portfolio</Link><span></span></li>
            <li className="nav-btn"><Link className="nav-link" to="/skills">My Skills</Link><span></span></li>
            <li className="nav-btn"><Link className="nav-link" to="/contact">Contact me</Link><span></span></li>
        </ul>
    )
}

export default NavLinks;