import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import Form from "../components/Form";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Waves from "../components/Waves";
import API from "../utilities/api";
import ProductData from "../pages/Assets/Data/products.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import "./Assets/style.css";

class Contact extends Component {
    state = {
        products: [],
        email: window.sessionStorage.email,
        subject: "",
        description: "",
        productSelection: [],
        formMessage: "",
        errorClass: "",
        displayPage: true,
    }
    componentDidMount() {
        if (window.sessionStorage.logged_in) {
            this.setState({ displayPage: true });
            this.getProducts();
        } else {
            this.setState({ displayPage: false });
        }
    }
    getProducts = () => {
        API.getAllProducts()
            .then(res =>
                this.validateProductResponse(res.data.results)
            )
            .catch(err => console.log("Error getting products: " + err));
    }
    validateProductResponse(data) {
        if (data) {
            this.setState({ products: data });
        } else {
            this.setState({ products: ProductData.results });
        }
    }
    handleInputChange = () => event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = () => event => {
        event.preventDefault();
        this.setState({ formMessage: "" });
        if (this.state.description.trim() === "" ||
            this.state.email.trim() === "" ||
            this.state.subject.trim() === "" ||
            this.state.description.length < 1) {
            this.setState({
                formMessage: "Please complete all fields",
                errorClass: "form-titles fade-error-message",
            })
        } else {
            if (this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                const subject = this.state.subject.trim();
                const description = this.state.description.trim();
                const newSub = subject.replace("'", "");
                const newDesc = description.replace("'", "");
                const form = {
                    "email": this.state.email,
                    "subject": newSub,
                    "description": newDesc,
                    "product_id": this.state.productSelection,
                    "user_id": window.sessionStorage.id
                }
                API.createContactForm(form)
                    .then(
                        res => this.handleFormErrors(res.data)
                    )
                    .catch(err => console.log(err));
            } else {
                this.setState({
                    formMessage: "Please enter a valid email",
                    errorClass: "form-titles fade-error-message",
                })
            }
        }
    }
    handleFormErrors(response) {
        if (response === "success") {
            this.setState({
                email: window.sessionStorage.email,
                subject: "",
                description: "",
                productSelection: [],
                formMessage: "We have received your support ticket"
            });
            toast("One of our specialists will contact you soon!", {
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
        } else {
            toast("Please try again", {
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
    goToTwitter() {
        window.location.href = "https://twitter.com";
    }
    goToFacebook() {
        window.location.href = "https://facebook.com";
    }
    goToInstagram() {
        window.location.href = "https://instagram.com";
    }
    goToYouTube() {
        window.location.href = "https://youtube.com";
    }
    goToLogin() {
        window.location.href = "/login";
    }
    goToSignUp() {
        window.location.href = "/create_account";
    }

    render() {
        return (
            <div className="page-container">
                <Row no-gutters>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <h1 className="white q-top-pad text-shadow">
                            Contact us
                            </h1>
                    </Col>
                </Row>
                <Row no-gutters>
                    <Col size="md-2 sm-1 12" />
                    <Col size="md-8 sm-10 12">
                        <div className="form-complete-area">
                            {this.state.displayPage ? (
                                <Form
                                    handleInputChange={this.handleInputChange()}
                                    email={this.state.email}
                                    subject={this.state.subject}
                                    description={this.state.description}
                                    productSelection={this.state.productSelection}
                                    formMessage={this.state.formMessage}
                                    errorClass={this.state.errorClass}
                                    products={this.state.products}
                                    button={<Button
                                        action={this.handleFormSubmit()}
                                        buttonClass="explore"
                                        text="Submit"
                                    />}
                                />
                            ) : (
                                    <div className="no-user-contact">
                                        <div className="contact-message">
                                            <h3 className="purple">
                                                Please create an account or login to submit a support ticket
                                            </h3>
                                        </div>
                                        <div className="contact-login-signup contact-left">
                                            <Button
                                                action={this.goToLogin}
                                                buttonClass="explore"
                                                text="Login"
                                            />
                                        </div>
                                        <div className="contact-login-signup contact-right">
                                            <Button
                                                action={this.goToSignUp}
                                                buttonClass="explore"
                                                text="Create Account"
                                            />
                                        </div>
                                        <Waves />
                                    </div>
                                )}
                        </div>
                    </Col>
                    <Col size="md-2 sm-1 12" />
                </Row>
                <div className="social-media">
                    <Row no-gutters>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <h2 className="white f-top-pad">
                                Connect with us on social media
                            </h2>
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="md-12">
                            <Row no-gutters>
                                <Col size="3">
                                    <div className="center-social-links">
                                        <IconButton onClick={this.goToTwitter} aria-label="twitter">
                                            <TwitterIcon
                                                fontSize="large"
                                                className="white"
                                            />
                                        </IconButton>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div className="center-social-links">
                                        <IconButton onClick={this.goToFacebook} aria-label="facebook">
                                            <FacebookIcon
                                                fontSize="large"
                                                className="white"
                                            />
                                        </IconButton>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div className="center-social-links">
                                        <IconButton onClick={this.goToInstagram} aria-label="instagram">
                                            <InstagramIcon
                                                fontSize="large"
                                                className="white"
                                            />
                                        </IconButton>
                                    </div>
                                </Col>
                                <Col size="3">
                                    <div className="center-social-links">
                                        <IconButton onClick={this.goToYouTube} aria-label="youtube">
                                            <YouTubeIcon
                                                fontSize="large"
                                                className="white"
                                            />
                                        </IconButton>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="contact-page-fluff-img-section">
                    <img src="https://images.unsplash.com/photo-1562185000-12e4f02e2020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="call center" className="contact-fluff-img"></img>

                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="customer service" className="contact-fluff-img"></img>
                </div>
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
}

export default Contact;