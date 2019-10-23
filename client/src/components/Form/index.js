import React from "react";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.css";

function Form(props) {
    return (
        <div className="purple">
            <FormControl
                fullWidth={true}
            >
                <h6 className="form-titles text-shadow">
                    Email Address
                </h6>
                <Input
                    className="text-shadow"
                    inputProps={{
                        'aria-label': 'email',
                    }}
                />
                <h6 className="form-titles text-shadow">
                    Subject
                </h6>
                <Input
                    inputProps={{
                        'aria-label': 'subject',
                    }}
                />
                <h6 className="form-titles text-shadow">
                    Description
                </h6>
                <Input
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <h6 className="form-titles text-shadow">
                    Select a Product
                </h6>
                <Select
                    value={props.value}
                    onChange={props.handleDropDownChange}
                    name="products"
                >
                    <MenuItem value={"Product One"}>Product One</MenuItem>
                    <MenuItem value={"Product Two"}>Product Two</MenuItem>
                    <MenuItem value={"Product Three"}>Product Three</MenuItem>
                </Select>
            </FormControl>
            <div className="form-titles">
                {props.button}
            </div>
        </div>
    )
}

export default Form;