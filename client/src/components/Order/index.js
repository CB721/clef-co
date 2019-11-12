import React, { useEffect, useState } from "react";
import API from "../../utilities/api";
import "./style.css";

function Order(props) {
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [total, setTotal] = useState(0);

    function goToSupport() {
        window.location.href = "/contact"
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
                            ${total}
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
            {product.map((item, index) => (
                <div
                    className="order-items"
                    key={item.id}
                >
                    <div className="order-details">
                        <div className="order-column detail-date">
                            <span className="white order-column-header" />
                        </div>
                    </div>
                    <div className="order-item-details">
                        <div className="item-details-left">
                            <div className="item-row">
                                <div className="order-item-img-column">
                                    <div className="item-view-left-column-inner">
                                        <a href={"/shop/product/" + item.id}>
                                            <img src={item.image_link} alt={item.product_name} className="order-item-img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item-details-section">
                                    <div className="item-row ">
                                        <span className="white">
                                            {item.product_name}
                                        </span>
                                    </div>
                                    <div className="item-row ">
                                        <span className="white">
                                            ${item.price + " X " + quantity[index]}
                                        </span>
                                    </div>
                                    <div className="item-row ">
                                        <button className="order-item-button">
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
                                    <button className="order-item-button" onClick={goToSupport}>
                                        Get product support
                                    </button>
                                </div>
                                <div className="item-row">
                                    <button className="order-item-button">
                                        Write a review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Order;