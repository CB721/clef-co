import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Product from "../components/Product";
import API from "../utilities/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Assets/style.css";

class Shop extends Component {
    state = {
        featuredMenu: "menu-collapse white",
        instrumentsMenu: "menu-collapse white",
        bundlesMenu: "menu-collapse white",
        typeMenu: "menu-collapse white",
        featuredItems: "content-collapse",
        instrumentItems: "content-collapse",
        bundleItems: "content-collapse",
        typeItems: "content-collapse",
        products: [],
        selectedCategories: [],
        onSale: false,
        bestsellers: false,
        guitars: false,
        microphone: false,
        keyboards: false,
        bass: false,
        headphones: false,
        drums: false,
        dj: false,
        recording: false,
        vocalists: false,
        synths: false,
        beginners: false,
        hardware: false,
        software: false,
        cartID: 0,
        cart: [],
    }
    UNSAFE_componentWillMount() {
        this.getProducts();
        this.getCart();
    }
    getProducts = () => {
        API.getAllProducts()
            .then(res =>
                this.setState({ products: res.data.results })
            )
            .catch(err => console.log("Error getting products: " + err));
    }
    getCart = () => {
        if (window.sessionStorage.logged_in) {
            API.getCartByUser(window.sessionStorage.id)
                .then(res =>
                    this.setCartState(res.data.cartArr[0])
                    // this.setState({ cart: res.data.results })
                )
                .catch(err => console.log(err));
        }
    }
    setCartState = (data) => {
        this.setState({
            cartID: data.cart_id
        });
        const products = data.line_items;
        for (let i = 0; i < products.length; i++) {
            this.setState({
                cart: this.state.cart.concat(products[i].product_id)
            });
            // this.setState(prevState => ({
            //     cart: [...prevState, products[i].product_id]
            // }));
        }
    }
    getFilteredProducts = () => {
        const categories = this.state.selectedCategories;
        if (categories.length > 0) {
            API.getFilteredProducts(categories)
                .then(res =>
                    this.setState({ products: res.data.results })
                )
                .catch(err => console.log(err))
        } else {
            this.getProducts();
        }
    }
    goToProductPage = (id) => (event) => {
        event.preventDefault();
        window.location.href = "/shop/product/" + id;
    }
    expandFeatured = () => (event) => {
        event.preventDefault();
        const expanded = this.state.featuredMenu;
        if (expanded === "menu-collapse white") {
            this.setState({
                featuredMenu: "menu-expand white",
                featuredItems: "content-expand"
            });
        } else {
            this.setState({
                featuredMenu: "menu-collapse white",
                featuredItems: "content-collapse"
            });
        }
    }
    expandInstruments = () => (event) => {
        event.preventDefault();
        const expanded = this.state.instrumentsMenu;
        if (expanded === "menu-collapse white") {
            this.setState({
                instrumentsMenu: "menu-expand white",
                instrumentItems: "content-expand",
            });
        } else {
            this.setState({
                instrumentsMenu: "menu-collapse white",
                instrumentItems: "content-collapse",
            });
        }
    }
    expandBundles = () => (event) => {
        event.preventDefault();
        const expanded = this.state.bundlesMenu;
        if (expanded === "menu-collapse white") {
            this.setState({
                bundlesMenu: "menu-expand white",
                bundleItems: "content-expand",
            });
        } else {
            this.setState({
                bundlesMenu: "menu-collapse white",
                bundleItems: "content-collapse",
            });
        }
    }
    expandType = () => (event) => {
        event.preventDefault();
        const expanded = this.state.typeMenu;
        if (expanded === "menu-collapse white") {
            this.setState({
                typeMenu: "menu-expand white",
                typeItems: "content-expand",
            });
        } else {
            this.setState({
                typeMenu: "menu-collapse white",
                typeItems: "content-collapse",
            });
        }
    }
    handleInputChange = (event) => {
        const name = event.target.name;
        const selectedCategories = this.state.selectedCategories;
        const thisIsThis = this;
        let updateCategories = function (clicked, newCategories) {
            return new Promise(function (resolve, reject) {
                resolve(
                    thisIsThis.setState({
                        [name]: clicked,
                        selectedCategories: newCategories
                    })
                )
            })
        }
        if (selectedCategories.indexOf(name) >= 0) {
            const newSelectedCategories = selectedCategories.filter(category => category !== name);
            updateCategories(false, newSelectedCategories)
                .then(function () {
                    thisIsThis.getFilteredProducts();
                })
                .catch(err => console.log(err));
        } else {
            const newSelectedCategories = selectedCategories.concat(name);
            updateCategories(true, newSelectedCategories)
                .then(function () {
                    thisIsThis.getFilteredProducts();
                })
                .catch(err => console.log(err));
        }
    }
    addToCart = (id, productName) => (event) => {
        event.preventDefault();
        const cart = this.state.cart;
        if (window.sessionStorage.logged_in) {
            if (cart.length > 0) {
                const checkCart = cart.findIndex(item => item.product_id === id);
                if (checkCart >= 0) {
                    alert("Item already added to cart");
                } else {
                    API.addItemToCart(this.state.cartID, id, 1)
                        .then(res =>
                            this.handleCartAddition(res.data.results, productName)
                        )
                        .catch(err => console.log(err));
                }
            } else {
                API.createCart(window.sessionStorage.id, id, 1)
                    .then(res =>
                        this.handleCartAddition(res.data.results, productName)
                    )
                    .catch(err => console.log(err));
            }
        } else {
            toast("You must be logged in to purchase items");
            console.log("user must be logged in to add items to cart");
        }
    }
    handleCartAddition = (data, product) => {
        this.setState({ cart: data });
        toast(product + " has been added to your cart!");
    }

    render() {
        return (
            <div className="page-container">
            {/* <Container fluid> */}
                <Row>
                    <Col size="md-12">
                        <div className="company-section rounded-corners">
                            <Row>
                                <Col size="md-6">
                                    <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80" alt="turntable"></img>
                                </Col>
                                <Col size="md-6">
                                    <h1 className="white q-top-pad">
                                        Current special on our product!
                                        </h1>
                                    <span className="white">
                                        Morbi tincidunt risus sit amet varius tempus. Nullam ac felis augue. Aliquam euismod lobortis metus, sit amet aliquam diam pulvinar vel. Quisque viverra consequat mi.
                                        </span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="all-products">
                            <Row>
                                <Col size="md-2">
                                    <Menu
                                        collapseFeatured={this.expandFeatured()}
                                        featuredClass={this.state.featuredMenu}
                                        collapseFeaturedItems={this.state.featuredItems}
                                        collapseInsturments={this.expandInstruments()}
                                        instrumentClass={this.state.instrumentsMenu}
                                        collapseInstrumentItems={this.state.instrumentItems}
                                        collapseBundles={this.expandBundles()}
                                        bundleClass={this.state.bundlesMenu}
                                        collapseBundleItems={this.state.bundleItems}
                                        collapseTypes={this.expandType()}
                                        typeClass={this.state.typeMenu}
                                        collapseTypeItems={this.state.typeItems}
                                        onSale={this.state.onSale}
                                        bestsellers={this.state.bestsellers}
                                        guitars={this.state.guitars}
                                        microphone={this.state.microphone}
                                        keyboards={this.state.keyboards}
                                        bass={this.state.bass}
                                        headphones={this.state.headphones}
                                        drums={this.state.drums}
                                        dj={this.state.dj}
                                        recording={this.state.recording}
                                        vocalists={this.state.vocalists}
                                        synths={this.state.synths}
                                        beginners={this.state.beginners}
                                        hardware={this.state.hardware}
                                        software={this.state.software}
                                        handleChange={this.handleInputChange}
                                    />
                                </Col>
                                {this.state.products.length > 0 ? (
                                    <Col size="md-9">
                                        <Row>
                                            {this.state.products.map(product => (
                                                <Col
                                                    size="md-3"
                                                    key={product.id}
                                                >
                                                    <Fade bottom>
                                                        <Product
                                                            key={product.id}
                                                            action={this.goToProductPage(product.id)}
                                                            image={product.image_link}
                                                            imageTitle={product.product_name}
                                                            cardTitle={product.product_name}
                                                            cardDescription={product.product_description.slice(0, 65) + "..."}
                                                            price={product.price}
                                                            button={<Button
                                                                key={product.id}
                                                                buttonClass="explore"
                                                                text="Add to cart"
                                                                action={this.addToCart(product.id, product.product_name)}
                                                            />}
                                                        />
                                                    </Fade>
                                                </Col>
                                            ))}
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
                                    </Col>
                                ) : (<div />)}
                            </Row>
                        </div>
                    </Col>
                </Row>
            {/* </Container> */}
            </div>
        )
    }
}

export default Shop;