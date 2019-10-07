import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Bundle from "../components/Bundle";
import "./Assets/style.css";

class Products extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <h1>
                                All Products
                            </h1>
                        </Col>
                        <Col size="md-6">
                            <p>
                                Browse our collection of state-of-the-art music equipment and software plugins.
                            </p>
                        </Col>
                    </Row>
                    <div className="current-highlighted-product-section">
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <h6>
                                    New and on Sale!
                                </h6>
                                <h3>
                                    Erzetich Headphone Amp
                                </h3>
                                <span>
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
                            <h3>
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
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-4">
                            <Bundle
                                bundleImage="https://www.macworld.co.uk/cmsdata/reviews/3673608/logic-pro-x-104-main2_thumb800.jpg"
                                bundleTitle="Logic Pro X Software Suite"
                                bundleDescription="Sed interdum et turpis sed dapibus. Nulla sed venenatis lacus. Nullam venenatis feugiat pellentesque. Maecenas justo lacus, semper sit amet eleifend ac, iaculis non enim. Suspendisse et molestie metus."
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Products;