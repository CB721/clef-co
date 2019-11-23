import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Col, Row, Container } from "../components/Grid";
import Checkout from "../components/Checkout";
import API from "../utilities/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Assets/style.css";


function Cart() {
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (window.sessionStorage.logged_in) {
        } else {
            alert("Please create an account before proceeding");
            window.location.href = "/create_account";
        }
    }, [cart]);

    function updateItem(itemID, amount) {
        API.updateCartItem(cart[0].cart_id, itemID, amount)
            .then()
            .catch(err => console.log(err));

    }
    function deleteItem(itemID) {
        if (cart[0].line_items.length > 1) {
            API.deleteItemFromCart(cart[0].cart_id, itemID)
                .then(window.location.reload(true))
                .catch(err => console.log(err));
        } else {
            toast("Your cart is empty");
            deleteCart();
        }
    }
    function completeOrder() {
        API.completeCart(cart[0].cart_id)
            .then(displayOrderConfirmation())
            .catch(err => console.log(err));
    }
    function displayOrderConfirmation() {
        toast("Order complete!");
        deleteCart();
    }
    function deleteCart() {
        API.deleteCart(cart[0].cart_id)
            .then()
            .catch(err => console.log(err));
    }

    return (
        <div className="page-container">
            {/* <Container fluid> */}
            <Row no-gutters>
                <Col size="md-2" />
                <Col size="md-8">
                    <div className="f-top-pad q-top-pad">

                    </div>
                </Col>
                <Col size="md-2" />
            </Row>
            <Row no-gutters>
                <Col size="md-3" />
                <Col size="md-6">
                    <div className="cart-bg add-shadow">
                        {cart.length >= 1 ? (
                            <Checkout
                                key={cart[0].cart_id}
                                id={cart[0].cart_id}
                                number={cart[0].cart_id}
                                lineItems={cart[0].line_items}
                                updateItem={updateItem}
                                deleteItem={deleteItem}
                                completeOrder={completeOrder}
                            />
                        ) : (
                                <div className="no-cart-area">
                                    <h1 className="purple">
                                        Your Cart Is Empty
                                        </h1>
                                    {/* instruments unattended animation */}
                                </div>
                            )}
                    </div>
                </Col>
                <Col size="md-3" />
            </Row>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            {/* </Container> */}
        </div>
    )
}



export default Cart;