import React from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import "./style.css";

function Login(props) {
    return (
        <div className="white login-form">
            <FormControl fullWidth={true}>
                <h6 className="form-titles text-shadow">
                    Email Address
                </h6>
                <Input
                    type="text"
                    className="text-shadow"
                    inputProps={{
                        'aria-label': 'email',
                    }}
                />
                <h6 className="form-titles text-shadow">
                    Password
                </h6>
                <Input
                    type="password"
                    className="text-shadow"
                    inputProps={{
                        'aria-label': 'password',
                    }}
                />
            </FormControl>
            <div className="form-titles">
                {props.button}
            </div>
        </div>
    )
}

export default Login;