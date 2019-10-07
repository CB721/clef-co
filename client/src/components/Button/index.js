import React from 'react';
import "./style.css";

function CustomButton(props) {
    return (
        <button className={props.buttonClass}>
            {props.text}
        </button>
    )
}

export default CustomButton;