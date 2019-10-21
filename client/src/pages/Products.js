import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import Bundle from "../components/Bundle";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import API from "../utilities/api";
import "./Assets/style.css";

class Products extends Component {
    state = {
        products: [],
    }
    componentDidMount() {
        this.getProducts();
    }
    goToSupport() {
        window.location.href = "/contact";
    }
    goToTutorials() {
        window.location.href = "/tutorials";
    }
    goToCart() {
        window.location.href = "/cart";
    }
    goToShop() {
        window.location.href = "/shop";
    }
    getProducts = () => {
        API.getAllProducts()
            .then(res =>
                this.setState({ products: res.data.results })
            )
            .catch(err => console.log("Error getting products: " + err));
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <div className="t-top-pad">
                        <Row>
                            <Col size="md-12">
                                <div className="purple-background add-shadow">
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
                            <h2 className="white center-text black-background">
                                Newest arrival!
                            </h2>
                        </Col>
                        <Col size="md-12">
                            <div className="current-highlighted-product-section">
                                {/* replace with most recently added product when configured */}
                                {this.state.products.length > 0 ? (
                                    <Row>
                                        <Col size="md-4">
                                            <Row>
                                                <Col size="md-12">
                                                    <h2 className="white t-top-pad">
                                                        {this.state.products[10].product_name}
                                                    </h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-12">
                                                    <span className="white f-top-pad">
                                                        {this.state.products[10].product_description.split(".", 1) + "."}
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
                                                                />
                                                            </Col>
                                                            <Col size="md-4" />
                                                            <Col size="md-1">
                                                                <Button
                                                                    buttonClass="shop-now"
                                                                    text="Shop Now"
                                                                    action={this.goToShop}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col size="md-8">
                                            <a href="/products">
                                                <img src={this.state.products[10].image_link} alt={this.state.products[10].product_name} className="current-promo-image"></img>
                                            </a>
                                        </Col>
                                    </Row>
                                ) : (<div />)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <h1 className="purple f-top-pad padding-bottom">
                                Purchase our product bundles
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <Bundle
                                bundleImage="https://images.unsplash.com/photo-1486837007094-f97925b97013?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                bundleTitle="Demo Company Equalizer Collection"
                                bundleDescription="Sed interdum et turpis sed dapibus. Nulla sed venenatis lacus. Nullam venenatis feugiat pellentesque. Maecenas justo lacus, semper sit amet eleifend ac, iaculis non enim. Suspendisse et molestie metus."
                                button={<Button
                                    buttonClass="shop-now"
                                    text="Learn More"
                                />}
                            />
                        </Col>
                        <Col size="md-2" />
                        <Col size="md-4">
                            <Bundle
                                bundleImage="https://www.macworld.co.uk/cmsdata/reviews/3673608/logic-pro-x-104-main2_thumb800.jpg"
                                bundleTitle="Logic Pro X Software Suite"
                                bundleDescription="Sed interdum et turpis sed dapibus. Nulla sed venenatis lacus. Nullam venenatis feugiat pellentesque. Maecenas justo lacus, semper sit amet eleifend ac, iaculis non enim. Suspendisse et molestie metus."
                                button={<Button
                                    buttonClass="shop-now"
                                    text="Learn More"
                                />}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {this.state.products.length > 0 ? (
                                <div className="secondary-highlighted-product white">
                                    <Row>
                                        <Col size="md-6">
                                            <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Demo Company Microphone" className="current-promo-image"></img>
                                        </Col>
                                        <Col size="md-6">
                                            <Row>
                                                <Col size="md-12">
                                                    <h1 className="so-bold t-top-pad">
                                                        {this.state.products[6].product_name}
                                                    </h1>
                                                    <h2 className="f-top-pad center-text">
                                                        {this.state.products[6].product_description.split(".", 1)}
                                                    </h2>
                                                </Col>
                                                <Col size="md-12">
                                                    <span className="f-top-pad">
                                                        {this.state.products[6].product_description.slice(59, 650) + "..."}
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
                                                                />
                                                            </Col>
                                                            <Col size="md-6" />
                                                            <Col size="md-1">
                                                                <Button
                                                                    buttonClass="shop-now"
                                                                    text="Shop Now"
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
                                                <div onClick={this.goToSupport}>
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
                                                                <IconButton onClick={this.goToSupport} aria-label="support">
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
                                                <div onClick={this.goToTutorials}>
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
                                                                <IconButton onClick={this.goToTutorials} aria-label="support">
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
                                                <div onClick={this.goToCart}>
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
                                                                <IconButton onClick={this.goToCart} aria-label="Go to cart">
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
            </div>
        )
    }
}

export default Products;