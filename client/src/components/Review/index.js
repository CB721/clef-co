import React, { useEffect, useState } from "react";
import { Col, Row } from "../Grid";
import ImageOverlay from "../ImageOverlay";
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import { Textfit } from 'react-textfit';
import moment from "moment";
import "./style.css";

function Review(props) {
    const today = moment().format("YYYY-MM-DD");
    const [userStatus, setuserStatus] = useState("");

    useEffect(() => {
        if (moment(today).diff(props.dateJoined, 'days') < 7) {
            setuserStatus("beginner");
        }
        if (moment(today).diff(props.dateJoined, 'days') >= 7 &&
            moment(today).diff(props.dateJoined, 'months') < 1) {
            setuserStatus("novice");
        }
        if (moment(today).diff(props.dateJoined, 'months') >= 1 &&
            moment(today).diff(props.dateJoined, 'years') < 1) {
            setuserStatus("expert");
        }
        if (moment(today).diff(props.dateJoined, 'years') >= 1) {
            setuserStatus("master");
        }
    }, [props.dateJoined])

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
                                rating={props.rating}
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
                                {props.createdAt}
                            </Textfit>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="f-top-pad padding-bottom">
                <Row>
                    <Col size="lg-3 2">
                        <ImageOverlay
                            status={userStatus}
                        />
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
                                <Typography variant="subtitle1" className="white">
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