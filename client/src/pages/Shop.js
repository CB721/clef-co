import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Product from "../components/Product";
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
        typeMenu: "menu-collapse white",
        typeItems: "content-collapse",
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


    render() {
        return (
            <div>
                <Container fluid>
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
                            />
                        </Col>
                        <Col size="md-9">
                            <Row>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                                <Col size="md-3">
                                    <Product
                                        image="https://images.unsplash.com/photo-1507245921392-e902673ca772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        imageTitle="Guitar Amp"
                                        cardTitle="Guitar Amp"
                                        cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text."
                                        price="349.99"
                                        button={<Button
                                            buttonClass="explore"
                                            text="Add to cart"
                                        />}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Shop;