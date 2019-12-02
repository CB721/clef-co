import React from 'react';
import Button from '../Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import "./style.css";

function Modal(props) {
    let total = 0;
    for (let i = 0; i < props.products.length; i++) {
        total += props.products[i][0].price;
    }
    function Login(event) {
        event.preventDefault();
        window.location.href = "/login";
    }
    return (
        <div className={props.class}>
            {props.open ? (
                <div>
                    <div className="modal-header">
                        <div className="modal-col-4" />
                        <div className="modal-col-4 modal-center-text ">
                            <h2>
                                {props.title} Bundle
                            </h2>
                        </div>
                        <div className="modal-col-4 modal-right-text">
                            <IconButton
                                onClick={props.handleClose}
                            >
                                <CloseIcon className="white" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="modal-description-area">
                        <div className="modal-col-12">
                            <p>
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className="modal-products">
                        <div className="modal-col-6">
                            {props.products.map(product => (
                                <div
                                    key={product[0].id}
                                    className="product-modal"
                                >
                                    <img src={product[0].image_link} alt={product[0].product_name} className="modal-product-img" />
                                    <div className="modal-product-name">
                                        <h4 className="white">
                                            {product[0].product_name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="modal-col-6">
                            <div className="bundle-check-out">
                                {props.products.map(product => (
                                    <h5 key={product[0].id}>
                                        ${product[0].price}
                                    </h5>
                                ))}
                                <div className="bundle-line" />
                                <h4 className="white bundle-total">
                                    ${total.toFixed(2)}
                                </h4>
                                {props.loggedIn ? (
                                    <Button
                                    action={props.addBundleToCart}
                                    buttonClass="cart-add-button white"
                                    text="Add To Cart"
                                />
                                ) : (
                                    <Button
                                    action={(event) => Login(event)}
                                    buttonClass="cart-add-button white"
                                    text="Login to add to cart"
                                />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ) : (<div />)}
        </div>
    )
}

export default Modal;