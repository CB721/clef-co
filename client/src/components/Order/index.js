import React, { useEffect, useState } from "react";
import { Row, Col } from "../Grid";
import API from "../../utilities/api";
import "./style.css";

function Order(props) {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [total, setTotal] = useState(0);

    function goToSupport() {
        window.location.href = "/contact";
    }
    function getProduct(quantity, id) {
        API.getProductById(id)
            .then(res =>
                getTotal(res.data.results[0], quantity)
            )
            .catch(err => console.log(err));
    }
    function getTotal(item, amount) {
        setProduct(product => [...product, item]);
        setQuantity(quantity => [...quantity, amount]);
        const cost = item.price * amount;
        setTotal(total => total + cost);
    }
    useEffect(() => {
        props.lineItems.forEach(ele => {
            getProduct(ele.quantity, ele.product_id)
        });
    }, [props.lineItems]);
    function goToProductPage(event, id) {
        event.preventDefault();
        window.location.href = "/shop/product/" + id;
    }
    return (
        <div className="user-orders">
            <div className="order-summary">
                <Row no-gutters>
                    <Col size="md-12">
                        <Row no-gutters>
                            <Col size="lg-3 sm-6 12">
                                <span className="white order-column-header">
                                    Order placed
                            </span>
                                <span className="white">
                                    {props.date}
                                </span>
                            </Col>
                            <Col size="lg-3 sm-6 12">
                                <span className="white order-column-header">
                                    Total
                            </span>
                                <span className="white">
                                    ${total}
                                </span>
                            </Col>
                            <Col size="lg-3 sm-6 12">
                                <span className="white order-column-header">
                                    Ship To
                            </span>
                                <span className="white">
                                    {props.name}
                                </span>
                            </Col>
                            <Col size="lg-3 sm-6 12">
                                <span className="white order-column-header">
                                    Order Number
                            </span>
                                <span className="white">
                                    {props.number}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            {product.map((item, index) => (
                <div className="order-items" key={item.id}>
                    <Row no-gutters>
                        <Col size="md-12">
                            <Row no-gutters>
                                <Col size="lg-3 sm-4 12">
                                    <Row no-gutters>
                                        <Col size="lg-12">
                                            <div className="order-container">
                                                <a href={"/shop/product/" + item.id}>
                                                    <img src={item.image_link} alt={item.product_name} className="order-item-img order-column-header" />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row no-gutters>
                                        <Col size="lg-12">
                                            <div className="order-container">
                                                <button className="order-item-button order-column-header" onClick={(event) => goToProductPage(event, item.id)}>
                                                    Buy it again
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size="lg-6 sm-4 12">
                                    <Row no-gutters>
                                        <Col size="lg-12">
                                            <span className="white order-column-header">
                                                {item.product_name}
                                            </span>
                                        </Col>
                                        <Col size="lg-12">
                                            <span className="white order-column-header">
                                                ${item.price + " X " + quantity[index]}
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size="lg-3 sm-4 12">
                                    <Row no-gutters>
                                        <Col size="lg-12">
                                            <div className="order-container">
                                                <button className="order-item-button order-column-header" onClick={goToSupport}>
                                                    Get product support
                                                </button>
                                            </div>
                                        </Col>
                                        <Col size="lg-12">
                                            <div className="order-container">
                                                <button className="order-item-button order-column-header" onClick={(event) => goToProductPage(event, item.id)}>
                                                    Write a review
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    )
}

export default Order;