import React from 'react';
import "./style.css";

function ProductButton(props) {
    function goToProductPage(event) {
        event.preventDefault();
        window.location.href = "/shop/product" + props.id;
    }
    return (
        <button className="explore" onClick={(event) => goToProductPage(event)}>
            Explore
        </button>
    )
}

export default ProductButton;