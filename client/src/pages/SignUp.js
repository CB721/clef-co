import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SignUpForm from "../components/SignUp";
import Button from "../components/Button";
import "./Assets/style.css";

class SignUp extends Component {
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
                            <h1 className="white q-top-pad text-shadow">
                                Create a new account
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Row>
                                <Col size="md-4" />
                                <Col size="md-4">
                                    <SignUpForm
                                        button={<Button
                                            buttonClass="explore"
                                            text="Join!"
                                        />}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignUp;