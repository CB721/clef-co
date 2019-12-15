import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUser, switchLoggedStatus } from '../actions';
import { Col, Row } from "../components/Grid";
import LoginForm from "../components/Login";
import Button from "../components/Button";
import API from "../utilities/api";
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';
import 'react-toastify/dist/ReactToastify.css';
import "./Assets/style.css";


function Login() {
    const [errorClass, setErrorClass] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            sessionStorage.setItem("logged_in", true);
            sessionStorage.setItem("token", user.results[0].token);
            sessionStorage.setItem("first_name", user.results[0].first_name);
            sessionStorage.setItem("last_name", user.results[0].last_name);
            sessionStorage.setItem("email", user.results[0].email);
            sessionStorage.setItem("phone", user.results[0].phone);
            sessionStorage.setItem("street_address", user.results[0].street_address);
            sessionStorage.setItem("secondary_address", user.results[0].secondary_address);
            sessionStorage.setItem("city", user.results[0].city);
            sessionStorage.setItem("user_state", user.results[0].user_state);
            sessionStorage.setItem("zip_code", user.results[0].zip_code);
            sessionStorage.setItem("last_visit", user.results[0].last_visit);
            sessionStorage.setItem("joined_date", user.results[0].joined_date);
            sessionStorage.setItem("id", user.results[0].id);
            window.location.href = "/user/profile";
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
        const cookieEnabled = navigator.cookieEnabled;
        if (cookieEnabled) {
            sessionStorage.clear();
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
        } else {
            toast("Please enable cookies to continue", {
                className: css({
                    background: '#3E0768',
                    boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
                    borderRadius: '17px'
                }),
                bodyClassName: css({
                    fontSize: '20px',
                    color: 'white'
                }),
                progressClassName: css({
                    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,7,104,1) 80%)"
                })
            });
        }
    }

    return (
        <div className="page-container">
            <Row no-gutters>
                <Col size="md-2" />
                <Col size="md-8">
                    <h1 className="white q-top-pad text-shadow">
                        Login
                    </h1>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <Row no-gutters>
                        <Col size="md-4" />
                        <Col size="md-4">
                            <LoginForm
                                type="login"
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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Login;
