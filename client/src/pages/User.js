import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileCard from "../components/ProfileCard";
import moment from "moment";
import "./Assets/style.css";

class User extends Component {
    state = {
        headerImages: [
            "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1495305379050-64540d6ee95d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
            "https://images.unsplash.com/photo-1508515250198-d9cf6419470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80",
            "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
            "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            "https://images.unsplash.com/photo-1546708497-5206823f291b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
            "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
            "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        ],
        statusImages: [
            "https://cdn140.picsart.com/272396747028211.png?r1024x1024",
            "https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-lovely-gray-grey-elephant-cartoon-png-image_474383.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqAjtr-sK2raEMi5y7YoFa7mSFjdF7s-8MpdyT1cgXcrjp6Avm",
            "https://www.pinclipart.com/picdir/big/192-1927745_sleepy-cub-cartoon-baby-lion-clipart.png",
        ],
        firstName: "Kara",
        joinedDate: "2019-10-27",
        headerImage: "",
        statusImage: "",
        userStatus: "beginner"
    }
    componentDidMount() {
        this.generateRandomImage();
        this.determineStatus(this.state.joinedDate);
    }
    generateRandomImage() {
        const imagesArr = this.state.headerImages;
        const index = Math.floor((Math.random() * imagesArr.length));
        this.setState({
            headerImage: imagesArr[index]
        });
    }
    determineStatus(dateJoined) {
        const today = moment().format("YYYY-MM-DD");
        if (moment(today).diff(dateJoined, 'days') < 7) {
            this.setState({
                statusImage: this.state.statusImages[0],
                userStatus: "beginner"
            });
        }
        if (moment(today).diff(dateJoined, 'days') >= 7 &&
            moment(today).diff(dateJoined, 'months') < 1) {
            this.setState({
                statusImage: this.state.statusImages[1],
                userStatus: "novice"
            });
        }
        if (moment(today).diff(dateJoined, 'months') >= 1 &&
            moment(today).diff(dateJoined, 'years') < 1) {
            this.setState({
                statusImage: this.state.statusImages[2],
                userStatus: "expert"
            });
        }
        if (moment(today).diff(dateJoined, 'years') >= 1) {
            this.setState({
                statusImage: this.state.statusImages[3],
                userStatus: "master"
            });
        }
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
                                        joinedDate={this.state.joinedDate}
                                    />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default User;