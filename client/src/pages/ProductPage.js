import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Flip from 'react-reveal/Flip';
import Review from "../components/Review";
import Input from '@material-ui/core/Input';
import "./Assets/style.css";

class ProductPage extends Component {
    src = 'https://images.unsplash.com/photo-1572049286973-0101a47078c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80';
    state = {
        backgroundImage: `url(${this.src})`,
        backgroundPosition: '0% 0%',
        borderRadius: "4px",
    }
    addToCart = (id) => (event) => {
        event.preventDefault();
        console.log("Product added to cart");
    }
    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        this.setState({ backgroundPosition: `${x}% ${y}%` });
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
                        <Col size="md-12">
                            <div className="product-header t-top-pad white">
                                <p>
                                    Here is the product name
                                </p>
                            </div>
                        </Col>
                        <Col size="md-12">
                            <Row>
                                <Col size="md-1" />
                                <Col size="md-6">
                                    <figure
                                        className="product-image-zoom "
                                        onMouseMove={this.handleMouseMove}
                                        style={this.state}
                                    >
                                        <img
                                            src={this.src}
                                            alt="product-name"
                                            className="product-image-page"

                                        />
                                    </figure>
                                </Col>
                                <Col size="md-4">
                                    <Row>
                                        <Col size="md-12">
                                            <div className="product-shipping white f-top-pad">
                                                <p className="price-text white">
                                                    $499.99
                                                </p>
                                                <p>
                                                    Orders of $99.99 or more ship free!
                                                </p>
                                                <p>
                                                    In stock!
                                                </p>
                                                <form>
                                                    <Input type="number" placeholder="Quantity" fullWidth={true}/>
                                                </form>
                                            </div>
                                        </Col>
                                        <Col size="md-12">
                                            <div className="product-add-cart f-top-pad">
                                                <button className="cart-add-button white" onClick={this.addToCart()}>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <div className="product-description-page white t-top-pad">
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </Col>
                        <Col size="md-2" />
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="review-section">
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1520715246086-96c95638169d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80"
                                                reviewerName="Bruce Wayne"
                                                review="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                                bio="https://en.wikipedia.org/wiki/Batman"
                                            />
                                        </Flip>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1523&q=80"
                                                reviewerName="Tony Stark"
                                                review="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                                bio="https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"
                                            />
                                        </Flip>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductPage;