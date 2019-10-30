import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function ProfileCard(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });
    return (
        <div className="profile-card">
            <MuiThemeProvider theme={theme}>
                <IconButton onClick={props.editAction} className="edit-icon">
                    <CreateIcon
                        className="profile-edit-icon"
                        color="primary"
                    />
                </IconButton>
            </MuiThemeProvider>
            <div className="profile-card-image">
                <img src={props.image} alt={props.status} />
            </div>
            <div className="profile-card-contact">
                <div className="profile-card-name white">
                    <h1>
                        {props.firstName}
                    </h1>
                </div>
                {props.edit ? (
                    <FormControl fullWidth={true}>
                        <span>
                            Email Address
                        </span>
                        <Input
                            placeholder={props.email}
                            type="text"
                            className="text-shadow"
                            inputProps={{
                                'aria-label': 'email',
                            }}
                        />
                        <span>
                            Phone Number
                        </span>
                        <Input
                            placeholder={props.phone}
                            type="number"
                            className="text-shadow"
                            inputProps={{
                                'aria-label': 'email',
                            }}
                        />
                    </FormControl>
                ) : (
                        <div>
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
                            <div className="profile-card-address white">
                                <span>
                                    {props.address}
                                </span>
                            </div>
                        </div >
                    )
                }
            </div >
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
        </div >
    )
}

export default ProfileCard;