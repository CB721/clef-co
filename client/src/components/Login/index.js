import React from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function Login(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });
    return (
        <div className="purple login-form">
            <FormControl fullWidth={true}>
                <span className={props.errorClass}>
                    {props.formMessage}
                </span>
                <h6 className="form-titles">
                    Email Address
                </h6>
                <MuiThemeProvider theme={theme}>
                    <Input
                        value={props.email}
                        name="email"
                        onChange={props.handleInputChange}
                        type="text"
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                </MuiThemeProvider>
                <h6 className="form-titles">
                    Password
                </h6>
                <MuiThemeProvider theme={theme}>
                    <Input
                        value={props.password}
                        name="password"
                        onChange={props.handleInputChange}
                        type="password"
                        inputProps={{
                            'aria-label': 'password',
                        }}
                    />
                </MuiThemeProvider>
            </FormControl>
            <div className="form-titles">
                {props.button}
            </div>
        </div>
    )
}

export default Login;