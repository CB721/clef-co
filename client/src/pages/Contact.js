import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import Form from "../components/Form";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import API from "../utilities/api";
import "./Assets/style.css";

class Contact extends Component {
    state = {
        products: [],
        email: "",
        subject: "",
        description: "",
        productSelection: [],
        formMessage: "",
        errorClass: "",
    }
    componentDidMount() {
        this.getProducts();
    }
    getProducts = () => {
        API.getAllProducts()
            .then(res =>
                this.setState({ products: res.data.results })
            )
            .catch(err => console.log("Error getting products: " + err));
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
                console.log("success")
            } else {
                this.setState({
                    formMessage: "Please enter a valid email",
                    errorClass: "form-titles fade-error-message",
                })
            }

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
                                Contact us
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
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
                        </Col>
                    </Row>
                    <div className="social-media">
                        <Row>
                            <Col size="md-2" />
                            <Col size="md-8">
                                <h2 className="white f-top-pad">
                                    Connect with us on social media
                            </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-2">
                                        <IconButton onClick={this.goToTwitter} aria-label="twitter">
                                            <TwitterIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-1" />
                                    <Col size="md-2">
                                        <IconButton onClick={this.goToFacebook} aria-label="facebook">
                                            <FacebookIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-1" />
                                    <Col size="md-2">
                                        <IconButton onClick={this.goToInstagram} aria-label="instagram">
                                            <InstagramIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-1" />
                                    <Col size="md-2">
                                        <IconButton onClick={this.goToYouTube} aria-label="youtube">
                                            <YouTubeIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col size="md-6">
                            <img src="https://images.unsplash.com/photo-1562185000-12e4f02e2020?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="call center"></img>
                        </Col>
                        <Col size="md-6">
                            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="customer service"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;