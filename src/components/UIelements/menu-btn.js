import React from "react";
import "./menu-btn.css"


function MenuButton(props) {
    return (
      <button className='menu-btn'onClick={props.handleClick} >
        <span />
        <span />
        <span />
      </button>
    );
  }
  
  export default MenuButton;