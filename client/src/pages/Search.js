import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Result from "../components/Result";
import Divider from '@material-ui/core/Divider';
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
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <img src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1616&q=80" alt="Search" className="add-shadow" id="search-top-image"></img>
                        </Col>
                        <Col size="md-12">
                            <h2 className="f-top-pad padding-bottom">
                                Results
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Result
                                productName="Guitar"
                                productDescription="Crafted from the finest wood, the finest guitar ever made."
                                productLink="/"
                                goToProduct={this.goToProduct}
                            />
                            <Divider />
                            <Result
                                productName="Guitar"
                                productDescription="Crafted from the finest wood, the finest guitar ever made."
                                productLink="/"
                                goToProduct={this.goToProduct}
                            />
                            <Divider />
                            <Result
                                productName="Guitar"
                                productDescription="Crafted from the finest wood, the finest guitar ever made."
                                productLink="/"
                                goToProduct={this.goToProduct}
                            />
                            <Divider />
                            <Result
                                productName="Guitar"
                                productDescription="Crafted from the finest wood, the finest guitar ever made."
                                productLink="/"
                                goToProduct={this.goToProduct}
                            />
                            <Divider />
                            <Result
                                productName="Guitar"
                                productDescription="Crafted from the finest wood, the finest guitar ever made."
                                productLink="/"
                                goToProduct={this.goToProduct}
                            />
                            <Divider />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search;