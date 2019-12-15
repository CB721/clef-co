import React, { useState, useEffect } from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Waves from "../Waves";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function DeleteAccount(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#ffffff' }
        },
    });
    const [password, setPassword] = useState("");
    const [hideBack, setHideBack] = useState("hide-delete-card-back");
    const handleSubmit = (event) => {
        event.preventDefault();
        props.confirmDelete(password);
    }
    useEffect(() => {
        if (props.deleteOption) {
            setHideBack("delete-card-face delete-card-back");
        } else {
            setHideBack("hide-delete-card-back");
        }
    }, [props.deleteOption])
    return (
        <div className="delete-account-section">
            <div className={props.card}>
                <div className="delete-card-face delete-card-front">
                    <div className="delete-text" onClick={props.flip}>
                        Delete Account
                    </div>
                    <Waves />
                </div>
                {props.deleteOption ? (
                    <div className={hideBack}>
                        {props.confirmDeleteOption ? (
                            <MuiThemeProvider theme={theme}>
                                <div className="confirmation-message">
                                    {props.passwordError}
                                </div>
                                <FormControl fullWidth={true}>
                                    <Input
                                        onChange={(event) => setPassword(event.target.value)}
                                        value={password}
                                        placeholder="Your password"
                                        name="password"
                                        type="password"
                                    />
                                    <button
                                        className="delete-account-button"
                                        onClick={handleSubmit}
                                    >
                                        Confirm
                                    </button>
                                </FormControl>
                            </MuiThemeProvider>
                        ) : (
                                <div>
                                    <div className="confirmation-message">
                                        Are you sure?
                                    </div>
                                    <button
                                        className="dont-delete-button"
                                        onClick={props.flip}
                                    >
                                        No, take me back!
                                    </button>
                                    <button
                                        className="delete-account-button"
                                        onClick={props.delete}
                                    >
                                        Yes, delete account
                                    </button>
                                </div>
                            )}
                    </div>
                ) : (<div />)}
            </div>
        </div >
    )
}

export default DeleteAccount;