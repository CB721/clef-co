import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { Col, Row, Container } from "../components/Grid";
import IconButton from '@material-ui/core/IconButton';
import Button from "../components/Button";
import ViewedProducts from "../components/ViewedProducts";
import Loading from "../components/Loading";
import Bundle from "../components/Bundle";
import Bundles from "./Assets/Data/bundles.json";
import Modal from "../components/Modal";
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import API from "../utilities/api";
import "./Assets/style.css";

function Products() {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [modalClass, setModalClass] = useState("no-modal")
    const [bundleProductArr, setBundleProductArr] = useState([]);
    const [bundleIDs, setBundleIDs] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (window.sessionStorage.logged_in) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [])
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
    function goToProductPage(event, link) {
        event.preventDefault();
        window.location.href = "/shop/product/" + link;
    }
    function openBundleModal(event, index) {
        event.preventDefault();
        setTitle(Bundles[index].name);
        setDesc(Bundles[index].description)
        let productArr = Bundles[index].product_ids;
        for (let i = 0; i < productArr.length; i++) {
            const bundleItem = products.filter(product => product.id === productArr[i]);
            let bundleID = bundleItem[0].id;
            setBundleIDs(bundleIDs => [...bundleIDs, bundleID]);
            setBundleProductArr(bundleProductArr => [...bundleProductArr, bundleItem]);
        }
        setModalClass("bundle-modal");
        setOpen(true);
    }
    function closeBundleModal(event) {
        event.preventDefault();
        setOpen(false);
        setTitle("");
        setDesc("");
        setBundleProductArr([]);
        setBundleIDs([]);
        setModalClass("no-modal");
    }
    function addToCart(event) {
        event.preventDefault();
        if (cart.length > 0) {
            API.addBundleToCart(cart[0].cart_id, bundleIDs)
                .then(
                    res => console.log(res.data)
                )
                .catch(err => console.log(err));
        } else {
            API.createCartFromBundle(window.sessionStorage.id, bundleIDs)
                .then(
                    res => console.log(res.data)
                )
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="page-container">
            {/* <Container fluid> */}
            <div className="t-top-pad">
                <Row no-gutters>
                    <Col size="md-12">
                        <div className="purple-background add-shadow rounded-corners all-products">
                            <Row no-gutters>
                                <Col size="md-6 12">
                                    <h1 className="white">
                                        Products
                                    </h1>
                                </Col>
                                <Col size="md-6 12">
                                    <p className="white">
                                        Browse our collection of state-of-the-art music equipment and software plugins.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row no-gutters>
                <Col size="md-12">
                    <h2 className="white center-text black-background rounded-corners all-products">
                        Newest arrival!
                            </h2>
                </Col>
                <Col size="md-12">
                    <div className="current-highlighted-product-section add-shadow rounded-corners">
                        {/* replace with most recently added product when configured */}
                        {products.length > 0 ? (
                            <Row no-gutters>
                                <Col size="md-4 12">
                                    <Row no-gutters>
                                        <Col size="md-12">
                                            <h2 className="white t-top-pad">
                                                {products[10].product_name}
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row no-gutters>
                                        <Col size="md-12">
                                            <span className="white f-top-pad" id="promo-product-desc">
                                                {products[10].product_description.split(".", 1) + "."}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row no-gutters>
                                        <Col size="md-12">
                                            <div className="t-top-pad">
                                                <Row no-gutters>
                                                    <Col size="md-1" />
                                                    <Col size="md-10 12">
                                                        <Button
                                                            buttonClass="shop-now"
                                                            text="Shop Now"
                                                            action={goToShop}
                                                        />
                                                    </Col>
                                                    <Col size="md-1" />
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col size="md-8 12">
                                    <a href={`/shop/product/${products[10].id}`}>
                                        <img src={products[10].image_link} alt={products[10].product_name} className="current-promo-image"></img>
                                    </a>
                                </Col>
                            </Row>
                        ) : (<Loading
                            color="white"
                        />)}
                    </div>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <Pulse>
                        <h1 className="white f-top-pad padding-bottom text-shadow">
                            Purchase our product bundles
                                </h1>
                    </Pulse>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-1" />
                <Col size="md-4 12">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[0].images}
                            bundleTitle={Bundles[0].name}
                            bundleDescription={Bundles[0].description}
                            slideTime={Bundles[0].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                                action={(event) => openBundleModal(event, 0)}
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-2" />
                <Col size="md-4 12">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[1].images}
                            bundleTitle={Bundles[1].name}
                            bundleDescription={Bundles[1].description}
                            slideTime={Bundles[1].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                                action={(event) => openBundleModal(event, 1)}
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-1" />
                <Col size="md-1" />
                <Col size="md-4 12">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[2].images}
                            bundleTitle={Bundles[2].name}
                            bundleDescription={Bundles[2].description}
                            slideTime={Bundles[2].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                                action={(event) => openBundleModal(event, 2)}
                            />}
                        />
                    </Fade>
                </Col>
                <Col size="md-2" />
                <Col size="md-4 12">
                    <Fade bottom>
                        <Bundle
                            bundleImage={Bundles[3].images}
                            bundleTitle={Bundles[3].name}
                            bundleDescription={Bundles[3].description}
                            slideTime={Bundles[3].slideTime}
                            button={<Button
                                buttonClass="shop-now"
                                text="Learn More"
                                action={(event) => openBundleModal(event, 3)}
                            />}
                        />
                    </Fade>
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    <Modal
                        open={open}
                        class={modalClass}
                        handleClose={(event) => closeBundleModal(event)}
                        addBundleToCart={(event) => addToCart(event, bundleProductArr[0][0].id)}
                        loggedIn={loggedIn}
                        title={title}
                        description={desc}
                        products={bundleProductArr}
                    />
                </Col>
            </Row>
            <Row no-gutters>
                <Col size="md-12">
                    {products.length > 0 ? (
                        <div className="secondary-highlighted-product white rounded-corners">
                            <Row no-gutters>
                                <Col size="md-6 12">
                                    <a href={`/shop/product/${products[6].id}`}>
                                        <img src={products[6].image_link} alt="Demo Company Microphone" className="current-promo-image"></img>
                                    </a>
                                </Col>
                                <Col size="md-6 12">
                                    <Row no-gutters>
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
                                    <Row no-gutters>
                                        {/* <div className="f-top-pad"> */}
                                        <Col size="md-12">
                                            <Row no-gutters>
                                                <Col size="md-1" />
                                                <Col size="md-10 12">
                                                    <Button
                                                        buttonClass="shop-now"
                                                        text="Shop Now"
                                                        action={goToShop}
                                                    />
                                                </Col>
                                                <Col size="md-1" />
                                            </Row>
                                        </Col>
                                        {/* </div> */}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    ) : (<Loading
                        color="white"
                    />)}
                </Col>
            </Row>
            <div className="company-section">
                <Row no-gutters>
                    <Col size="md-12">
                        <Row no-gutters>
                            <Col size="md-1" />
                            <Col size="md-2 12">
                                <Row no-gutters>
                                    <Col size="md-12">
                                        <div onClick={goToSupport}>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad section-headers center-text">
                                                        Contact Us
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        Our award-winning support team is available 24/7 to help with your questions
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
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
                            <Col size="md-2 12">
                                <Row no-gutters>
                                    <Col size="md-12">
                                        <div onClick={goToTutorials}>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad">
                                                        Tutorials
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        Watch videos made by our team members walking through a variety of our most popular products
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
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
                            <Col size="md-2 12">
                                <Row no-gutters>
                                    <Col size="md-12">
                                        <div onClick={goToCart}>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <h2 className="white f-top-pad">
                                                        Check Cart
                                                            </h2>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
                                                <Col size="md-12">
                                                    <span className="white">
                                                        View and purchase your currently selected products
                                                            </span>
                                                </Col>
                                            </Row>
                                            <Row no-gutters>
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
            {window.sessionStorage.logged_in ? (
                <Row no-gutters>
                    <Col size="md-12">
                        <div className="product-header f-top-pad white">
                            <p>
                                Last Viewed Products
                            </p>
                        </div>
                    </Col>
                    <Col size="12">
                        <ViewedProducts />
                    </Col>
                </Row>
            ) : (<Loading
                color="white"
            />)}
            {/* </Container> */}
        </div>
    )
}

export default Products;