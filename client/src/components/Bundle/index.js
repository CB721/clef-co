import React from "react";
import { Col, Row } from "../Grid";
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
            <Row>
                <Col size="md-1" />
                <Col size="md-5">
                    {props.button}
                </Col>
            </Row>

        </div>
    )
}

export default Bundle;