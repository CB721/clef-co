import React from "react";
import "./style.css";

function Order(props) {
    return (
        <div className="user-orders">
            <div className="order-summary">
                <div className="order-details">
                    <div className="order-column detail-date">
                        <span className="white order-column-header">
                            Order placed
                        </span>
                        <span className="white">
                            {props.date}
                        </span>
                    </div>
                    <div className="order-column detail-date">
                        <span className="white order-column-header">
                            Total
                        </span>
                        <span className="white">
                            ${props.total}
                        </span>
                    </div>
                    <div className="order-column detail-date">
                        <span className="white order-column-header">
                            Ship To
                        </span>
                        <span className="white">
                            {props.name}
                        </span>
                    </div>
                </div>
                <div className="order-number">
                    <div className="order-column detail-date">
                        <span className="white order-column-header">
                            Order Number
                        </span>
                        <span className="white">
                            {props.number}
                        </span>
                    </div>
                </div>
            </div>
            {/* map out items */}
            <div className="order-items">
                <div className="order-details">
                    <div className="order-column detail-date">
                        <span className="white order-column-header">
                            Delivered on October 25, 2019
                        </span>
                    </div>
                </div>
                <div className="order-item-details">
                    <div className="item-details-left">
                        <div className="item-row">
                            <div className="order-item-img-column">
                                <div className="item-view-left-column-inner">
                                    <a href="/shop/product/5">
                                        <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="order item" className="order-item-img" />
                                    </a>
                                </div>
                            </div>
                            <div className="item-details-section">
                                <div className="item-row ">
                                    <span className="white">
                                        Magic Mic
                                    </span>
                                </div>
                                <div className="item-row ">
                                    <span className="white">
                                        $79.99
                                    </span>
                                </div>
                                <div className="item-row ">
                                    <button className="order-item-button ">
                                        Buy it again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-number">
                    <div className="item-row">
                        <div className="button-stack">
                            <div className="item-row">
                                <button className="order-item-button ">
                                    Get product support
                            </button>
                            </div>
                            <div className="item-row">
                                <button className="order-item-button ">
                                    Write a review
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;