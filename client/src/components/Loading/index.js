import React, { useEffect, useState } from "react";
import { CircleLoader } from 'react-spinners';
import "./style.css";

function Loading(props) {
    const [color, setColor] = useState("");
    useEffect(() => {
        if (props.color === "purple") {
            setColor("#3E0768");
        } else {
            setColor("#ffffff");
        }
    }, [])
    return (
        <div className="loading-circle">
        <CircleLoader 
            color={color}
            loading={true}
            size={150}
        />
        </div>
    )
}

export default Loading;