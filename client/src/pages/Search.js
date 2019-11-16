import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Result from "../components/Result";
import Fade from 'react-reveal/Fade';
import "./Assets/style.css";

class Search extends Component {
    state = {

    }
    goToProduct = (link) => (event) => {
        event.preventDefault();
        window.location.href = link;
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
                            <img src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1616&q=80" alt="Search" className="add-shadow rounded-corners" id="search-top-image"></img>
                        </Col>
                        <Col size="md-12">
                            <h2 className="white f-top-pad padding-bottom">
                                Results
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Fade bottom>
                                <Result
                                    productName="Guitar"
                                    productDescription="Crafted from the finest wood, the finest guitar ever made."
                                    productLink="/"
                                    goToProduct={this.goToProduct}
                                />
                            </Fade>
                            <Fade bottom>
                                <Result
                                    productName="Guitar"
                                    productDescription="Crafted from the finest wood, the finest guitar ever made."
                                    productLink="/"
                                    goToProduct={this.goToProduct}
                                />
                            </Fade>
                            <Fade bottom>
                                <Result
                                    productName="Guitar"
                                    productDescription="Crafted from the finest wood, the finest guitar ever made."
                                    productLink="/"
                                    goToProduct={this.goToProduct}
                                />
                            </Fade>
                            <Fade bottom>
                                <Result
                                    productName="Guitar"
                                    productDescription="Crafted from the finest wood, the finest guitar ever made."
                                    productLink="/"
                                    goToProduct={this.goToProduct}
                                />
                            </Fade>
                            <Fade bottom>
                                <Result
                                    productName="Guitar"
                                    productDescription="Crafted from the finest wood, the finest guitar ever made."
                                    productLink="/"
                                    goToProduct={this.goToProduct}
                                />
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search;