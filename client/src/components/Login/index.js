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
        <div className="white login-form">
            <FormControl fullWidth={true}>
                <h6 className="form-titles text-shadow">
                    Email Address
                </h6>
                <MuiThemeProvider theme={theme}>
                    <Input
                        value={props.email}
                        name="email"
                        onChange={props.handleInputChange}
                        type="text"
                        className="text-shadow"
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                </MuiThemeProvider>
                <h6 className="form-titles text-shadow">
                    Password
                </h6>
                <MuiThemeProvider theme={theme}>
                    <Input
                        value={props.password}
                        name="password"
                        onChange={props.handleInputChange}
                        type="password"
                        className="text-shadow"
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