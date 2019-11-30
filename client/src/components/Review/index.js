import React, { useEffect, useState } from "react";
import { Col, Row } from "../Grid";
import Typography from '@material-ui/core/Typography';
import profileImages from "../../pages/Assets/Data/profile-status.json";
import StarRatings from 'react-star-ratings';
import { Textfit } from 'react-textfit';
import moment from "moment";
import "./style.css";

function Review(props) {
    console.log(props.createdAt)
    const today = moment().format("YYYY-MM-DD");
    const [statusImage, setstatusImage] = useState("");
    const [userStatus, setuserStatus] = useState("");
    const [createdAt, setCreatedAt] = useState("");


    useEffect(() => {
        if (moment(today).diff(props.dateJoined, 'days') < 7) {
            setstatusImage(profileImages[0].image);
            setuserStatus("beginner");
        }
        if (moment(today).diff(props.dateJoined, 'days') >= 7 &&
            moment(today).diff(props.dateJoined, 'months') < 1) {
            setstatusImage(profileImages[1].image);
            setuserStatus("novice");
        }
        if (moment(today).diff(props.dateJoined, 'months') >= 1 &&
            moment(today).diff(props.dateJoined, 'years') < 1) {
            setstatusImage(profileImages[2].image);
            setuserStatus("expert");
        }
        if (moment(today).diff(props.dateJoined, 'years') >= 1) {
            setstatusImage(profileImages[3].image);
            setuserStatus("master");
        }
    }, [props.dateJoined])
    useEffect(() => {
        const dateRemoveHours = props.createdAt.split("T")[0];
        const dateRemoveDash = dateRemoveHours.split("-");
        setCreatedAt(moment(dateRemoveDash[1] + " " + dateRemoveDash[2] + " " + dateRemoveDash[0]).format("MMM Do YYYY"));
    }, [props.createdAt])


    return (
        <div className="review shadow-effect hover-shadow-review">
            <Row>
                <Col size="12">
                    <Row no-gutters>
                        <Col size="lg-6 12">
                            <Textfit
                                mode="single"
                                className="white"
                                min={10}
                                max={20}
                            >
                                {props.product}
                            </Textfit>
                        </Col>
                        <Col size="lg-4 md-8 6">
                            <StarRatings
                                rating={props.rating.data[0]}
                                numberOfStars={5}
                                starDimension="0.7rem"
                                starRatedColor="rgb(255, 255, 255)"
                                starEmptyColor="rgba(156, 128, 176, 0)"
                                name='rating'
                            />
                        </Col>
                        <Col size="lg-2 md-4 6">
                            <Textfit
                                mode="single"
                                className="white"
                                min={8}
                                max={16}
                            >
                                {createdAt}
                            </Textfit>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="f-top-pad padding-bottom">
                <Row>
                    <Col size="lg-3 2">
                        <img src={statusImage} alt={userStatus} className="review-image"></img>
                    </Col>
                    <Col size="lg-9 10">
                        <Row no-gutters>
                            <Col size="6">
                                <Typography variant="h5" component="h3" className="white">
                                    <Textfit
                                        mode="single"
                                        className="white"
                                        min={10}
                                        max={20}
                                    >
                                        {props.reviewerName}
                                    </Textfit>
                                </Typography>
                            </Col>
                            <Col size="6">
                                <Typography variant="p" component="p" className="white">
                                    <Textfit
                                        mode="single"
                                        className="white"
                                        min={8}
                                        max={15}
                                    >
                                        {userStatus}
                                    </Textfit>
                                </Typography>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col size="md-12">
                    <Typography component="q" className="review-text white">
                        {props.review}
                    </Typography>
                </Col>
            </Row>
        </div>
    )
}

export default Review;