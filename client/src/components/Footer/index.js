import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <footer className="footer navbar-fixed-bottom">
                        <p className="bottom">
                            Demo Company
                        </p>
                        <span>Copyright &copy; 2019 Clint Brodar</span>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer