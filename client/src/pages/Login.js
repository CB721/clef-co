import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import LoginForm from "../components/Login";
import Button from "../components/Button";
import API from "../utilities/api";
import "./Assets/style.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
        formMessage: "",
        errorClass: ""
    }
    userLogin = (email, password) => {
        API.userLogin(email, password)
            .then(res =>
                this.handleInvalidLogin(res.data)
            )
            .catch(err => console.log(err))
    }
    handleInvalidLogin = (data) => {
        if (data === "login error") {
            this.setState({
                formMessage: "Trouble logging in.  Please try again.",
                errorClass: "form-titles fade-error-message",
                password: ""
            });
        } else {
            console.log(data.results)
        }
    }
    handleInputChange = () => event => {
        let value = event.target.value.trim();
        const name = event.target.name.trim();
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = () => event => {
        event.preventDefault();
        this.setState({ formMessage: "" });
        if (this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            if (this.state.password.length < 8) {
                this.setState({
                    formMessage: "Passwords must be a least 8 characters",
                    errorClass: "form-titles fade-error-message"
                })
            } else {
                this.userLogin(this.state.email, this.state.password);
            }
        } else {
            this.setState({
                formMessage: "Please enter a valid email",
                email: "",
                errorClass: "form-titles fade-error-message"
            });
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
                                Login
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <Row>
                                <Col size="md-4" />
                                <Col size="md-4">
                                    <LoginForm
                                        errorClass={this.state.errorClass}
                                        formMessage={this.state.formMessage}
                                        handleInputChange={this.handleInputChange()}
                                        email={this.state.email}
                                        password={this.state.password}
                                        button={<Button
                                            action={this.handleFormSubmit()}
                                            buttonClass="explore"
                                            text="Log In"
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

export default Login;