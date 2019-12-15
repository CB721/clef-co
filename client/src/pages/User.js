import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Col, Row } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import UserNews from "../components/UserNews";
import Order from "../components/Order";
import Loading from "../components/Loading";
import DeleteAccount from "../components/DeleteAccount";
import moment from "moment";
import ViewedProducts from "../components/ViewedProducts";
import headerImages from "../pages/Assets/Data/profile-headers.json";
import profileImages from "../pages/Assets/Data/profile-status.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../utilities/api";
import { css } from 'glamor';
import "./Assets/style.css";

function User() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [secondaryAddress, setSecondaryAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [headerImage, setheaderImage] = useState("");
    const [statusImage, setstatusImage] = useState("");
    const [userStatus, setuserStatus] = useState("");
    const [editContact, setEditContact] = useState(false);
    const [deleteCard, setDeleteCard] = useState("delete-card");
    const [cardClass, setCardClass] = useState("profile-card add-shadow");
    const [deleteOption, setDeleteOption] = useState(false);
    const [confirmDeleteOption, setconfirmDeleteOption] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const orders = useSelector(state => state.orders);
    const [allNews, setAllNews] = useState([]);
    const [showOrders, setShowOrders] = useState(false);

    function validateUser(status) {
        if (status) {

        } else {
            sessionStorage.clear();
            window.location.href = "/login";
        }
    }
    useEffect(() => {
        if (window.sessionStorage.logged_in) {
            API.veriftyUserLoggedIn(window.sessionStorage.id, window.sessionStorage.token)
                .then(res => validateUser(res.data))
                .catch(err => console.log(err))

        } else {
            window.location.href = "/login";
        }
    }, []);
    useEffect(() => {
        if (window.sessionStorage.logged_in && window.sessionStorage.id && window.sessionStorage.token.length >= 64) {
            generateRandomImage();
            determineStatus(window.sessionStorage.joined_date);
            setUpUser();
            setTimeout(function () {
                toast("Welcome back " + window.sessionStorage.first_name + "!", {
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
            }, 2000)
        } else {
            window.location.href = "/login";
        }
    }, []);
    useEffect(() => {
        API.getUserReviews(window.sessionStorage.id)
            .then(res =>
                setNews(res.data.results)
            )
            .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        setAllNews(allNews => [...allNews, orders[0]]);
    }, [orders])
    useEffect(() => {
        API.getContactFormByUser(window.sessionStorage.id)
            .then(res =>
                setNews(res.data.results)
            )
            .catch(err => console.log(err));
    }, []);
    function setNews(data) {
        setAllNews(allNews => [...allNews, data[data.length - 1]]);
    }
    function setUpUser() {
        setFirst(window.sessionStorage.first_name);
        setJoinedDate(window.sessionStorage.joined_date);
        setLast(window.sessionStorage.last_name);
        setEmail(window.sessionStorage.email);
        if (window.sessionStorage.phone) {
            setPhone(window.sessionStorage.phone);
        } else {
            setPhone("");
        }
        if (window.sessionStorage.secondary_address) {
            setSecondaryAddress(window.sessionStorage.secondary_address);
        } else {
            setSecondaryAddress("");
        }
        if (window.sessionStorage.street_address) {
            setStreetAddress(window.sessionStorage.street_address);
        } else {
            setStreetAddress("");
        }
        if (window.sessionStorage.city) {
            setCity(window.sessionStorage.city);
        } else {
            setCity("");
        }
        if (window.sessionStorage.user_state) {
            setState(window.sessionStorage.user_state);
        } else {
            setState("");
        }
        if (window.sessionStorage.zip_code) {
            setZip(window.sessionStorage.zip_code);
        } else {
            setZip("");
        }
        const user = {
            "last_visit": moment().format("YYYY-MM-DD")
        }
        API.updateUser(window.sessionStorage.id, user)
            .then()
            .catch(err => console.log(err));
    }
    function updateUser(newEmail, newPhone, newStreet, newSecond, newCity, newState, newZip) {
        const user = {
            "email": newEmail.trim(),
            "phone": newPhone.trim(),
            "street_address": newStreet.trim(),
            "secondary_address": newSecond.trim(),
            "city": newCity.trim(),
            "user_state": newState.trim(),
            "zip_code": newZip.trim(),
            "last_visit": moment().format("YYYY-MM-DD")
        }
        API.updateUser(window.sessionStorage.id, user)
            .then(
                res => getUser(res.data)
            )
            .catch(err => console.log(err));
    }
    function getUser(data) {
        if (data.results.affectedRows > 0) {
            API.getUser(window.sessionStorage.id)
                .then(res =>
                    updateSession(res.data.results[0])
                )
                .catch(err => console.log(err));
        } else {
            toast("There was problem saving your information.  Please try again later.", {
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
    function updateSession(updatedUser) {
        sessionStorage.setItem("email", updatedUser.email);
        setEmail(updatedUser.email);
        sessionStorage.setItem("phone", updatedUser.phone);
        setPhone(updatedUser.phone);
        sessionStorage.setItem("street_address", updatedUser.street_address);
        setStreetAddress(updatedUser.street_address);
        sessionStorage.setItem("secondary_address", updatedUser.secondary_address);
        setSecondaryAddress(updatedUser.secondary_address);
        sessionStorage.setItem("city", updatedUser.city);
        setCity(updatedUser.city);
        sessionStorage.setItem("user_state", updatedUser.user_state);
        setState(updatedUser.user_state);
        sessionStorage.setItem("zip_code", updatedUser.zip_code);
        setZip(updatedUser.zip_code);
        sessionStorage.setItem("last_visit", updatedUser.last_visit);
        setEditContact(false);
        toast("Updates saved!", {
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
    function generateRandomImage() {
        const imagesArr = headerImages;
        const index = Math.floor((Math.random() * imagesArr.length));
        setheaderImage(imagesArr[index].image);
    }
    function triggerHolidayPromos() {
        const todayMonth = moment().format("MM-DD");
        const holidayStart = "11-01";
        const holidayEnd = "12-24";
        const xmas = "12-25";
        const finalSalesStart = "12-26";
        const finalSatesEnd = "01-02";
        setTimeout(function () {
            if (moment(todayMonth).isBetween(holidayStart, holidayEnd)) {
                toast("Give the gift of music this holiday season!", {
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
            } else if (moment(todayMonth).isSame(xmas)) {
                toast("Didn't get what you wanted?", {
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
                toast("Get the gift you want today!", {
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
            } else if (moment(todayMonth).isBetween(finalSalesStart, finalSatesEnd)) {
                toast("New year, new gear!", {
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
        }, 12500);
    }
    function determineStatus(dateJoined) {
        const today = moment().format("YYYY-MM-DD");
        triggerHolidayPromos();
        if (moment(today).diff(dateJoined, 'days') < 7) {
            setstatusImage(profileImages[0].image);
            setuserStatus("beginner");
            if (moment(today).diff(dateJoined, 'days') % 3 === 0) {
                toast("Thanks for being a member for " + moment(today).diff(dateJoined, 'days'), {
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
        if (moment(today).diff(dateJoined, 'days') >= 7 &&
            moment(today).diff(dateJoined, 'months') < 1) {
            setstatusImage(profileImages[1].image);
            setuserStatus("novice");
            if (moment(today).diff(dateJoined, 'weeks') % 3 === 0) {
                setTimeout(function () {
                    toast("What music have you done lately?", {
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
                }, 25000);
            }
        }
        if (moment(today).diff(dateJoined, 'months') >= 1 &&
            moment(today).diff(dateJoined, 'years') < 1) {
            setstatusImage(profileImages[2].image);
            setuserStatus("expert");
            setTimeout(function () {
                if (moment(today).diff(dateJoined, 'days') % 17 === 0) {
                    toast("Have you though of writing a review?", {
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
                } else if (moment(today).diff(dateJoined, 'weeks') % 17 === 0) {
                    toast("We really appreciate having you as a member " + window.sessionStorage.first_name, {
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
            }, 25000);
        }
        if (moment(today).diff(dateJoined, 'years') >= 1) {
            setstatusImage(profileImages[3].image);
            setuserStatus("master");
            setTimeout(function () {
                if (moment(today).diff(dateJoined, 'years') % 1 === 0) {
                    toast("One year already?  Wow!", {
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
                } else if (moment(today).diff(dateJoined, 'months') % 7 === 0) {
                    toast("What music have you done lately?", {
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
                } else if (moment(today).diff(dateJoined, 'weeks') % 23 === 0) {
                    toast("Have you though of writing a review?", {
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
            }, 25000);
        }
    }
    function EditProfile(event) {
        event.preventDefault();
        const edit = editContact;
        setEditContact(!edit);
        if (editContact) {
            setCardClass("profile-card add-shadow");
        } else {
            setCardClass("profile-card-edit add-shadow");
        }
    }
    function flipCard(event) {
        event.preventDefault();
        if (deleteCard === "delete-card") {
            setDeleteCard("delete-card is-flipped");
            setDeleteOption(true);
        } else {
            setDeleteCard("delete-card");
            setDeleteOption(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    function deleteAccount() {
        setconfirmDeleteOption(true);
    }
    function confirmDelete(password) {
        API.deleteUser(window.sessionStorage.id, window.sessionStorage.email, password)
            .then(res =>
                validateAccountDelete(res.data)
            )
            .catch(err => console.log(err));
    }
    function validateAccountDelete(res) {
        if (res === "Incorrect password") {
            setPasswordError("Incorrect Password");
        } else {
            sessionStorage.clear();
            window.location.href = "/create_account";
        }
    }
    function displayOrders(event) {
        event.preventDefault();
        setShowOrders(!showOrders);
    }
    return (
        <div>
            {window.sessionStorage.logged_in ? (
                <div className="page-container">
                    <Row no-gutters>
                        <Col size="md-12">
                            {headerImage ? (
                                <img src={headerImage} alt="User" className="add-shadow rounded-corners" id="search-top-image"></img>
                            ) : (<div />)}

                        </Col>
                        <Col size="md-12">
                            <h1 className="white f-top-pad">
                                Welcome {first}!
                            </h1>
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="sm-1" />
                        <Col size="sm-10">
                            <Row no-gutters>
                                <Col size="sm-4 12">
                                    <ProfileCard
                                        cardClass={cardClass}
                                        image={statusImage}
                                        status={userStatus}
                                        firstName={first}
                                        email={email}
                                        phone={phone}
                                        streetAddress={streetAddress}
                                        secondaryAddress={secondaryAddress}
                                        city={city}
                                        state={state}
                                        zip={zip}
                                        joinedDate={joinedDate}
                                        edit={editContact}
                                        editAction={EditProfile}
                                        updateUser={updateUser}
                                    />
                                </Col>
                                <Col size="sm-2" />
                                <Col size="sm-6">
                                    {allNews.length > 3 ? (
                                        <UserNews
                                            news={allNews}
                                        />
                                    ) : (
                                            <Loading
                                                color="white"
                                            />
                                        )}
                                </Col>
                            </Row>
                        </Col>
                        <Col size="sm-1" />
                    </Row>
                    <ViewedProducts />
                    <Row>
                        <Col size="12">
                            {showOrders ? (
                                <div>
                                    <Row no-gutters>
                                        <Col size="md-12">
                                            <div
                                                className="hide-orders rounded-corners add-shadow"
                                                onClick={(event) => displayOrders(event)}
                                            >
                                                <h1 className="white">
                                                    Orders
                                                </h1>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row no-gutters>
                                        <Col size="md-1" />
                                        <Col size="md-10">
                                            <div className="order-area">
                                                {orders.map(order =>
                                                    <Fade bottom key={order.order_id}>
                                                        <Order
                                                            id={order.order_id}
                                                            number={order.order_id}
                                                            date={order.checked_out_at.split('T')[0]}
                                                            lineItems={order.line_items}
                                                            name={first + " " + last}
                                                        />
                                                    </Fade>
                                                )}
                                            </div>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                </div>
                            ) : (
                                    <Fade bottom>
                                        <div
                                            className="hide-orders rounded-corners add-shadow"
                                            onClick={(event) => displayOrders(event)}
                                        >
                                            <h1 className="white">
                                                Show Orders
                                            </h1>
                                        </div>
                                    </Fade>
                                )}
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="md-3" />
                        <Col size="md-6">
                            <Fade bottom>
                                <DeleteAccount
                                    flip={flipCard}
                                    card={deleteCard}
                                    delete={deleteAccount}
                                    confirmDelete={confirmDelete}
                                    deleteOption={deleteOption}
                                    confirmDeleteOption={confirmDeleteOption}
                                    passwordError={passwordError}
                                />
                            </Fade>
                        </Col>
                        <Col size="md-3" />
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
                </div >
            ) : (<div />)
            }
        </div >
    )
}

export default User;