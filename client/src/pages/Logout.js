import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./Assets/style.css";

class Logout extends Component {
    state = {
        counter: 5,
    }
    componentDidMount() {
        this.goHome();
    }
    goHome() {
        const thisIsThis = this;
        setInterval(function() {
            let countdown = thisIsThis.state.counter;
            thisIsThis.setState({ counter: countdown - 1});
        }, 1000);
        // confirm user has been logged out
        setTimeout(function () {
            window.location.href = "/";
        }, 5000);
    }
    render() {
        return (
            <div className="page-container">
                {/* <Container fluid> */}
                    <Row no-gutters>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <h1 className="white q-top-pad text-shadow">
                                Logout successful
                            </h1>
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="md-2" />
                        <Col size="md-8">
                                <h1 className="white f-top-pad bottom-pad-f text-shadow">
                                    Taking you back home in {this.state.counter} seconds
                                </h1>
                        </Col>
                    </Row>
                {/* </Container> */}
                </div>
        )
    }
}

export default Logout;