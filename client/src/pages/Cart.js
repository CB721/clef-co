import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Col, Row } from "../components/Grid";
import Loading from "../components/Loading";
import Checkout from "../components/Checkout";
import API from "../utilities/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import "./Assets/style.css";


function Cart() {
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (window.sessionStorage.logged_in) {
        } else {
            alert("Please create an account before proceeding");
            window.location.href = "/create_account";
        }
    }, [cart[0]]);

    function updateItem(itemID, amount) {
        API.updateCartItem(cart[0].cart_id, itemID, amount)
            .then(res => handleCartUpdate(res.data))
            .catch(err => console.log(err));
    }
    function handleCartUpdate(data) {
        if (data.results.affectedRows > 0) {
            window.location.reload(true);
        }
    }
    function deleteItem(itemID) {
        if (cart[0].line_items.length > 1) {
            API.deleteItemFromCart(cart[0].cart_id, itemID)
                .then(window.location.reload(true))
                .catch(err => console.log(err));
        } else {
            toast("Your cart is empty", {
                className: css({
                    background: '#3E0768',
                    boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
                    borderRadius: '17px'
                }),
                bodyClassName: css({
                    fontSize: '20px',
                    color: 'white'
                }),
                progressClassName: css({
                    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,7,104,1) 80%)"
                })
            });
            deleteCart();
        }
    }
    function completeOrder() {
        const userID = parseInt(window.sessionStorage.id);
        const lineItems = JSON.stringify(cart[0].line_items);
        API.completeCart(cart[0].cart_id, userID, lineItems)
            .then(displayOrderConfirmation())
            .catch(err => console.log(err));
    }
    function displayOrderConfirmation() {
        toast("Order complete!", {
            className: css({
                background: '#3E0768',
                boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
                borderRadius: '17px'
            }),
            bodyClassName: css({
                fontSize: '20px',
                color: 'white'
            }),
            progressClassName: css({
                background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,7,104,1) 80%)"
            })
        });
        deleteCart();
    }
    function deleteCart() {
        API.deleteCart(cart[0].cart_id)
            .then()
            .catch(err => console.log(err));
    }

    return (
        <div className="page-container">
            <Row no-gutters>
                <Col size="md-2" />
                <Col size="md-8">
                    <div className="f-top-pad q-top-pad" />
                </Col>
                <Col size="md-2" />
            </Row>
            <Row no-gutters>
                <Col size="lg-3 md-2 sm-1" />
                <Col size="lg-6 md-8 sm-10 12">
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
                                    <Loading
                                        color="purple"
                                    />
                                </div>
                            )}
                    </div>
                </Col>
                <Col size="lg-3 md-2 sm-1" />
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
        </div>
    )
}

export default Cart;