import React, { useEffect, useState } from "react";
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import states from '../../pages/Assets/Data/states.json';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Col, Row } from "../Grid";
import API from "../../utilities/api";
import visa from "./Images/visa.svg";
import discover from "./Images/discover.svg";
import mastercard from "./Images/mastercard.svg";
import amex from "./Images/amex.svg";
import defaultCard from "./Images/default.svg";
import "./style.css";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        height: '100%'
    },
    button: {
        marginRight: theme.spacing(2)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

function getSteps() {
    return ['Review Items', 'Shipping Information', 'Payment Information', 'Review Order'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Review Items';
        case 1:
            return 'Shipping Information';
        case 2:
            return 'Payment Information';
        case 3:
            return 'Review Order'
        default:
            return 'Unknown step';
    }
}
const today = moment().format("YYYY-MM");
const maxDate = moment().add(6, 'years').format("YYYY-MM");

function Checkout(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' },
            secondary: { main: "#000000" },
        },
    });
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState([]);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [second, setSecond] = useState("");
    const [city, setCity] = useState("");
    const [userState, setUserState] = useState("");
    const [tax, setTax] = useState(0);
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState();
    const [cardBrand, setCardBrand] = useState();
    const [cardName, setCardName] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardCode, setCardCode] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [showMobile, setShowMobile] = useState(false);

    function goToSupport() {
        window.location.href = "/contact"
    }
    function getProduct(quantity, id) {
        API.getProductById(id)
            .then(res =>
                getTotal(res.data.results[0], quantity)
            )
            .catch(err => console.log(err));
    }
    function getUserByID() {
        API.getUser(window.sessionStorage.id)
            .then(res =>
                setUpUser(res.data.results[0])
            )
            .catch(err => console.log(err));
    }
    function setUpUser(data) {
        setUser(data);
        if (data.first_name) {
            setFirst(data.first_name);
        }
        if (data.last_name) {
            setLast(data.last_name)
        }
        if (data.email) {
            setEmail(data.email);
        }
        if (data.street_address) {
            setStreet(data.street_address);
        }
        if (data.secondary_address) {
            setSecond(data.secondary_address);
        }
        if (data.city) {
            setCity(data.city);
        }
        if (data.user_state) {
            setUserState(data.user_state);
        }
        if (data.zip_code) {
            setZip(data.zip_code);
        }
        if (data.phone) {
            setPhone(data.phone);
        }
    }
    function getTotal(item, amount) {
        let itemInfo = item;
        itemInfo.amount = amount;
        setProduct(product => [...product, itemInfo]);
        setQuantity(quantity => [...quantity, amount]);
        const cost = item.price * amount;
        setTotal(total => total + cost);
    }
    useEffect(() => {
        props.lineItems.forEach(ele => {
            getProduct(ele.quantity, ele.product_id)
        });
        getUserByID();
    }, [props.lineItems]);
    useEffect(() => {
        if (userState) {
            const stateTax = states.find(({ name }) => name === userState);
            setTax(stateTax.tax);
        }
    }, [userState])
    useEffect(() => {
        if (window.innerWidth < 450) {
            setShowMobile(true);
        } else if (window.innerWidth < 1230 && window.innerWidth >= 768) {
            setShowMobile(true);
        }
        else {
            setShowMobile(false);
        }
    }, [window.innerWidth]);

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [rightSlide, setRightSlide] = useState(true);
    const [leftSlide, setLeftSlide] = useState(false);
    const steps = getSteps();

    const handleNext = () => {
        setErrorMessage("");
        if (props.lineItems.length) {
            if (activeStep === 1) {
                if (!first) {
                    setErrorMessage("Please add your first name");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!last) {
                    setErrorMessage("Please add your last name");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!street) {
                    setErrorMessage("Please add your street address");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!city) {
                    setErrorMessage("Please add your city");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!userState) {
                    setErrorMessage("Please add your state");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!zip) {
                    setErrorMessage("Please add your zip code");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                else if (!phone) {
                    setErrorMessage("Please add your phone number");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    setErrorMessage("");
                    setActiveStep(prevActiveStep => prevActiveStep + 1);
                    setRightSlide(true);
                    setLeftSlide(false);
                    window.scrollTo({ top: 0 });
                }

            } else if (activeStep === 2) {
                if (!cardNumber) {
                    setErrorMessage("Please add your credit card number");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    if (cardNumber.match(
                        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g
                    )) {
                        if (!cardDate) {
                            setErrorMessage("Please enter your card's expiration date");
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            if (cardDate.length === 7) {
                                if (!cardName) {
                                    setErrorMessage("Who is this going to?");
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    if (!cardCode) {
                                        setErrorMessage("Please check you card code and try again");
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    } else if (cardCode.length !== 3) {
                                        setErrorMessage("Please check you card code and try again");
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    } else {
                                        setErrorMessage("");
                                        setActiveStep(prevActiveStep => prevActiveStep + 1);
                                        setRightSlide(true);
                                        setLeftSlide(false);
                                        window.scrollTo({ top: 0 });
                                    }
                                }
                            } else if (cardDate <= today || cardDate >= maxDate) {
                                setErrorMessage("Invalid expiration date");
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }
                    } else {
                        setErrorMessage("Please enter a valid credit card number");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }
            } else if (activeStep === 3) {
                props.completeOrder();
                setActiveStep(prevActiveStep => prevActiveStep + 1);
                setRightSlide(true);
                setLeftSlide(false);
                window.scrollTo({ top: 0 });
            } else {
                setActiveStep(prevActiveStep => prevActiveStep + 1);
                setRightSlide(true);
                setLeftSlide(false);
                window.scrollTo({ top: 0 });
            }
        } else {
            setErrorMessage("Please add an item in your cart to proceed");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        setRightSlide(false);
        setLeftSlide(true);
        window.scrollTo({ top: 0 });
    };

    const goToProfile = () => {
        window.location.href = "/user/profile";
    };
    function updateItemQuantity(event, itemID, index) {
        event.preventDefault();
        setErrorMessage("");
        const productInfo = product.find(({ product_name }) => product_name === event.target.name);
        const newAmount = parseInt(event.target.value);
        if (productInfo.hardware) {
            if (newAmount > 0) {
                if (newAmount <= productInfo.quantity) {
                    let newProduct = {
                        "id": productInfo.id,
                        "product_name": productInfo.product_name,
                        "price": productInfo.price,
                        "cost": productInfo.cost,
                        "image_link": productInfo.image_link,
                        "product_description": productInfo.product_description,
                        "instrument_type": productInfo.instrument_type,
                        "quantity": productInfo.quantity,
                        "hardware": productInfo.hardware,
                        "software": productInfo.software,
                        "amount": newAmount,
                    }
                    props.updateItem(itemID, event.target.value);
                    let productArr = [...product];
                    productArr[index] = newProduct;
                    setProduct(productArr);
                } else {
                    alert("Sorry, we are out of stock!");
                }
            } else {
                if (window.confirm("Do you want to remove " + productInfo.product_name + " from your cart?")) {
                    props.deleteItem(itemID);
                    product.splice(index, 1);
                    setProduct(product);
                }
            }
        } else {
            setErrorMessage("You can only purchase one license at a time");
        }
    }
    function deleteItem(event, itemID, name, index) {
        event.preventDefault();
        if (window.confirm("Do you want to remove " + name + " from your cart?")) {
            props.deleteItem(itemID);
            product.splice(index, 1);
            setProduct(product);
        }
    }
    function handleCardNumber(number) {
        setCardNumber(number);
        if (number.length > 0) {
            switch (number.charAt(0)) {
                case "3":
                    setCardBrand(amex);
                    break;
                case "4":
                    setCardBrand(visa);
                    break;
                case "5":
                    setCardBrand(mastercard);
                    break;
                case "6":
                    setCardBrand(discover);
                    break;
                default:
                    setCardBrand(defaultCard);
                    break;
            }
        }
    }
    function validateCardDate(date) {
        if (date <= today || date >= maxDate) {
            setErrorMessage("Invalid expiration date");
        } else {
            setCardDate(date);
        }
    }

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Row no-gutters>
                    <Col size="12">
                        <div className="stepper-header">
                            {showMobile ? (
                                <MobileStepper
                                    variant="progress"
                                    steps={4}
                                    position="static"
                                    activeStep={activeStep}
                                    className={classes.root}
                                    nextButton={
                                        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
                                            Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                            Back
                                        </Button>
                                    }
                                />
                            ) : (
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            return (
                                                <Step key={label} {...stepProps}>
                                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                )}
                        </div>
                    </Col>
                </Row>
            </MuiThemeProvider>
            <div>
                {activeStep === steps.length ? (
                    <div className="cart-area">
                        <Typography className={classes.instructions}>
                            Your Order Is Complete
                        </Typography>
                        <Row>
                            <Col size="md-3" />
                            <Col size="md-2">
                                <MuiThemeProvider theme={theme}>
                                    <Button
                                        onClick={goToProfile}
                                        variant="contained"
                                        className={classes.button}
                                        color="primary"
                                    >
                                        Go To Profile
                                </Button>
                                </MuiThemeProvider>
                            </Col>
                            <Col size="md-2" />
                            <Col size="md-2">
                                <MuiThemeProvider theme={theme}>
                                    <Button
                                        onClick={goToSupport}
                                        variant="contained"
                                        className={classes.button}
                                        color="primary"
                                    >
                                        Contact Us
                                </Button>
                                </MuiThemeProvider>
                            </Col>
                            <Col size="md-3" />
                        </Row>
                    </div>
                ) : activeStep === 0 ? (
                    <div className="cart-area">
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <span className="cart-error">
                            {errorMessage}
                        </span>
                        {product.map((item, index) => (
                            <Slide left={leftSlide} right={rightSlide} key={index}>
                                <div className="cart-item">
                                    <Row>
                                        <Col size="md-2 12">
                                            <img src={item.image_link} alt={item.product_name} className="cart-item-img" />
                                        </Col>
                                        <Col size="md-2 sm-5 12">
                                            <div className="cart-item-name">
                                                <span>
                                                    {item.product_name}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col size="md-2 sm-2" />
                                        <Col size="md-2 sm-5 12">
                                            <div className="cart-item-price">
                                                <span>
                                                    ${item.price}
                                                </span>
                                            </div>
                                        </Col>
                                        <Col size="md-2 10">
                                            <div className="cart-item-quantity">
                                                <MuiThemeProvider theme={theme}>
                                                    <FormControl
                                                        fullWidth={true}
                                                    >
                                                        {item.hardware ? (
                                                            <Input
                                                                type="number"
                                                                placeholder="Quantity"
                                                                name={item.product_name}
                                                                fullWidth={true}
                                                                value={item.amount}
                                                                onChange={(event) => updateItemQuantity(event, item.id, index, item.amount, item.cost, item.hardware, item.instrument_type, item.image_link, item.product_name, item.price, item.product_description, item.quantity, item.software)}
                                                            />
                                                        ) : (
                                                                <span>
                                                                    Download after purchase
                                                                </span>
                                                            )}
                                                    </FormControl>
                                                </MuiThemeProvider>
                                            </div>
                                        </Col>
                                        <Col size="md-2 2">
                                            <div className="cart-item-quantity">
                                                <IconButton
                                                    onClick={(event) => deleteItem(event, item.id, item.product_name, index)}
                                                    aria-label="remove"
                                                >
                                                    <CancelIcon className="purple" />
                                                </IconButton>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Slide>
                        ))}
                    </div>
                ) : activeStep === 1 ? (
                    <div>
                        <div className="cart-area">
                            <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                            </Typography>
                            <span className="cart-error">
                                {errorMessage}
                            </span>
                            <MuiThemeProvider theme={theme}>
                                <FormControl
                                    fullWidth={true}
                                >
                                    <Row>
                                        <Col size="md-12">
                                            <span className={props.errorClass}>
                                                {props.formMessage}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    First Name
                                             </h6>
                                                <Input
                                                    type="text"
                                                    value={first}
                                                    name="first"
                                                    fullWidth={true}
                                                    onChange={(event) => setFirst(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-2" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Last Name
                                            </h6>
                                                <Input
                                                    type="text"
                                                    value={last}
                                                    name="last"
                                                    fullWidth={true}
                                                    onChange={(event) => setLast(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-10">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Email
                                                </h6>
                                                <Input
                                                    type="text"
                                                    value={email}
                                                    name="email"
                                                    fullWidth={true}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                        <Col size="md-1" />
                                        <Col size="md-10">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Street
                                            </h6>
                                                <Input
                                                    type="text"
                                                    value={street}
                                                    name="street"
                                                    fullWidth={true}
                                                    onChange={(event) => setStreet(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-10">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Apt / Suite / Other
                                            </h6>
                                                <Input
                                                    type="text"
                                                    value={second}
                                                    name="second"
                                                    fullWidth={true}
                                                    onChange={(event) => setSecond(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    City
                                            </h6>
                                                <Input
                                                    type="text"
                                                    value={city}
                                                    name="city"
                                                    fullWidth={true}
                                                    onChange={(event) => setCity(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-2" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    State
                                            </h6>
                                                <Select
                                                    value={userState}
                                                    onChange={(event) => setUserState(event.target.value)}
                                                    name="userState"
                                                    fullWidth={true}
                                                >
                                                    {states.map((state, index) => (
                                                        <MenuItem
                                                            key={index}
                                                            value={state.name}
                                                        >
                                                            {state.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Postal Code
                                            </h6>
                                                <Input
                                                    type="number"
                                                    value={zip}
                                                    name="zip"
                                                    fullWidth={true}
                                                    onChange={(event) => setZip(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-2" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Phone Number
                                                </h6>
                                                <Input
                                                    type="number"
                                                    value={phone}
                                                    name="phone"
                                                    fullWidth={true}
                                                    onChange={(event) => setPhone(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-2" />
                                    </Row>
                                </FormControl>
                            </MuiThemeProvider>
                        </div>
                    </div>
                ) : activeStep === 2 ? (
                    <div>
                        <div className="cart-area">
                            <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                            </Typography>
                            <span className="cart-error">
                                {errorMessage}
                            </span>
                            <MuiThemeProvider theme={theme}>
                                <FormControl
                                    fullWidth={true}
                                >
                                    {cardNumber ? (
                                        <Row>
                                            <Col size="sm-1" />
                                            <Col size="sm-10">
                                                <Slide left={leftSlide} right={rightSlide} cascade>
                                                    <h6 className="form-titles">
                                                        Card Number
                                                        </h6>
                                                    <Input
                                                        type="number"
                                                        value={cardNumber}
                                                        name="cardNumber"
                                                        fullWidth={true}
                                                        onChange={(event) => handleCardNumber(event.target.value)}
                                                    />
                                                    <Zoom top>
                                                        <img src={cardBrand} alt="credit card" className="credit-card-image"></img>
                                                    </Zoom>
                                                </Slide>
                                            </Col>
                                            <Col size="sm-1" />
                                        </Row>
                                    ) : (
                                            <Row>
                                                <Col size="sm-1" />
                                                <Col size="sm-10">
                                                    <Slide left={leftSlide} right={rightSlide} cascade>
                                                        <h6 className="form-titles">
                                                            Card Number
                                                        </h6>
                                                        <Input
                                                            type="number"
                                                            value={cardNumber}
                                                            name="cardNumber"
                                                            fullWidth={true}
                                                            onChange={(event) => handleCardNumber(event.target.value)}
                                                        />
                                                    </Slide>
                                                </Col>
                                                <Col size="sm-1" />
                                            </Row>
                                        )}
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-10">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Name on card
                                                </h6>
                                                <Input
                                                    type="text"
                                                    value={cardName}
                                                    name="cardName"
                                                    fullWidth={true}
                                                    onChange={(event) => setCardName(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                    <Row>
                                        <Col size="md-1" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Expiration Date
                                                </h6>
                                                <Input
                                                    type="month"
                                                    value={cardDate}
                                                    name="cardDate"
                                                    min={today}
                                                    max={maxDate}
                                                    fullWidth={true}
                                                    onChange={(event) => validateCardDate(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-2" />
                                        <Col size="md-4">
                                            <Slide left={leftSlide} right={rightSlide} cascade>
                                                <h6 className="form-titles">
                                                    Security Code
                                                </h6>
                                                <Input
                                                    type="password"
                                                    value={cardCode}
                                                    name="cardCode"
                                                    fullWidth={true}
                                                    onChange={(event) => setCardCode(event.target.value)}
                                                />
                                            </Slide>
                                        </Col>
                                        <Col size="md-1" />
                                    </Row>
                                </FormControl>
                            </MuiThemeProvider>
                        </div>
                    </div>
                ) : activeStep === 3 ? (
                    <div>
                        <div className="cart-area">
                            <Typography className={classes.instructions}>
                                {getStepContent(activeStep)}
                            </Typography>
                            <span className="cart-error">
                                {errorMessage}
                            </span>
                            <div className="delivery-details">
                                <Row>
                                    <Col size="md-1" />
                                    <Col size="md-4">
                                        <Row>
                                            <Slide left={leftSlide} right={rightSlide}>
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        Delivery Details
                                            </h6>
                                                </Col>
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        {first + " " + last}
                                                    </h6>
                                                </Col>
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        {street}
                                                    </h6>
                                                </Col>
                                                {second ? (
                                                    <Col size="md-12">
                                                        <h6 className="price-text">
                                                            {second}
                                                        </h6>
                                                    </Col>
                                                ) : (<div />)}
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        {city}
                                                    </h6>
                                                </Col>
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        {userState}
                                                    </h6>
                                                </Col>
                                                <Col size="md-12">
                                                    <h6 className="price-text">
                                                        {zip}
                                                    </h6>
                                                </Col>
                                            </Slide>
                                        </Row>
                                    </Col>
                                    <Col size="md-2" />
                                    <Col size="md-4">
                                        <Row>
                                            <Col size="12">
                                                <h6 className="price-text">
                                                    Payment Information
                                                </h6>
                                            </Col>
                                            <Col size="3">
                                                <img src={cardBrand} alt="credit card" className="credit-card-image"></img>
                                            </Col>
                                            <Col size="4">
                                                <h6 className="price-text">
                                                    {cardNumber.replace(/.(?=.{4})/g, '')}
                                                </h6>
                                            </Col>
                                            <Col size="5">
                                                <h6 className="price-text">
                                                    {cardDate}
                                                </h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col size="md-1" />
                                </Row>
                            </div>
                            <Row>
                                <Col size="md-1" />
                                <Col size="md-10">
                                    <h6 className="price-text">
                                        Cart ({props.lineItems.length + " Items"})
                                    </h6>
                                </Col>
                                <Col size="md-1" />
                            </Row>
                            {product.map((item, index) => (
                                <Slide left={leftSlide} right={rightSlide} key={index}>
                                    <div className="cart-item">
                                        <Row>
                                            <Col size="md-2">
                                                <img src={item.image_link} alt={item.product_name} className="cart-item-img" />
                                            </Col>
                                            <Col size="md-2">
                                                <div className="cart-item-name">
                                                    <span>
                                                        {item.product_name}
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col size="md-2" />
                                            <Col size="md-2">
                                                <div className="cart-item-price">
                                                    <span>
                                                        ${item.price}
                                                    </span>
                                                </div>
                                            </Col>
                                            <Col size="md-2">
                                                <div className="cart-item-quantity">
                                                    <span>
                                                        {quantity[index]}
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </div>
                ) : (<div />)}
                {userState ? (
                    <div className="cart-total-bg cart-total-section">
                        <Row>
                            <Col size="lg-4 md-12">
                                <h6 className="form-titles price-text">
                                    Order Price Information
                                    </h6>
                            </Col>
                            <Col size="lg-2 md-3 sm-6 12">
                                <h6 className="form-titles price-text">
                                    Before Tax: ${total.toFixed(2)}
                                </h6>
                            </Col>
                            <Col size="lg-2 md-3 sm-6 12">
                                <h6 className="form-titles price-text">
                                    {userState} Tax: ${(tax * total).toFixed(2)}
                                </h6>
                            </Col>
                            <Col size="lg-2 md-3 sm-6 12">
                                {total > 99 ? (
                                    <h6 className="form-titles price-text">
                                        Free shipping!
                                        </h6>
                                ) : (
                                        <h6 className="form-titles price-text">
                                            Shipping: ${(total * 0.0125).toFixed(2)}
                                        </h6>
                                    )}
                            </Col>
                            <Col size="lg-2 md-3 sm-6 12">
                                {total > 99 ? (
                                    <h6 className="form-titles price-text">
                                        Order Total: ${(total + (tax * total)).toFixed(2)}
                                    </h6>
                                ) : (
                                        <h6 className="form-titles price-text">
                                            Order Total: ${((total + (tax * total)) + (total * 0.0125)).toFixed(2)}
                                        </h6>
                                    )}

                            </Col>
                        </Row>
                    </div>
                ) : (
                        <div className="cart-total-bg">
                            <Row>
                                <div className="cart-total-section">
                                    <Col size="md-3">
                                        <h6 className="form-titles price-text">
                                            Order Price Information
                                        </h6>
                                    </Col>
                                    <Col size="md-3" />
                                    <Col size="md-2">
                                        <span className="form-titles price-text">
                                            Order Total: ${total.toFixed(2)}
                                        </span>
                                    </Col>
                                    <Col size="md-4" />
                                </div>
                            </Row>
                        </div>
                    )}
            </div>
            <div className="cart-button-area">
                {activeStep < 4 ? (
                    <MuiThemeProvider theme={theme}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                            color="secondary"
                            variant="contained"
                        >
                            Back
                        </Button>
                        <Button
                            disabled={activeStep === 4}
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Place Order and Pay' : 'Next'}
                        </Button>
                    </MuiThemeProvider>
                ) : (<div />)}
            </div>
        </div>
    )
}

export default Checkout;