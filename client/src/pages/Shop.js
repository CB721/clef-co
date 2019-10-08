import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Product from "../components/Product";
import "./Assets/style.css";

class Shop extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Container fluid>
                    <div className="company-section">
                        <Row>
                            <Col size="md-6">
                                <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80" alt="turntable"></img>
                            </Col>
                            <Col size="md-6">
                                <h1 className="white q-top-pad">
                                    Current special on our product!
                            </h1>
                                <h6 className="white">
                                    Morbi tincidunt risus sit amet varius tempus. Nullam ac felis augue. Aliquam euismod lobortis metus, sit amet aliquam diam pulvinar vel. Quisque viverra consequat mi.
                            </h6>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col size="md-2">
                            <Menu

                            />
                        </Col>
                        <Col size="md-10">
                            <Row>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
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
}

export default Shop;