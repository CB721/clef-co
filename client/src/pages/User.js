import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import UserNews from "../components/UserNews";
import Order from "../components/Order";
import DeleteAccount from "../components/DeleteAccount";
import moment from "moment";
import headerImages from "../pages/Assets/Data/profile-headers.json";
import profileImages from "../pages/Assets/Data/profile-status.json";
import API from "../utilities/api";
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

    useEffect(() => {
        generateRandomImage();
        determineStatus(window.sessionStorage.joined_date);
        setUpUser();
    })
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
            "last_visit": moment().format("YYYY-MM-DDTHH:mm:ss")
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
    }
    function generateRandomImage() {
        const imagesArr = headerImages;
        const index = Math.floor((Math.random() * imagesArr.length));
        setheaderImage(imagesArr[index].image);
    }
    function determineStatus(dateJoined) {
        const today = moment().format("YYYY-MM-DD");
        if (moment(today).diff(dateJoined, 'days') < 7) {
            setstatusImage(profileImages[0].image);
            setuserStatus("beginner");
        }
        if (moment(today).diff(dateJoined, 'days') >= 7 &&
            moment(today).diff(dateJoined, 'months') < 1) {
            setstatusImage(profileImages[1].image);
            setuserStatus("novice");
        }
        if (moment(today).diff(dateJoined, 'months') >= 1 &&
            moment(today).diff(dateJoined, 'years') < 1) {
            setstatusImage(profileImages[2].image);
            setuserStatus("expert");
        }
        if (moment(today).diff(dateJoined, 'years') >= 1) {
            setstatusImage(profileImages[3].image);
            setuserStatus("master");
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
        } else {
            setDeleteCard("delete-card");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    function deleteAccount(id, event) {
        event.preventDefault();
        console.log("Delete account");
        window.location.href = "/create_account";
    }
    return (
        <div className="user-profile-background">
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        {headerImage ? (
                            <img src={headerImage} alt="User" className="add-shadow" id="search-top-image"></img>
                        ) : (<div />)}

                    </Col>
                    <Col size="md-12">
                        <h1 className="white f-top-pad">
                            Welcome {first}!
                            </h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-1" />
                    <Col size="md-10">
                        <Row>
                            <Col size="md-4">
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
                <Row>
                    <Col size="md-12">
                        <h1 className="white f-top-pad">
                            Orders
                            </h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-1" />
                    <Col size="md-10">
                        {/* map orders by date */}
                        <Order
                            date="October 25, 2019"
                            total="257.45"
                            name="Kara"
                            number="1234"
                        />
                        <Order
                            date="August 10, 2018"
                            total="63.49"
                            name="Kara"
                            number="1233"
                        />
                    </Col>
                    <Col size="md-1" />
                </Row>
                <Row>
                    <Col size="md-3" />
                    <Col size="md-6">
                        <DeleteAccount
                            flip={flipCard}
                            card={deleteCard}
                            delete={deleteAccount}
                        />
                    </Col>
                    <Col size="md-3" />
                </Row>
            </Container>
        </div>
    )
}

export default User;