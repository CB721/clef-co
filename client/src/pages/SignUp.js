import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SignUpForm from "../components/SignUp";
import Button from "../components/Button";
import API from "../utilities/api";
import "./Assets/style.css";

class SignUp extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        conPassword: "",
        formMessage: "",
        errorClass: "",
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
        const user = {
            "first_name": this.state.first,
            "last_name": this.state.last,
            "user_password": this.state.password,
            "email": this.state.email
        }
        if (this.state.password.length < 8) {
            this.setState({
                formMessage: "Passwords must be a least 8 characters",
                errorClass: "form-titles fade-error-message",
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (this.state.password === this.state.conPassword) {
                if (this.state.email === "" || this.state.last === "" || this.state.first === "" || this.state.password === "") {
                    this.setState({
                        formMessage: "Please complete all fields",
                        errorClass: "form-titles fade-error-message",
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    if (this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        console.log("success");
                        API.createUser(user)
                            .then(
                                this.setState({
                                    formMessage: "Success!"
                                }),
                                window.location.href = "/login"
                            )
                            .catch(err => console.log(err));
                    } else {
                        this.setState({
                            formMessage: "Please enter a valid email",
                            email: "",
                            errorClass: "form-titles fade-error-message",
                        });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            } else {
                this.setState({
                    password: "",
                    conPassword: "",
                    formMessage: "Passwords must match"
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

    }
    render() {
        return (
            <div className="page-container">
                {/* <Container fluid> */}
                    <Row no-gutters>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <h1 className="white q-top-pad text-shadow">
                                Create a new account
                            </h1>
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="md-12">
                            <Row no-gutters>
                                <Col size="md-4" />
                                <Col size="md-4">
                                    <SignUpForm
                                        errorClass={this.state.errorClass}
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
                {/* </Container> */}
                </div>
        )
    }
}

export default SignUp;