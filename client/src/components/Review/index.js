import React from "react";
import Typography from '@material-ui/core/Typography';
import "./style.css";

function Review(props) {
    return (
        <div className="review">
                <img src={props.reviewerImage} alt={props.reviewerName} className="review-image"></img>
                <Typography variant="h5" component="h3" className="purple">
                    {props.reviewerName}
                </Typography>
                <Typography component="q" className="review-text purple">
                    {props.review}
                </Typography>
        </div>
    )
}

export default Review;