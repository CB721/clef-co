import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Loading from "../components/Loading";
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Col, Row } from "../components/Grid";
import videoBG from "../pages/Assets/video/simplified-home-video.mp4";
import Review from "../components/Review";
import ViewedProducts from "../components/ViewedProducts";
import Tooltip from '@material-ui/core/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import API from "../utilities/api";
import moment from "moment";
import "./Assets/style.css";


function Home() {
    const [productOne, setProductOne] = useState([]);
    const [productTwo, setProductTwo] = useState([]);
    const [reviews, setReviews] = useState([]);
    const products = useSelector(state => state.products);
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        if (products.length > 12) {
            setProductOne(products[10]);
            setProductTwo(products[12]);
        }
    }, [products]);
    useEffect(() => {
        API.getAllReviews()
            .then(res =>
                filterResults(res.data.results)
            )
            .catch(err => console.log(err));
    }, [reviews]);
    function filterResults(data) {
        const filteredArr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].rating.data > 3 && filteredArr.length < 10) {
                filteredArr.push(data[i]);
            }
        }
        setReviews(filteredArr);
    }
    useEffect(() => {
        API.getAllProductsBySalesTotal()
            .then(res =>
                setTopProducts(res.data.results)
            )
            .catch(err => console.log(err));
    }, [topProducts]);
    useEffect(() => {
        if (window.sessionStorage.id) {
            setTimeout(function () {
                toast("Thanks for visiting today, " + window.sessionStorage.first_name + "!", {
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
            }, 5000);
        } else {
            setTimeout(function () {
                toast("Create an account today!", {
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
            }, 8080);
        }
    }, []);
    function goToProductPage(event, link) {
        event.preventDefault();
        window.location.href = "/shop/product/" + link;
    }
    return (
        <div className="page-container">
            <Row no-gutters>
                <Col size="12">
                    <video className="video-background rounded-corners add-shadow" loop autoPlay playsInline muted aria-label="video-demo"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100vh',
                        }}
                        src={videoBG}>
                    </video>
                    <h1 className="white center middle video-text-overlay">
                        Clef Co
                    </h1>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="12">
                    <Fade bottom>
                        <div className="purple-background rounded-corners t-top-margin add-shadow all-products">
                            <Row no-gutters>
                                <Col size="md-12">
                                    <h2 className="white f-top-pad padding-bottom">
                                        Here is our slogan || Our slogan here is
                                    </h2>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <div className="black">
                        <Row no-gutters>
                            <Col size="md-1" />
                            <Col size="md-4 12">
                                <Fade bottom>
                                    <div
                                        className="add-shadow f-top-margin home-promo-img"
                                        onClick={(event) => {
                                            goToProductPage(event, productOne.id)
                                        }}>
                                        <img className="image-grow" src={productOne.image_link} alt={productOne.product_name}></img>
                                        <div className="home-promo-image-overlay">
                                            <div className="image-text">
                                                {productOne.product_name}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4 12">
                                <Fade bottom>
                                    <div
                                        className="add-shadow f-top-margin home-promo-img"
                                        onClick={(event) => {
                                            goToProductPage(event, productTwo.id)
                                        }}>
                                        <img className="image-grow" src={productTwo.image_link} alt={productTwo.product_name}></img>
                                        <div className="home-promo-image-overlay">
                                            <div className="image-text">
                                                {productTwo.product_name}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <div className="padding-top-bottom t-top-margin text-grow black-background rounded-corners add-shadow" id="top-products-section">
                        <Row no-gutters>
                            <Col size="md-4" />
                            <Col size="md-4 12">
                                <RubberBand>
                                    <h2 className="f-top-pad bottom-pad-f">
                                        Top Products
                                    </h2>
                                </RubberBand>
                            </Col>
                        </Row>
                        {topProducts.length > 5 ? (
                            <Row no-gutters>
                                <Col size="md-4" />
                                <Col size="md-4 12">
                                    <ul id="ul-honey-comb">
                                        <Zoom left cascade>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[0].product_name}
                                                    leaveDelay={3}
                                                    placement="top"
                                                >
                                                    <img
                                                        className="img-honey-comb"
                                                        src={topProducts[0].image_link}
                                                        alt={topProducts[0].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[0].id)
                                                        }}
                                                    ></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[1].product_name}
                                                    leaveDelay={3}
                                                    placement="left"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={topProducts[1].image_link}
                                                        alt={topProducts[1].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[1].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[2].product_name}
                                                    leaveDelay={3}
                                                    placement="left"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={topProducts[2].image_link}
                                                        alt={topProducts[2].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[2].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[3].product_name}
                                                    leaveDelay={3}
                                                    placement="bottom"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={topProducts[3].image_link}
                                                        alt={topProducts[3].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[3].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[4].product_name}
                                                    leaveDelay={3}
                                                    placement="right"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={topProducts[4].image_link}
                                                        alt={topProducts[4].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[4].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={topProducts[5].product_name}
                                                    leaveDelay={3}
                                                    placement="right"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={topProducts[5].image_link}
                                                        alt={topProducts[5].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, topProducts[5].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                        </Zoom>
                                    </ul>
                                </Col>
                                <Col size="md-4" />
                            </Row>
                        ) : (<Loading
                            color="white"
                        />)}
                    </div>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <Fade bottom>
                        <div className="purple-background t-top-margin add-shadow rounded-corners">
                            <Row no-gutters>
                                <Col size="md-12">
                                    <h2 className="white ">
                                        What customers are saying
                                    </h2>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    <Row no-gutters>
                        <Col size="md-12">
                            <div className="review-section">
                                <Row no-gutters>
                                    {reviews.map(review => (
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
                </Col>
            </Row>
            {window.sessionStorage.logged_in ? (
                <ViewedProducts />
            ) : (<div />)}
        </div>
    )
}

export default Home;