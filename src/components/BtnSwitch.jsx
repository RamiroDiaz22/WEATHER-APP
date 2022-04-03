import React from "react";
import './BtnSwitch.css';
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function btnSwitch({dark}) {


    return(
        <button className="switch-btnSwitch" id='dark' onClick={dark}>
          <span><FaSun/></span>
          <span><BsFillMoonFill/></span>
        </button>
    )
}