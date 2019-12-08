import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Col, Row } from '../Grid';
import API from '../../utilities/api';
import Product from '../Product';
import Button from '../Button';
import Slide from 'react-reveal/Slide';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import "./style.css";

function ViewedProducts() {
    const [products, setProducts] = useState([]);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        if (window.sessionStorage.logged_in) {
            API.getAllViewedProductsForUser(window.sessionStorage.id)
                .then(res =>
                    validateProducts(res.data.results)
                )
                .catch(err => console.log(err));
        }
    }, []);
    function validateProducts(data) {
        if (data.length > 2) {
            let i = 0;
            while (i < 3) {
                setProducts(products => [...products, data[i]]);
                i += 1;
            }
        }
    }
    function goToProductPage(event, id) {
        event.preventDefault();
        window.location.href = "/shop/product/" + id;
    }
    function addToCart(event, id, productName) {
        event.preventDefault();
        if (cart.length > 0) {
            const checkCart = cart.findIndex(item => item.product_id === id);
            if (checkCart >= 0) {
                toast("Item already added to cart", {
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
            } else {
                API.addItemToCart(cart.id, id, 1)
                    .then(res =>
                        handleCartAddition(res.data.results, productName)
                    )
                    .catch(err => console.log(err));
            }
        } else {
            API.createCart(window.sessionStorage.id, id, 1)
                .then(res =>
                    handleCartAddition(res.data.results, productName)
                )
                .catch(err => console.log(err));
        }
    }
    function handleCartAddition(data, product) {
        toast(product + " has been added to your cart!", {
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
    }
    return (
        <Row>
            {products.length > 2 ? (
                <Col size="12">
                    <Row>
                        <Col size="12">
                            <div className="product-header f-top-pad white">
                                <p>
                                    Last Viewed Products
                                </p>
                            </div>
                        </Col>
                        <Col size="12">
                            {products.length > 2 ? (
                                <Row no-gutters>
                                    {products.map(product => (
                                        <Col size="sm-4" key={product.product_id}>
                                            <Slide bottom >
                                                <Product
                                                    action={(event) => goToProductPage(event, product.product_id)}
                                                    image={product.image_link}
                                                    imageTitle={product.product_name}
                                                    cardTitle={product.product_name}
                                                    cardDescription={product.product_description.slice(0, 65) + "..."}
                                                    price={product.price}
                                                    button={<Button
                                                        key={product.product_id}
                                                        buttonClass="explore"
                                                        text="Add to cart"
                                                        action={(event) => addToCart(event, product.product_id, product.product_name)}
                                                    />}
                                                />
                                            </Slide>
                                        </Col>
                                    ))}
                                </Row>
                            ) : (<div />)}
                        </Col>
                    </Row>
                </Col>
            ) : (<div />)}
        </Row>
    )
}

export default ViewedProducts;