import React from "react";
import "./style.css";

function deleteAccount(props) {
    return (
        <div className="delete-account-section">
            <div className={props.card}>
                <div className="delete-card-face delete-card-front">
                    <div className="delete-text" onClick={props.flip}>
                        Delete Account
                    </div>
                    <div className="waves" />
                </div>
                <div className="delete-card-face delete-card-back">
                    <div className="confirmation-message">
                        Are you sure?
                </div>
                    <button className="dont-delete-button" onClick={props.flip}>
                        No, take me back!
                    </button>
                    <button className="delete-account-button" onClick={props.delete}>
                        Yes, delete account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default deleteAccount;