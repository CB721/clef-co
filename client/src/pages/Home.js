import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import videoBG from "../pages/Assets/video/Digital_Grapes.mp4";
import Card from "../components/Card";
import Review from "../components/Review";
import API from "../utilities/api";
import "./Assets/style.css";

class Home extends Component {
    state = {
        products: [],
        productOne: [],
        productTwo: [],

    }
    componentDidMount() {
        const thisIsThis = this;
        this.getProducts()
            .then(function () {
                thisIsThis.displayRandomProducts()
            })
            .catch(err => console.log(err));
    }
    getProducts = function () {
        const thisIsThis = this;
        return new Promise(function (resolve, reject) {
            resolve(
                API.getAllProducts()
                    .then(res =>
                        thisIsThis.setState({ products: res.data.results })
                    )
                    .catch(err => console.log("Error getting products: " + err))
            )
        })
    }
    displayRandomProducts = () => {
        // product array length
        const productArrLen = this.state.products.length - 1;
        const randomOne = Math.floor(Math.random() * productArrLen) + 1;
        let randomTwo = Math.floor(Math.random() * productArrLen) + 1;
        if (randomOne === randomTwo) {
            randomTwo += 1;
        }
        const products = this.state.products;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === randomOne) {
                this.setState({ productOne: products[i] });
            }
            if (products[i].id === randomTwo) {
                this.setState({ productTwo: products[i] });
            }
        }
    }

    render() {
        return (
            <div >
                <Container fluid >
                    <Row>
                        <Col size="md-12">
                            <div>
                                <video className="video-background" loop autoPlay playsInline muted
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={videoBG}>
                                </video>
                                <h1 className="white q-top-pad center middle">
                                    Demo Company
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6">
                            <div className="home-item-one">
                                <img className="home-promo-img" src={this.state.productOne.image_link} alt={this.state.productOne.product_name}></img>
                                <h3 className="white f-top-pad center middle hover-title">
                                    {this.state.productOne.product_name}
                                </h3>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="home-item-two">
                                <img className="home-promo-img" src={this.state.productTwo.image_link} alt={this.state.productTwo.product_name}></img>
                                <h3 className="white f-top-pad center middle hover-title">
                                    {this.state.productTwo.product_name}
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-4" />
                        <Col size="md-4">
                            <h2 className="purple f-top-pad">
                                Top Products
                            </h2>
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
                        <Col size="md-12">
                            <h2 className="purple f-top-pad">
                                What the Experts are Saying
                            </h2>
                        </Col>
                    </Row>
                    <div className="review-section">
                        <Row>
                            <Col size="md-4" />
                            <Col size="md-4">

                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <Review
                                    reviewerImage="https://images.unsplash.com/photo-1520715246086-96c95638169d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80"
                                    reviewerName="Bruce Wayne"
                                    review="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                />
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                                <Review
                                    reviewerImage="https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1523&q=80"
                                    reviewerName="Tony Stark"
                                    review="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <Review
                                    reviewerImage="https://images.unsplash.com/photo-1525954322486-aa196091220f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                    reviewerName="Harry Potter"
                                    review="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                />
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                                <Review
                                    reviewerImage="https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                    reviewerName="Ava Duvernay"
                                    review="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;