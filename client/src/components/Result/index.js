import React, { useEffect, useState } from "react";
import { Row, Col } from "../Grid";
import "./style.css";

function Result(props) {
    const [type, setType] = useState("");
    const [id, setID] = useState(0);

    useEffect(() => {
        if (props.price) {
            setType("product");
            setID(props.productIDProduct);
        }
        if (props.checkedOut) {
            setType("order");
            setID(props.productID);
        }
        if (props.formDescription) {
            setType("support");
            setID(props.productID);
        }
    }, [props])

    return (
        <div className="result purple" onClick={(event) => props.goToProduct(event, id)}>
            <Row no-gutters>
                <Col size="sm-2 12">
                    <div className="center-stars">
                        <h6 className="result-type">
                            {type}
                        </h6>
                    </div>
                </Col>
                <Col size="sm-8 12">
                    <div className="center-stars">
                        <h3>
                            {props.productName}
                        </h3>
                    </div>
                </Col>
                <Col size="sm-2 12">
                    <div className="center-stars">
                        {type === "product" ? (
                            <h6 className="result-basic-info result-support-info">
                                ${props.price}
                            </h6>
                        ) : type === "order" ? (
                            <h6 className="result-basic-info">
                                Checked out on {props.checkedOut.split('T')[0]}
                            </h6>
                        ) : type === "support" ? (
                            <h6 className="result-basic-info">
                                Submitted on {props.created.split('T')[0]}
                            </h6>
                        ) : (<div />)}
                    </div>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="sm-2 12">
                    <div className="center-stars">
                        {type === "product" ? (
                            <p className="result-secondary-info result-support-info">
                                {props.instrumentType}
                            </p>
                        ) : type === "order" ? (
                            <p className="result-secondary-info">
                                {props.orderID}
                            </p>
                        ) : type === "support" ? (
                            <p className="result-secondary-info">
                                {props.email}
                            </p>
                        ) : (<div />)}
                    </div>
                </Col>
                <Col size="sm-8 12">
                    <div className="center-stars">
                        {type === "product" || type === "order" ? (
                            <p className="result-description">
                                {props.productDescription.slice(0, 200) + "..."}
                            </p>
                        ) : type === "support" ? (
                            <p className="result-description">
                                {props.formDescription}
                            </p>
                        ) : (<div />)}
                    </div>
                </Col>
                <Col size="sm-2 12">
                    <div className="center-stars">
                        <img src={props.image} alt={props.productName} className="result-image"></img>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Result;