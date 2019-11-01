import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SignUpForm from "../components/SignUp";
import Button from "../components/Button";
import "./Assets/style.css";

class SignUp extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        conPassword: "",
        formMessage: ""
    }
    handleInputChange = () => event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value.trim()
        });
    }
    handleFormSubmit = () => event => {
        event.preventDefault();
        this.setState({ formMessage: "" });
        if (this.state.password.length < 8) {
            this.setState({
                formMessage: "Password length must be a least 8 characters",
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (this.state.password === this.state.conPassword) {
                if (this.state.email === "" || this.state.last === "" || this.state.first === "" || this.state.password === "") {
                    this.setState({
                        formMessage: "Please complete all fields"
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    if (this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        console.log("success");
                    } else {
                        this.setState({
                            formMessage: "Please enter a valid email",
                            email: ""
                        });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            } else {
                this.setState({
                    password: "",
                    conPassword: "",
                    formMessage: "Password must match"
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

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
                                        formMessage={this.state.formMessage}
                                        first={this.state.first}
                                        last={this.state.last}
                                        email={this.state.email}
                                        password={this.state.password}
                                        conPassword={this.state.conPassword}
                                        handleInputChange={this.handleInputChange()}
                                        button={<Button
                                            action={this.handleFormSubmit()}
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