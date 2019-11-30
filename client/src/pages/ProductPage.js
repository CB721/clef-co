import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Flip from 'react-reveal/Flip';
import Review from "../components/Review";
import Button from "../components/Button";
import ProductOrder from "../components/ProductOrder";
import ProductData from "../pages/Assets/Data/products.json";
import API from "../utilities/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import StarRatings from 'react-star-ratings';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import moment from "moment";
import "./Assets/style.css";

class ProductPage extends Component {
    state = {
        product: [],
        orders: [],
        reviews: [],
        backgroundImage: ``,
        backgroundPosition: '0% 0%',
        borderRadius: "4px",
        cart: [],
        quantity: 0,
        reviewDesc: "",
        reviewRating: 0,
        theme: createMuiTheme({
            palette: {
                primary: { main: '#ffffff' }
            }
        }),
        averageRating: 0,
    }
    componentDidMount() {
        this.getProduct(window.location.pathname.slice(14));
        this.getCart();
        this.getUserOrders();
        this.getAllProductReviews();
        this.getAverageProductReview();
        this.addProductToViewed();
    }
    addProductToViewed() {
        if (window.sessionStorage.logged_in) {
            const userAndProduct = {
                user_id: window.sessionStorage.id,
                product_id: window.location.pathname.slice(14)
            }
            API.addProductToViewed(userAndProduct)
                .then()
                .catch(err => console.log(err));
        }
    }
    getProduct = (id) => {
        API.getProductById(id)
            .then(res =>
                this.setState({
                    product: res.data.results[0],
                    backgroundImage: `url(${res.data.results[0].image_link})`
                })
            )
            .catch(err => console.log(err));
    }
    getUserOrders = () => {
        if (window.sessionStorage.logged_in) {
            API.getOrders(window.sessionStorage.id)
                .then(res =>
                    this.setState({ orders: res.data.ordersArr })
                )
                .catch(err => console.log(err));
        }
    }
    getAllProductReviews = () => {
        API.getReviewsByProductID(window.location.pathname.slice(14))
            .then(res =>
                this.setState({ reviews: res.data.results })
            )
            .catch(err => console.log(err));
    }
    getAverageProductReview = () => {
        API.getAverageProductRating(window.location.pathname.slice(14))
            .then(res =>
                this.validateAverage(res.data.results[0].rating_average)
            )
            .catch(err => console.log(err));
    }
    validateAverage(data) {
        if (data) {
            this.setState({
                averageRating: Math.round(data)
            });
        }
    }
    validateProduct(data, id) {
        if (data) {
            this.setState({
                product: data,
                backgroundImage: `url(${data.image_link})`
            });
        } else {
            let filteredProduct = ProductData.filter(product => product.id === id);
            this.setState({
                product: filteredProduct,
                backgroundImage: `url(${filteredProduct.image_link})`
            });
        }
    }
    getCart = () => {
        if (window.sessionStorage.logged_in) {
            API.getCartByUser(window.sessionStorage.id)
                .then(res =>
                    this.setState({ cart: res.data.results })
                )
                .catch(err => console.log(err));
        }
    }
    addToCart = (id) => (event) => {
        event.preventDefault();
        const cart = this.state.cart;
        if (window.sessionStorage.logged_in) {
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
                    if (this.state.product.hardware && this.state.product.quantity > 0) {
                        if (this.state.quantity > 0) {
                            API.addItemToCart(this.state.cart[0].cart_id, id, this.state.quantity)
                                .then(res =>
                                    this.setState({ cart: res.data.results })
                                )
                                .catch(err => console.log(err));
                        } else {
                            toast("Please select a quantity", {
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
                    } else {
                        API.addItemToCart(this.state.cart[0].cart_id, id, 1)
                            .then(res =>
                                this.setState({ cart: res.data.results })
                            )
                            .catch(err => console.log(err));
                    }
                }
            } else {
                API.createCart(window.sessionStorage.id, id, 1)
                    .then(res =>
                        this.setState({ cart: res.data.results })
                    )
                    .catch(err => console.log(err));
            }
        } else {
            toast("Please log in to add items to your cart", {
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
    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };
    handleFormSubmit = () => {
        this.setState({
            reviewMessage: "Leave a review"
        });
        if (window.sessionStorage.id) {
            if (this.state.reviewDesc === "") {
                toast("Please add a description to help us understand your rating", {
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
                setTimeout(function () {
                    toast("We really appreciate you taking the time to send us a review!", {
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
                }, 4000)
            } else {
                for (let i = 0; i < this.state.orders.length; i++) {
                    if (this.state.orders[i].line_items.filter(item => item.product_id === this.state.product.id).length > 0) {
                        const review = {
                            description: this.state.reviewDesc,
                            rating: this.state.reviewRating,
                            user_id: window.sessionStorage.id,
                            product_id: this.state.product.id
                        }
                        this.submitReview(review);
                        break;
                    } else {
                        if (i === this.state.orders.length - 1) {
                            toast("You must purchase the " + this.state.product.product_name + " before leaving a review", {
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
                    }
                }
            }
        } else {
            toast("Please log in to leave a review for " + this.state.product.product_name, {
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
    }
    submitReview = (review) => {
        API.addReview(review)
            .then(res => this.handleReviewResponse(res.data.results))
            .catch(err => console.log(err));
    }
    handleReviewResponse = (data) => {
        if (data.affectedRows > 0) {
            this.setState({
                reviewDesc: "",
                reviewRating: 0
            })
            toast("Thanks for the review!", {
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
            toast("There seems to a problem on our end.  Please try again later!", {
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
    }
    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        this.setState({ backgroundPosition: `${x}% ${y}%` });
    }
    render() {
        return (
            <div className="page-container">
                {/* <Container fluid> */}
                <Row no-gutters>
                    <Col size="md-12">
                        <div className="product-header t-top-pad white">
                            <p>
                                {this.state.product.product_name}
                            </p>
                        </div>
                    </Col>
                    <Col size="md-12">
                        <Row no-gutters>
                            <Col size="md-1" />
                            <Col size="md-6">
                                <Row no-gutters>
                                    <Col size="12">
                                        <figure
                                            className="product-image-zoom"
                                            onMouseMove={this.handleMouseMove}
                                            style={this.state}
                                        >
                                            <img
                                                src={this.state.product.image_link}
                                                alt={this.state.product.product_name}
                                                className="product-image-page"

                                            />
                                        </figure>
                                    </Col>
                                    <Col size="12">

                                    </Col>
                                </Row>
                            </Col>
                            <Col size="md-4">
                                <Row no-gutters>
                                    <Col size="12">
                                        <div className="center-stars f-top-pad">
                                            <StarRatings
                                                rating={this.state.averageRating}
                                                numberOfStars={5}
                                                starDimension="1.7rem"
                                                starRatedColor="rgb(255, 255, 255)"
                                                starEmptyColor="rgba(156, 128, 176, 0.3)"
                                                name='averageRating'
                                            />
                                        </div>
                                    </Col>
                                    <Col size="12">
                                        <ProductOrder
                                            price={this.state.product.price}
                                            hardware={this.state.product.hardware}
                                            quantity={this.state.product.quantity}
                                            software={this.state.product.software}
                                            id={window.location.pathname.slice(14)}
                                            handleInputChange={this.handleInputChange}
                                            button={<Button
                                                action={this.addToCart(window.location.pathname.slice(14))}
                                                buttonClass="cart-add-button white"
                                                text="Add to cart"
                                            />}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row no-gutters>
                    <Col size="md-2" />
                    <Col size="md-8">
                        <div className="product-description-page white t-top-pad">
                            <p>
                                {this.state.product.product_description}
                            </p>
                        </div>
                    </Col>
                    <Col size="md-2" />
                </Row>
                <Row no-gutters>
                    <Col size="md-12">
                        <div className="review-section">
                            <Row no-gutters>
                                <Col size="lg-1 md-3 12" />
                                <Col size="lg-10 md-6 12">
                                    <div className="submit-review-section padding-bottom f-top-pad">
                                        <Row no-gutters>
                                            <Col size="md-12">
                                                <div className="purple">
                                                    <p>
                                                        Leave a review for {this.state.product.product_name}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col size="lg-8 md-5 12">
                                                <FormControl fullWidth={true}>
                                                    <MuiThemeProvider theme={this.state.theme}>
                                                        <Input
                                                            value={this.state.reviewDesc}
                                                            name="reviewDesc"
                                                            onChange={this.handleInputChange}
                                                            type="text"
                                                            inputProps={{
                                                                'aria-label': 'review description',
                                                            }}
                                                        />
                                                    </MuiThemeProvider>
                                                </FormControl>
                                            </Col>
                                            <Col size="lg-2 md-5 sm-6">
                                                <div id="star-ratings" className="center-stars">
                                                    <StarRatings
                                                        rating={this.state.reviewRating}
                                                        changeRating={(event) => this.setState({ reviewRating: event })}
                                                        numberOfStars={5}
                                                        starDimension="1.25rem"
                                                        starEmptyColor="rgb(156, 128, 176)"
                                                        starHoverColor="rgb(62, 7, 104)"
                                                        starRatedColor="rgb(62, 7, 104)"
                                                        name='reviewRating'
                                                    />
                                                </div>
                                            </Col>
                                            <Col size="lg-1 md-2 sm-6">
                                                <Button
                                                    action={this.handleFormSubmit}
                                                    buttonClass="explore"
                                                    text="Submit Review"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row no-gutters>
                                {this.state.reviews.map(review => (
                                    <Col size="sm-6" key={review.id}>
                                        <Flip top>
                                            <Review
                                                product={review.product_name}
                                                dateJoined={review.joined_date}
                                                createdAt={
                                                    moment(
                                                        review.created_at.split("T")[0].split("-")[1] +
                                                        " " +
                                                        review.created_at.split("T")[0].split("-")[2] +
                                                        " " +
                                                        review.created_at.split("T")[0].split("-")[0]
                                                    )
                                                        .format(
                                                            "MMM Do YYYY"
                                                        )
                                                }
                                                reviewerName={review.first_name}
                                                review={review.review}
                                                rating={review.rating.data[0]}
                                            />
                                        </Flip>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
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
                {/* </Container> */}
            </div>
        )
    }
}

export default ProductPage;