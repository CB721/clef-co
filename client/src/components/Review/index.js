import React from "react";
import { Col, Row } from "../Grid";
import Typography from '@material-ui/core/Typography';
import "./style.css";

function Review(props) {
    return (
        <div className="review shadow-effect">
            <Row>
                <Col size="md-7">
                    <img src={props.reviewerImage} alt={props.reviewerName} className="review-image"></img>
                </Col>
                <Col size="md-5">
                    <Typography variant="h5" component="h3" className="white">
                        {props.reviewerName}
                    </Typography>
                </Col>
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