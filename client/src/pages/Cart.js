import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./Assets/style.css";

class Cart extends Component {
    state = {

    }

    render() {
        return (
            <div className="three-d-background">
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <div className="three-d-objects" />
                <Container fluid>
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Cart;