import React from "react";

import "./floaters.css"

const Floaters = () => {
    return (
        <ul className="floaters">
            <li>{"<html>"}</li>
            <li>{"<p>"}</li>
            <li>{"<h1>"}</li>
            <li>{"</p>"}</li>
            <li>{"</div>"}</li>
            <li>{"<header>"}</li>
            <li>{"<script>"}</li>
            <li>{"<p/>"}</li>
            <li>{"<body>"}</li>
        </ul>
    )
}

export default Floaters;