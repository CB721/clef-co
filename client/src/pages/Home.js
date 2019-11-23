import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { Col, Row, Container } from "../components/Grid";
import videoBG from "../pages/Assets/video/audio-visual2.mp4";
import Review from "../components/Review";
import Tooltip from '@material-ui/core/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Assets/style.css";

function Home() {
    const [productOne, setProductOne] = useState([]);
    const [productTwo, setProductTwo] = useState([]);
    const products = useSelector(state => state.products);

    useEffect(() => {
        displayRandomProducts();
    }, [displayRandomProducts]);
    useEffect(() => {
        setTimeout(function() {
            toast("Welcome!");
        }, 5000)
    }, [])

    function displayRandomProducts() {
        const productArrLen = products.length - 1;
        const randomOne = Math.floor(Math.random() * productArrLen) + 1;
        let randomTwo = Math.floor(Math.random() * productArrLen) + 1;
        if (randomOne === randomTwo) {
            randomTwo += 1;
        }
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === randomOne) {
                setProductOne(products[i]);
            }
            if (products[i].id === randomTwo) {
                setProductTwo(products[i]);
            }
        }
    }
    function goToProductPage(event, link) {
        event.preventDefault();
        window.location.href = "/shop/product/" + link;
    }
    return (
        <div className="page-container">
            {/* <Container fluid > */}
            <Row no-gutters>
                <Col size="md-12">
                    <video className="video-background rounded-corners add-shadow" loop autoPlay playsInline muted aria-label="video-demo"
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
            <Row no-gutters>
                <Col size="md-12">
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
                            <Col size="md-4">
                                <Fade bottom>
                                    <div
                                        className="add-shadow"
                                        onClick={(event) => {
                                            goToProductPage(event, productOne.id)
                                        }}>
                                        <img className="image-grow" src={productOne.image_link} alt={productOne.product_name}></img>
                                        <h3 className="white f-top-pad center middle hover-title add-shadow">
                                            {productOne.product_name}
                                        </h3>
                                    </div>
                                </Fade>
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                                <Fade bottom>
                                    <div
                                        className="add-shadow"
                                        onClick={(event) => {
                                            goToProductPage(event, productTwo.id)
                                        }}>
                                        <img className="image-grow" src={productTwo.image_link} alt={productTwo.product_name}></img>
                                        <h3 className="white f-top-pad center middle hover-title add-shadow">
                                            {productTwo.product_name}
                                        </h3>
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
                            <Col size="md-4">
                                <RubberBand>
                                    <h2 className="f-top-pad bottom-pad-f">
                                        Top Products
                                            </h2>
                                </RubberBand>
                            </Col>
                        </Row>
                        {/* change to top selling products once configured */}
                        {products.length > 5 ? (
                            <Row no-gutters>
                                <Col size="md-4" />
                                <Col size="md-4">
                                    <ul id="ul-honey-comb">
                                        <Zoom left cascade>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[0].product_name}
                                                    leaveDelay={3}
                                                    placement="top"
                                                >
                                                    <img
                                                        className="img-honey-comb"
                                                        src={products[0].image_link}
                                                        alt={products[0].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[0].id)
                                                        }}
                                                    ></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[1].product_name}
                                                    leaveDelay={3}
                                                    placement="left"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={products[1].image_link}
                                                        alt={products[1].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[1].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[2].product_name}
                                                    leaveDelay={3}
                                                    placement="left"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={products[2].image_link}
                                                        alt={products[2].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[2].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[3].product_name}
                                                    leaveDelay={3}
                                                    placement="bottom"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={products[3].image_link}
                                                        alt={products[3].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[3].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[4].product_name}
                                                    leaveDelay={3}
                                                    placement="right"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={products[4].image_link}
                                                        alt={products[4].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[4].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                            <li className="li-honey-comb">
                                                <Tooltip
                                                    title={products[5].product_name}
                                                    leaveDelay={3}
                                                    placement="right"
                                                >
                                                    <img className="img-honey-comb"
                                                        src={products[5].image_link}
                                                        alt={products[5].product_name}
                                                        onClick={(event) => {
                                                            goToProductPage(event, products[5].id)
                                                        }}></img>
                                                </Tooltip>
                                            </li>
                                        </Zoom>
                                    </ul>
                                </Col>
                                <Col size="md-4" />
                            </Row>
                        ) : (<div />)}
                    </div>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <Fade bottom>
                        <div className="purple-background t-top-margin add-shadow rounded-corners">
                            <Row no-gutters>
                                <Col size="md-12">
                                    <h2 className="white f-top-pad padding-bottom">
                                        What the Experts are Saying
                                            </h2>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    <Row no-gutters>
                        <Col size="md-12">
                            <div className="review-section">
                                <Row no-gutters>
                                    <Col size="md-4" />
                                    <Col size="md-4">
                                    </Col>
                                </Row>
                                <Row no-gutters>
                                    <Col size="md-1" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1520715246086-96c95638169d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80"
                                                reviewerName="Bruce Wayne"
                                                review="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                                bio="https://en.wikipedia.org/wiki/Batman"
                                            />
                                        </Flip>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1529847556963-9653a9366021?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1523&q=80"
                                                reviewerName="Tony Stark"
                                                review="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
                                                bio="https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"
                                            />
                                        </Flip>
                                    </Col>
                                </Row>
                                <Row no-gutters>
                                    <Col size="md-1" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1525954322486-aa196091220f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                                                reviewerName="Harry Potter"
                                                review="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                                bio="https://en.wikipedia.org/wiki/Harry_Potter"
                                            />
                                        </Flip>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-4">
                                        <Flip top>
                                            <Review
                                                reviewerImage="https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                                reviewerName="Harley Quinn"
                                                review="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                                                bio="https://en.wikipedia.org/wiki/Harley_Quinn"
                                            />
                                        </Flip>
                                    </Col>
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
            {/* </Container> */}
        </div>
    )
}

export default Home;