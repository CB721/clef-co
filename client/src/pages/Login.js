import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUser, switchLoggedStatus } from '../actions';
import { Col, Row, Container } from "../components/Grid";
import LoginForm from "../components/Login";
import Button from "../components/Button";
import API from "../utilities/api";
import "./Assets/style.css";


function Login() {
    const [errorClass, setErrorClass] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const dispatch = useDispatch();
    function userLogin(email, password) {
        API.userLogin(email, password)
            .then(res =>
                handleInvalidLogin(res.data)
            )
            .catch(err => console.log(err))
    }
    function handleInvalidLogin(user) {
        if (user === "login error") {
            setErrorClass("form-titles fade-error-message");
            setFormMessage("Trouble logging in.  Please try again.");
            setPassword("");
        } else {
            dispatch(saveUser(user.results[0]));
            dispatch(switchLoggedStatus());
        }
    };
    function handleInputChange(event) {
        let value = event.target.value.trim();
        const name = event.target.name.trim();
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    }
    function handleFormSubmit() {
        setFormMessage("");
        if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            if (password.length < 8) {
                setFormMessage("Passwords must be a least 8 characters");
                setPassword("");
                setErrorClass("form-titles fade-error-message");
            } else {
                userLogin(email, password);
            }
        } else {
            setFormMessage("Please enter a valid email");
            setEmail("");
            setErrorClass("form-titles fade-error-message");
        }
    }

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
                                    errorClass={errorClass}
                                    formMessage={formMessage}
                                    handleInputChange={handleInputChange}
                                    email={email}
                                    password={password}
                                    button={<Button
                                        action={handleFormSubmit}
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

export default Login;
