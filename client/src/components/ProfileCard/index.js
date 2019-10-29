import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import "./style.css";

function ProfileCard(props) {
    console.log(props.image)
    return (
        <div className="profile-card">
            <div className="profile-card-image">
                <img src={props.image} alt={props.status} />
            </div>
            <div className="profile-card-contact">
                <div className="profile-card-name white">
                    <h1>
                        {props.firstName}
                    </h1>
                </div>
                <div className="profile-card-email white">
                    <span>
                        {props.email}
                    </span>
                </div>
                <div className="profile-card-phone white">
                    <span>
                        {props.phone}
                    </span>
                </div>
            </div>
            <div className="profile-card-member-info">
                <div className="profile-card-joined-date white">
                    <span>
                        Member since {props.joinedDate}
                    </span>
                </div>
                <div className="profile-card-status white">
                    <span>
                        {props.status}
                    </span>
                </div>
            </div>
            <div className="waves" />
        </div>
    )
}

export default ProfileCard;