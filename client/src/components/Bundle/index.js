import React from "react";
import Button from "../Button";
import "./style.css";

function Bundle(props) {
    return (
        <div className="bundle">
            <img src={props.bundleImage} alt={props.bundleTitle} className="bundle-image"></img>
            <div>
                <h4>
                    {props.bundleTitle}
                </h4>
                <h6>
                    {props.bundleDescription}
                </h6>
            </div>
            <Button
                buttonClass="shop-now"
                text="Learn More"
            />
        </div>
    )
}

export default Bundle;