import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import UserNews from "../components/UserNews";
import Order from "../components/Order";
import moment from "moment";
import headerImages from "../pages/Assets/Data/profile-headers.json";
import profileImages from "../pages/Assets/Data/profile-status.json";
import "./Assets/style.css";

class User extends Component {
    state = {
        firstName: "Kara",
        joinedDate: "2018-03-21",
        headerImage: "",
        statusImage: "",
        userStatus: "beginner",
        editContact: false,
    }
    componentDidMount() {
        this.generateRandomImage();
        this.determineStatus(this.state.joinedDate);
    }
    generateRandomImage() {
        const imagesArr = headerImages;
        const index = Math.floor((Math.random() * imagesArr.length));
        this.setState({
            headerImage: imagesArr[index].image
        });
    }
    determineStatus(dateJoined) {
        const today = moment().format("YYYY-MM-DD");
        if (moment(today).diff(dateJoined, 'days') < 7) {
            this.setState({
                statusImage: profileImages[0].image,
                userStatus: "beginner"
            });
        }
        if (moment(today).diff(dateJoined, 'days') >= 7 &&
            moment(today).diff(dateJoined, 'months') < 1) {
            this.setState({
                statusImage: profileImages[1].image,
                userStatus: "novice"
            });
        }
        if (moment(today).diff(dateJoined, 'months') >= 1 &&
            moment(today).diff(dateJoined, 'years') < 1) {
            this.setState({
                statusImage: profileImages[2].image,
                userStatus: "expert"
            });
        }
        if (moment(today).diff(dateJoined, 'years') >= 1) {
            this.setState({
                statusImage: profileImages[3].image,
                userStatus: "master"
            });
        }
    }
    editProfile = () => (event) => {
        event.preventDefault();
        const edit = this.state.editContact;
        this.setState({
            editContact: !edit
        });
    }
    render() {
        return (
            <div className="user-profile-background">
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            {this.state.headerImage ? (
                                <img src={this.state.headerImage} alt="User" className="add-shadow" id="search-top-image"></img>
                            ) : (<div />)}

                        </Col>
                        <Col size="md-12">
                            <h1 className="white f-top-pad">
                                Welcome {this.state.firstName}!
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">
                            <Row>
                                <Col size="md-4">
                                    <ProfileCard
                                        image={this.state.statusImage}
                                        status={this.state.userStatus}
                                        firstName={this.state.firstName}
                                        email="wifey@cb721.com"
                                        phone="2064252530"
                                        address="800 Occidental Ave S, Seattle, WA 98134"
                                        joinedDate={this.state.joinedDate}
                                        edit={this.state.editContact}
                                        editAction={this.editProfile()}
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
                </Container>
            </div>
        )
    }
}

export default User;