import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Col, Row, Container } from "../components/Grid";
import "./Assets/style.css";

function Cart(){
    const cart = useSelector(state => state.cart);
    const [completeCart, setCompleteCart] = useState([]);

    useEffect(() => {
        createCart();
    })
    function createCart() {
        const uniqueCartItems = [];
        cart.forEach(item => {
            
            console.log(item.product_id)
        });
    }

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
                        <Col size="md-2" />
                        <Col size="md-8">

                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Cart;