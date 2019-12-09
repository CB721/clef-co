import React from "react";
import "./style.css";

function Waves(props) {
    return (
        <div>
            {props.color === "white" ? (
                <div className="white-waves" />
            ) : (<div className="purple-waves" />)}
        </div>

    )
}

export default Waves;