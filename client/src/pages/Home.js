import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./Assets/style.css";

class Home extends Component {
    state = {

    }

    render() {
        return (
            <div className="home-bg">
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <div className="head-space" />
                            <div>
                                <h1>
                                    Demo Company
                                </h1>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </div>
        )
    }
}

export default Home;