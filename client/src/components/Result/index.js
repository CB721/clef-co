import React from "react";
import Card from '@material-ui/core/Card';
import "./style.css";

function Result(props) {
    return (
        <div>
            <Card onClick={props.goToProduct(props.productLink)} className="result">
                    <h3>
                        {props.productName}
                    </h3>
                    <p>
                        {props.productDescription}
                    </p>
            </Card>
        </div>
    )
}

export default Result;