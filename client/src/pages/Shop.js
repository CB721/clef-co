import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Product from "../components/Product";
import API from "../utilities/api";
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
    }
    componentDidMount() {
        this.getProducts();
    }
    getProducts = () => {
        API.getAllProducts()
            .then(res =>
                this.setState({ products: res.data.results })
            )
            .catch(err => console.log("Error getting products: " + err));
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
    checkState() {
        const products = this.state.products;
        console.log(products);
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


    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <div className="company-section">
                                <Row>
                                    <Col size="md-6">
                                        <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80" alt="turntable"></img>
                                    </Col>
                                    <Col size="md-6">
                                        <h1 className="white q-top-pad">
                                            Current special on our product!
                                        </h1>
                                        <h6 className="white">
                                            Morbi tincidunt risus sit amet varius tempus. Nullam ac felis augue. Aliquam euismod lobortis metus, sit amet aliquam diam pulvinar vel. Quisque viverra consequat mi.
                                        </h6>
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
                                                        <Product
                                                            key={product.id}
                                                            image={product.image_link}
                                                            imageTitle={product.product_name}
                                                            cardTitle={product.product_name}
                                                            cardDescription={product.product_description.slice(0, 65) + "..."}
                                                            price={product.price}
                                                            button={<Button
                                                                key={product.id}
                                                                buttonClass="explore"
                                                                text="Add to cart"
                                                            />}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>
                                    ) : (<div />)}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Shop;