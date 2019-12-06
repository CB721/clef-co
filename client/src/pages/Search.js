import React, { useEffect, useState } from "react";
import { Col, Row } from "../components/Grid";
import API from "../utilities/api";
import Result from "../components/Result";
import Fade from 'react-reveal/Fade';
import LoginForm from "../components/Login";
import Button from "../components/Button";
import ViewedProducts from "../components/ViewedProducts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Assets/style.css";

function Search() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [errorClass, setErrorClass] = useState("");
    const [formMessage, setFormMessage] = useState("");

    useEffect(() => {
        if (window.sessionStorage.id) {
            searchOrders();
            searchContactForms();
            searchProducts();
        } else {
            searchProducts();
        }
    }, []);

    function goToProduct(event, link) {
        event.preventDefault();
        window.location.href = "/shop/product/" + link;
    }
    function searchProducts() {
        API.searchAllProducts(window.sessionStorage.search)
            .then(res =>
                updateResults(res.data.results)
            )
            .catch(err => console.log(err));
    }
    function searchOrders() {
        API.searchUserOrders(window.sessionStorage.id, window.sessionStorage.search)
            .then(res =>
                updateResults(res.data.results)
            )
            .catch(err => console.log(err));
    }
    function searchContactForms() {
        API.searchUserContactForms(window.sessionStorage.id, window.sessionStorage.search)
            .then(res =>
                updateResults(res.data.results)
            )
            .catch(err => console.log(err));
    }
    function updateResults(data) {
        for (let i = 0; i < data.length; i++) {
            setResults(results => [...results, data[i]]);
        }
    }
    function handleInputChange(event) {
        let value = event.target.value.trim();
        setSearch(value);
    }
    function handleFormSubmit() {
        setErrorClass("");
        if (search) {
            sessionStorage.setItem("search", search);
            setSearch("");
            if (window.sessionStorage.id) {
                searchOrders();
                searchContactForms();
                searchProducts();
            } else {
                searchProducts();
            }
        } else {
            setErrorClass("form-titles fade-error-message");
            setFormMessage("Search field cannot be empty");
        }
    }


    return (
        <div className="page-container">
            <Row no-gutters>
                <Col size="md-12">
                    <img src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1616&q=80" alt="Search" className="add-shadow rounded-corners" id="search-top-image"></img>
                </Col>
                {results.length > 0 ? (
                    <Col size="md-12">
                        <h2 className="white f-top-pad padding-bottom">
                            Results
                            </h2>
                    </Col>
                ) : (
                        <Col size="md-12">
                            <Row no-gutters>
                                <Col size="md-12">
                                    <h2 className="white f-top-pad padding-bottom">
                                        Search
                                    </h2>
                                </Col>
                            </Row>
                            <Row no-gutters>
                                <Col size="3" />
                                <Col size="sm-6 12">
                                    <LoginForm
                                        type="Search"
                                        errorClass={errorClass}
                                        formMessage={formMessage}
                                        handleInputChange={handleInputChange}
                                        email={search}
                                        button={<Button
                                            action={handleFormSubmit}
                                            buttonClass="explore"
                                            text="Search"
                                        />}
                                    />
                                </Col>
                                <Col size="3" />
                            </Row>
                        </Col>
                    )}
            </Row>
            <Row no-gutters>
                <Col size="md-1" />
                <Col size="md-10">
                    {results.map((result, index) => (
                        <Fade bottom key={index}>
                            <Result
                                created={result.created_at}
                                checkedOut={result.checked_out_at}
                                orderID={result.order_id}
                                productID={result.product_id}
                                productIDProduct={result.id}
                                email={result.user_email}
                                subject={result.user_subject}
                                formDescription={result.user_description}
                                productDescription={result.product_description}
                                image={result.image_link}
                                price={result.price}
                                productName={result.product_name}
                                hardware={result.hardware}
                                software={result.software}
                                instrumentType={result.instrument_type}
                                goToProduct={goToProduct}
                            />
                        </Fade>
                    ))}
                </Col>
                <Col size="md-1" />
            </Row>
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
            ) : (<div />)}
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
        </div>
    )
}

export default Search;