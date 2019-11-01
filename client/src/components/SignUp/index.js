import React from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function SignUp(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });
    return (
        <div className="purple login-form">
            <MuiThemeProvider theme={theme}>
                <FormControl fullWidth={true}>
                    <span className={props.errorClass}>
                        {props.formMessage}
                    </span>
                    <h6 className="form-titles">
                        First Name
                    </h6>
                    <Input
                        value={props.first}
                        name="first"
                        onChange={props.handleInputChange}
                        type="text"
                        inputProps={{
                            'aria-label': 'name',
                        }}
                    />
                    <h6 className="form-titles">
                        Last Name
                    </h6>
                    <Input
                        value={props.last}
                        name="last"
                        onChange={props.handleInputChange}
                        type="text"
                        inputProps={{
                            'aria-label': 'name',
                        }}
                    />
                    <h6 className="form-titles">
                        Email Address
                    </h6>
                    <Input
                        value={props.email}
                        name="email"
                        onChange={props.handleInputChange}
                        type="text"
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                    <h6 className="form-titles">
                        Password
                    </h6>
                    <Input
                        value={props.password}
                        name="password"
                        onChange={props.handleInputChange}
                        type="password"
                        inputProps={{
                            'aria-label': 'password',
                        }}
                    />
                    <h6 className="form-titles">
                        Re-type Password
                    </h6>
                    <Input
                        value={props.conPassword}
                        name="conPassword"
                        onChange={props.handleInputChange}
                        type="password"
                        inputProps={{
                            'aria-label': 'password',
                        }}
                    />
                </FormControl>
            </MuiThemeProvider>
            <div className="form-titles">
                {props.button}
            </div>
        </div>
    )
}

export default SignUp;