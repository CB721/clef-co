import React from "react";
import Typography from '@material-ui/core/Typography';
import "./style.css";

function Review(props) {
    return (
        <div className="review">
                <img src={props.reviewerImage} alt={props.reviewerName} className="review-image"></img>
                <Typography variant="h5" component="h3">
                    {props.reviewerName}
                </Typography>
                <Typography component="p" className="review-text">
                    {props.review}
                </Typography>
        </div>
    )
}

export default Review;