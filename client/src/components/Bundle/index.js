import React from "react";
import { Col, Row } from "../Grid";
import { Textfit } from 'react-textfit';
import "./style.css";

function Bundle(props) {
    return (
        <Row>
            <Col size="md-12">
                <div className="bundle white">
                    <Row>
                        <Col size="md-12">
                            <img src={props.bundleImage} alt={props.bundleTitle} className="bundle-image"></img>
                        </Col>
                        <div className="bundle-text">
                            <Col size="md-12">
                                <Textfit
                                    mode="single"
                                    className="white product-title"
                                    min={10}
                                    max={20}
                                >
                                    {props.bundleTitle}
                                </Textfit>
                            </Col>
                            <Col size="md-12">
                                <div className="ipod-bg">
                                    <div className="ipod-cover">
                                        <span>
                                            {props.bundleDescription.slice(0, 700) + "..."}
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <Col size="md-12">
                            <div className="center-bundle-button">
                                {props.button}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default Bundle;