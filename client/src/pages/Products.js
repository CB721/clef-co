import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { Col, Row, Container } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import Bundle from "../components/Bundle";
import Bundles from "./Assets/Data/bundles.json";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import API from "../utilities/api";
import "./Assets/style.css";

function Products() {
    const products = useSelector(state => state.products);
    console.log(Bundles);
    function goToSupport() {
        window.location.href = "/contact";
    }
    function goToTutorials() {
        window.location.href = "/tutorials";
    }
    function goToCart() {
        window.location.href = "/cart";
    }
    function goToShop() {
        window.location.href = "/shop";
    }
    function goToProductPage(link) {
        window.location.href = "/shop/product/" + link;
    }

    return (
        <Container fluid>
            <div className="t-top-pad">
                <Row>
                    <Col size="md-12">
                        <div className="purple-background add-shadow rounded-corners">
                            <Row>
                                <Col size="md-6">
                                    <h1 className="white">
                                        Products
                                            </h1>
                                </Col>
                                <Col size="md-6">
                                    <p className="white">
                                        Browse our collection of state-of-the-art music equipment and software plugins.
                                            </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col size="md-12">
                    <h2 className="white center-text black-background rounded-corners">
                        Newest arrival!
                            </h2>
                </Col>
                <Col size="md-12">
                    <div className="current-highlighted-product-section add-shadow rounded-corners">
                        {/* replace with most recently added product when configured */}
                        {products.length > 0 ? (
                            <Row>
                                <Col size="md-4">
                                    <Row>
                                        <Col size="md-12">
                                            <h2 className="white t-top-pad">
                                                {products[10].product_name}
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-12">
                                            <span className="white f-top-pad">
                                                {products[10].product_description.split(".", 1) + "."}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-12">
                                            <div className="t-top-pad">
                                                <Row>
                                                    <Col size="md-1" />
                                                    <Col size="md-1">
                                                        <Button
                                                            buttonClass="explore"
                                                            text="Explore"
                                                        // action={goToProductPage(products[10].id)}
                                                        />
                                                    </Col>
                                                    <Col size="md-4" />
                                                    <Col size="md-1">
                                                        <Button
                                                            buttonClass="shop-now"
                                                            text="Shop Now"
                                                            action={goToShop}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size="md-8">
                                    <a href="/products">
                                        <img src={products[10].image_link} alt={products[10].product_name} className="current-promo-image"></img>
                                    </a>
                                </Col>
                            </Row>
                        ) : (<div />)}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <Pulse>
                        <h1 className="white f-top-pad padding-bottom text-shadow">
                            Purchase our product bundles
                                </h1>
                    </Pulse>
                </Col>
            </Row>
            <Row>
                <Col size="md-1" />
                <Col size="md-4">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[0].images}
                            bundleTitle={Bundles[0].name}
                            bundleDescription={Bundles[0].description}
                            slideTime={Bundles[0].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-2" />
                <Col size="md-4">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[1].images}
                            bundleTitle={Bundles[1].name}
                            bundleDescription={Bundles[1].description}
                            slideTime={Bundles[1].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-1" />
                <Col size="md-1" />
                <Col size="md-4">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[2].images}
                            bundleTitle={Bundles[2].name}
                            bundleDescription={Bundles[2].description}
                            slideTime={Bundles[2].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-2" />
                <Col size="md-4">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[3].images}
                            bundleTitle={Bundles[3].name}
                            bundleDescription={Bundles[3].description}
                            slideTime={Bundles[3].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                            />}
                        />
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    {products.length > 0 ? (
                        <div className="secondary-highlighted-product white rounded-corners">
                            <Row>
                                <Col size="md-6">
                                    <img src={products[6].image_link} alt="Demo Company Microphone" className="current-promo-image"></img>
                                </Col>
                                <Col size="md-6">
                                    <Row>
                                        <Col size="md-12">
                                            <h1 className="so-bold t-top-pad">
                                                {products[6].product_name}
                                            </h1>
                                            <h2 className="f-top-pad center-text">
                                                {products[6].product_description.split(".", 1)}
                                            </h2>
                                        </Col>
                                        <Col size="md-12">
                                            <span className="f-top-pad">
                                                {products[6].product_description.slice(59, 650) + "..."}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="f-top-pad">
                                            <Col size="md-12">
                                                <Row>
                                                    <Col size="md-1" />
                                                    <Col size="md-1">
                                                        <Button
                                                            buttonClass="explore"
                                                            text="Explore"
                                                        // action={goToProductPage(products[6].id)}
                                                        />
                                                    </Col>
                                                    <Col size="md-6" />
                                                    <Col size="md-1">
                                                        <Button
                                                            buttonClass="shop-now"
                                                            text="Shop Now"
                                                            action={goToShop}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <div className="company-section">
                <Row>
                    <Col size="md-12">
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-2">
                                <Row>
                                    <Col size="md-12">
                                        <div onClick={goToSupport}>
                                            <Row>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad section-headers center-text">
                                                        Contact Us
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        Our award-winning support team is available 24/7 to help with your questions
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <div className="center-icons">
                                                        <IconButton onClick={goToSupport} aria-label="support">
                                                            <ContactSupportOutlinedIcon
                                                                fontSize="large"
                                                            />
                                                        </IconButton>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-2">
                                <Row>
                                    <Col size="md-12">
                                        <div onClick={goToTutorials}>
                                            <Row>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad">
                                                        Tutorials
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        Watch videos made by our team members walking through a variety of our most popular products
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <div className="center-icons">
                                                        <IconButton onClick={goToTutorials} aria-label="support">
                                                            <SubscriptionsOutlinedIcon
                                                                fontSize="large"
                                                            />
                                                        </IconButton>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-2">
                                <Row>
                                    <Col size="md-12">
                                        <div onClick={goToCart}>
                                            <Row>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad">
                                                        Check Cart
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        View and purchase your currently selected products
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <div className="center-icons">
                                                        <IconButton onClick={goToCart} aria-label="Go to cart">
                                                            <ShoppingCartOutlinedIcon />
                                                        </IconButton>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Products;