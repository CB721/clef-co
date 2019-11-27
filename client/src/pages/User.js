import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Col, Row, Container } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import UserNews from "../components/UserNews";
import Order from "../components/Order";
import DeleteAccount from "../components/DeleteAccount";
import moment from "moment";
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
    const [deleteCard, setDeleteCard] = useState("");
    const [cardClass, setCardClass] = useState("profile-card");
    const [deleteOption, setDeleteOption] = useState(false);
    const [confirmDeleteOption, setconfirmDeleteOption] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const orders = useSelector(state => state.orders);


    useEffect(() => {
        if (window.sessionStorage.logged_in) {
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
            }, 3000)
        } else {
            window.location.href = "/login";
        }
    }, [])
    function setUpUser() {
        setFirst(window.sessionStorage.first_name);
        setJoinedDate(window.sessionStorage.joined_date);
        setLast(window.sessionStorage.last_name);
        setEmail(window.sessionStorage.email);
        setPhone(window.sessionStorage.phone);
        setSecondaryAddress(window.sessionStorage.secondary_address);
        setStreetAddress(window.sessionStorage.street_address);
        setCity(window.sessionStorage.city);
        setState(window.sessionStorage.user_state);
        setZip(window.sessionStorage.zip_code);
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
                getUser()
            )
            .catch(err => console.log(err));
    }
    function getUser() {
        API.getUser(window.sessionStorage.id)
            .then(res =>
                updateSession(res.data.results[0])
            )
            .catch(err => console.log(err));
    }
    function updateSession(updatedUser) {
        sessionStorage.setItem("email", updatedUser.email);
        sessionStorage.setItem("phone", updatedUser.phone);
        sessionStorage.setItem("street_address", updatedUser.street_address);
        sessionStorage.setItem("secondary_address", updatedUser.secondary_address);
        sessionStorage.setItem("city", updatedUser.city);
        sessionStorage.setItem("user_state", updatedUser.user_state);
        sessionStorage.setItem("zip_code", updatedUser.zip_code);
        sessionStorage.setItem("last_visit", updatedUser.last_visit);
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
        setTimeout(function() {
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
        }, 8500);
    }
    function determineStatus(dateJoined) {
        const today = moment().format("YYYY-MM-DD");
        triggerHolidayPromos();
        if (moment(today).diff(dateJoined, 'days') < 7) {
            setstatusImage(profileImages[0].image);
            setuserStatus("beginner");
            if (moment(today).diff(dateJoined, 'days') % 3 === 0) {
                toast("Thanks for beening a member for " + moment(today).diff(dateJoined, 'days'), {
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
            }
        }
        if (moment(today).diff(dateJoined, 'months') >= 1 &&
            moment(today).diff(dateJoined, 'years') < 1) {
            setstatusImage(profileImages[2].image);
            setuserStatus("expert");
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
        }
        if (moment(today).diff(dateJoined, 'years') >= 1) {
            setstatusImage(profileImages[3].image);
            setuserStatus("master");
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
        }
    }
    function EditProfile(event) {
        event.preventDefault();
        const edit = editContact;
        setEditContact(!edit);
        if (editContact) {
            setCardClass("profile-card");
        } else {
            setCardClass("profile-card-edit");
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
    return (
        <div>
            {window.sessionStorage.logged_in ? (
                <div className="page-container">
                    {/* <Container fluid> */}
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
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Row no-gutters>
                                <Col size="md-4 12">
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
                                <Col size="md-2" />
                                <Col size="md-6">
                                    <UserNews
                                        news={[
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                                        ]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col size="md-1" />
                    </Row>
                    <Row no-gutters>
                        <Col size="md-12">
                            <h1 className="white f-top-pad">
                                Orders
                            </h1>
                        </Col>
                    </Row>
                    <Row no-gutters>
                        <Col size="md-1" />
                        <Col size="md-10">
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
                        </Col>
                        <Col size="md-1" />
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
                    {/* </Container> */}
                </div>
            ) : (<div />)}
        </div>
    )
}

export default User;