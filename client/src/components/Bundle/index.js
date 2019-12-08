import React, { useEffect, useState } from "react";
import { Col, Row } from "../Grid";
import { Textfit } from 'react-textfit';
import "./style.css";

function Bundle(props) {
    const [image, setImage] = useState("");
    function cycleImages() {
        let i = 1;
        setInterval(function() {
            if (i < props.bundleImage.length) {
                setImage(props.bundleImage[i]);
                i += 1;
            } else {
                i = 0;
                setImage(props.bundleImage[i]);
            }
        }, props.slideTime)
    }
    useEffect(() => {
        setImage(props.bundleImage[0]);
        cycleImages();
    }, [])
    
    return (
        <Row>
            <Col size="md-12">
                <div className="bundle white" onClick={props.action}>
                    <Row>
                        <Col size="md-12">
                            <img src={image} alt={props.bundleTitle} className="bundle-image"></img>
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
                                            {props.bundleDescription.slice(0, 230) + "..."}
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