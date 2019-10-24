import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import videoBG from "../pages/Assets/video/audio-visual2.mp4";
import Review from "../components/Review";
import API from "../utilities/api";
import "./Assets/style.css";

class Home extends Component {
    state = {
        products: [],
        productOne: [],
        productTwo: [],
        highlightProducts: "home-promo-image",
        topProducts: "black padding-top-bottom",
        scrollDirection: 0,
        honeyUL: "",
        honeyLI: ""
    }
    componentDidMount() {
        const thisIsThis = this;
        this.getProducts()
            .then(function () {
                thisIsThis.displayRandomProducts()
            })
            .catch(err => console.log(err));
        window.addEventListener("scroll", this.scrollEvent)
    }
    getProducts = function () {
        const thisIsThis = this;
        return new Promise(function (resolve, reject) {
            resolve(
                API.getAllProducts()
                    .then(res =>
                        thisIsThis.setState({ products: res.data.results })
                    )
                    .catch(err => console.log("Error getting products: " + err))
            )
        })
    }
    displayRandomProducts = () => {
        const productArrLen = this.state.products.length - 1;
        const randomOne = Math.floor(Math.random() * productArrLen) + 1;
        let randomTwo = Math.floor(Math.random() * productArrLen) + 1;
        if (randomOne === randomTwo) {
            randomTwo += 1;
        }
        const products = this.state.products;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === randomOne) {
                this.setState({ productOne: products[i] });
            }
            if (products[i].id === randomTwo) {
                this.setState({ productTwo: products[i] });
            }
        }
    }
    scrollEvent = () => {
        const direction = this.state.scrollDirection - window.scrollY;
        this.setState({
            scrollDirection: window.scrollY
        });
        // if direction is negative, user is scrolling down, positive, scrolling up
        console.log(direction);
        if (window.scrollY < 75) {
            this.setState({ highlightProducts: "home-promo-image" });
        }
        if (window.scrollY > 75 && window.scrollY < 900 && direction < 0) {
            this.setState({
                highlightProducts: "image-grow home-promo-image",
                topProducts: "black padding-top-bottom"
            });
        }
        if (window.scrollX > 900 && window.scrollY < 1096 & direction < 0) {
            this.setState({
                topProducts: "black padding-top-bottom text-grow"
            });
        }
    }

    render() {
        return (
            <div className="three-d-background">
                <Container fluid >
                    <Row>
                        <Col size="md-12">
                            <video className="video-background" loop autoPlay playsInline muted
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100vh',
                                }}
                                src={videoBG}>
                            </video>
                            <h1 className="white center middle video-text-overlay">
                                Demo Company
                        </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="purple-background t-top-margin add-shadow all-products">
                                <Row>
                                    <Col size="md-12">
                                        <h2 className="white f-top-pad padding-bottom">
                                            Here is our slogan || Our slogan here is
                                    </h2>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="black">
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-4">
                                        <div className="home-item-one add-shadow">
                                            <img className={this.state.highlightProducts} src={this.state.productOne.image_link} alt={this.state.productOne.product_name}></img>
                                            <h3 className="white f-top-pad center middle hover-title add-shadow">
                                                {this.state.productOne.product_name}
                                            </h3>
                                        </div>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-4">
                                        <div className="home-item-two add-shadow">
                                            <img className={this.state.highlightProducts} src={this.state.productTwo.image_link} alt={this.state.productTwo.product_name}></img>
                                            <h3 className="white f-top-pad center middle hover-title add-shadow">
                                                {this.state.productTwo.product_name}
                                            </h3>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="black-purple padding-top-bottom t-top-margin text-grow add-shadow" id="top-products-section">
                                <Row>
                                    <Col size="md-4" />
                                    <Col size="md-4">
                                        <h2 className="f-top-pad bottom-pad-f">
                                            Top Products
                                    </h2>
                                    </Col>
                                </Row>
                                {/* change to top selling products once configured */}
                                {this.state.products.length > 5 ? (
                                    <Row>
                                        <Col size="md-4" />
                                        <Col size="md-4">
                                            <ul id="ul-honey-comb">
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[0].image_link} alt={this.state.products[0].product_name}></img>
                                                </li>
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[1].image_link} alt={this.state.products[0].product_name}></img>
                                                </li>
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[2].image_link} alt={this.state.products[2].product_name}></img>
                                                </li>
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[3].image_link} alt={this.state.products[3].product_name}></img>
                                                </li>
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[4].image_link} alt={this.state.products[4].product_name}></img>
                                                </li>
                                                <li className="li-honey-comb">
                                                    <img className="img-honey-comb" src={this.state.products[5].image_link} alt={this.state.products[5].product_name}></img>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col size="md-4" />
                                    </Row>
                                ) : (<div />)}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div className="purple-background t-top-margin add-shadow">
                                <Row>
                                    <Col size="md-12">
                                        <h2 className="white f-top-pad padding-bottom">
                                            What the Experts are Saying
                                    </h2>
                                    </Col>
                                </Row>
                            </div>
                            <Row>
                                <Col size="md-12">
                                    <div className="review-section">
                                        <Row>
                                            <Col size="md-4" />
                                            <Col size="md-4">
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-1" />
                                            <Col size="md-4">
                                                <Review
                                                    reviewerImage="https://images.unsplash.com/photo-1520715246086-96c95638169d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80"
                                                    reviewerName="Bruce Wayne"
                                                    review="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                                    bio="https://en.wikipedia.org/wiki/Batman"
                                                />
                                            </Col>
                                            <Col size="md-2" />
                                            <Col size="md-4">
                                                <Review
                                                    reviewerImage="https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1523&q=80"
                                                    reviewerName="Tony Stark"
                                                    review="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                                    bio="https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="md-1" />
                                            <Col size="md-4">
                                                <Review
                                                    reviewerImage="https://images.unsplash.com/photo-1525954322486-aa196091220f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                                    reviewerName="Harry Potter"
                                                    review="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                                    bio="https://en.wikipedia.org/wiki/Harry_Potter"
                                                />
                                            </Col>
                                            <Col size="md-2" />
                                            <Col size="md-4">
                                                <Review
                                                    reviewerImage="https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                                    reviewerName="Harley Quinn"
                                                    review="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                                                    bio="https://en.wikipedia.org/wiki/Harley_Quinn"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;