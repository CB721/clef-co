import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Review from "../components/Review";
import "./Assets/style.css";

class Home extends Component {
    state = {

    }

    render() {
        return (
            <div >
                <Container fluid >
                    <Row>
                        <Col size="md-12">
                            <div className="home-bg">
                                <h1 className="white">
                                    Demo Company
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6">
                            <div className="home-item-one">
                                <h3 className="white">
                                    Product One
                                </h3>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="home-item-two">
                                <h3 className="white">
                                    Product Two
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-4" />
                        <Col size="md-4">
                            <h2 className="purple">
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
                    <div className="review-section">
                        <Row>
                            <Col size="md-4" />
                            <Col size="md-4">
                                <h2 className="expert-title purple">
                                    What the Experts are Saying
                            </h2>
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