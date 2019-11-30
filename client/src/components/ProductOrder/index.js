import React from "react";
import { Col, Row } from "../Grid";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function ProductOrder(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#ffffff' }
        },
    });
    return (
        <FormControl>
            <Col size="md-12">
                <div className="product-shipping white f-top-pad">
                    <Row no-gutters>
                        <Col size="12">
                            <p className="white">
                                ${props.price}
                            </p>
                        </Col>
                        <Col size="12">
                            {props.hardware && props.quantity > 0 ? (
                                <div>
                                    <p>
                                        Orders of $99.99 or more ship free!
                            </p>
                                    <p>
                                        In stock!
                            </p>
                                    <form>
                                        <MuiThemeProvider theme={theme}>
                                            <Input
                                                type="number"
                                                placeholder="Quantity"
                                                name="quantity"
                                                fullWidth={true}
                                                value={props.productQuantity}
                                                onChange={props.handleInputChange}
                                            />
                                        </MuiThemeProvider>
                                    </form>
                                </div>
                            ) : (<div />)}
                        </Col>
                        <Col size="12">
                            {props.hardware && props.quantity <= 0 ? (
                                <div>
                                    <p>
                                        Item out of stock.  Please check back later.
                            </p>
                                </div>
                            ) : (<div />)}
                            {props.software ? (
                                <div>
                                    <p>
                                        Direct download after purchase!
                            </p>
                                </div>
                            ) : (<div />)}
                        </Col>
                    </Row>



                </div>
                <div className="product-add-cart f-top-pad">
                    {props.button}
                </div>
            </Col>
        </FormControl>
    )
}

export default ProductOrder;