import React from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.css";

function Form(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });
    return (
        <div className="purple contact-form">
            <MuiThemeProvider theme={theme}>
                <FormControl
                    fullWidth={true}
                >
                    <span className={props.errorClass}>
                        {props.formMessage}
                    </span>
                    <h6 className="form-titles">
                        Email Address
                    </h6>
                    <Input
                        value={props.email}
                        name="email"
                        onChange={props.handleInputChange}
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                    <h6 className="form-titles">
                        Subject
                    </h6>
                    <Input
                        value={props.subject}
                        name="subject"
                        onChange={props.handleInputChange}
                        inputProps={{
                            'aria-label': 'subject',
                        }}
                    />
                    <h6 className="form-titles">
                        Description
                    </h6>
                    <Input
                        value={props.description}
                        name="description"
                        onChange={props.handleInputChange}
                        inputProps={{
                            'aria-label': 'description',
                        }}
                    />
                    <h6 className="form-titles">
                        Select a Product
                    </h6>
                    <Select
                        value={props.value}
                        onChange={props.handleInputChange}
                        name="productSelection"
                    >
                        {props.products.map(product => (
                            <MenuItem key={product.id} value={product.id}>{product.product_name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </MuiThemeProvider>
            <div className="form-titles">
                {props.button}
            </div>
        </div>
    )
}

export default Form;