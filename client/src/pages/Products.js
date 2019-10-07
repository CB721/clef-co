import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import Bundle from "../components/Bundle";
import Card from "../components/Card";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./Assets/style.css";

class Products extends Component {
    state = {

    }
    goToSupport() {
        window.location.href = "/contact";
    }
    goToTutorials() {
        window.location.href = "/tutorials";
    }
    goToCart() {
        window.location.href = "/cart";
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <h1 className="purple">
                                All Products
                            </h1>
                        </Col>
                        <Col size="md-6">
                            <p className="purple">
                                Browse our collection of state-of-the-art music equipment and software plugins.
                            </p>
                        </Col>
                    </Row>
                    <div className="current-highlighted-product-section">
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <h6 className="white">
                                    New and on Sale!
                                </h6>
                                <h3 className="white">
                                    Erzetich Headphone Amp
                                </h3>
                                <span className="white">
                                    Integer sollicitudin turpis ligula, eget convallis metus tincidunt a. Morbi ut turpis dapibus, volutpat lectus et, consectetur lectus. Sed maximus dui quis odio blandit ultrices. Nulla imperdiet malesuada ante, nec sollicitudin metus molestie vitae. Proin sed imperdiet dui, in aliquam purus.
                                </span>
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-1">
                                        <Button
                                            buttonClass="explore"
                                            text="Explore"
                                        />
                                    </Col>
                                    <Col size="md-4" />
                                    <Col size="md-1">
                                        <Button
                                            buttonClass="shop-now"
                                            text="Shop Now"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col size="md-7">
                                <a href="#">
                                    <img src="https://images.unsplash.com/photo-1560917473-a92132ff01fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2025&q=80" alt="Erzetich Headphone Amp" ></img>
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col size="md-12">
                            <h3 className="purple">
                                Purchase our product bundles
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <Bundle
                                bundleImage="https://images.unsplash.com/photo-1486837007094-f97925b97013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                bundleTitle="Demo Company Equalizer Collection"
                                bundleDescription="Sed interdum et turpis sed dapibus. Nulla sed venenatis lacus. Nullam venenatis feugiat pellentesque. Maecenas justo lacus, semper sit amet eleifend ac, iaculis non enim. Suspendisse et molestie metus."
                                button={<Button
                                    buttonClass="shop-now"
                                    text="Learn More"
                                />}
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-4">
                            <Bundle
                                bundleImage="https://www.macworld.co.uk/cmsdata/reviews/3673608/logic-pro-x-104-main2_thumb800.jpg"
                                bundleTitle="Logic Pro X Software Suite"
                                bundleDescription="Sed interdum et turpis sed dapibus. Nulla sed venenatis lacus. Nullam venenatis feugiat pellentesque. Maecenas justo lacus, semper sit amet eleifend ac, iaculis non enim. Suspendisse et molestie metus."
                                button={<Button
                                    buttonClass="shop-now"
                                    text="Learn More"
                                />}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="secondary-highlighted-product white">
                                <Row>
                                    <Col size="md-6">
                                        <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Demo Company Microphone"></img>
                                    </Col>
                                    <Col size="md-6">
                                        <h3 className="so-bold">
                                            Demo Company Microphone
                                        </h3>
                                        <h3>
                                            Magical microphone to capture the future of sound
                                        </h3>
                                        <h6>
                                            Fusce ac turpis dignissim, hendrerit quam ac, auctor metus. Pellentesque ultricies odio non ligula venenatis, pretium ultricies neque egestas. Morbi tempus, enim nec bibendum condimentum, ante mi iaculis nisl, sit amet ornare justo massa a tellus. Sed vel aliquam mauris. Sed pharetra accumsan odio eu sollicitudin.
                                        </h6>
                                        <Row>
                                            <Col size="md-1" />
                                            <Col size="md-1">
                                                <Button
                                                    buttonClass="explore"
                                                    text="Explore"
                                                />
                                            </Col>
                                            <Col size="md-6" />
                                            <Col size="md-1">
                                                <Button
                                                    buttonClass="shop-now"
                                                    text="Shop Now"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <h3 className="purple">
                                All Products
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                imageTitle="Headphones"
                                cardTitle="Headphones"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1492879291357-620e858bd26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Microphone"
                                cardTitle="Microphone"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Guitar Amp"
                                cardTitle="Guitar Amp"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                imageTitle="Headphones"
                                cardTitle="Headphones"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1492879291357-620e858bd26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Microphone"
                                cardTitle="Microphone"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Guitar Amp"
                                cardTitle="Guitar Amp"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1491927570842-0261e477d937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                imageTitle="Headphones"
                                cardTitle="Headphones"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1492879291357-620e858bd26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Microphone"
                                cardTitle="Microphone"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-2">
                            <Card
                                image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                imageTitle="Guitar Amp"
                                cardTitle="Guitar Amp"
                                cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                            />
                        </Col>
                    </Row>
                    <div className="company-section">
                        <Row>
                            <Col size="md-12">
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-2">
                                        <h3 className="white">
                                            Contact Us
                                        </h3>
                                        <h6 className="white">
                                            Our award-winning support team is available 24/7 to help with your questions
                                        </h6>
                                        <IconButton onClick={this.goToSupport} aria-label="support">
                                            <ContactSupportOutlinedIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-2">
                                        <h3 className="white">
                                            Tutorials
                                        </h3>
                                        <h6 className="white">
                                            Watch videos made by our team members walking through a variety of our most popular products
                                        </h6>
                                        <IconButton onClick={this.goToTutorials} aria-label="support">
                                            <SubscriptionsOutlinedIcon
                                                fontSize="large"
                                            />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-2">
                                        <h3 className="white">
                                            Check Cart
                                        </h3>
                                        <h6 className="white">
                                            View and purchase your currently selected products
                                        </h6>
                                        <IconButton onClick={this.goToCart} aria-label="Go to cart">
                                            <ShoppingCartOutlinedIcon />
                                        </IconButton>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Products;