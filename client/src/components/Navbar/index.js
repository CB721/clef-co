import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Row, Col } from '../Grid';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import "./style.css";


function Navbar(props) {
    const cart = useSelector(state => state.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (cart[0]) {
            setCartTotal(cart[0].line_items.length)
        }
    }, [cart[0]]);
    useEffect(() => {
        if (window.sessionStorage.id) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [loggedIn]);
    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({ target: window ? window() : undefined });
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }
    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };
    function CheckCart() {
        if (window.sessionStorage.id) {
            window.location.href = "/cart";
        } else {
            toast("Please login to view your cart", {
                className: css({
                    background: '#3E0768',
                    boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
                    borderRadius: '17px'
                }),
                bodyClassName: css({
                    fontSize: '20px',
                    color: 'white'
                }),
                progressClassName: css({
                    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,7,104,1) 80%)"
                })
            });
        }
    }
    function Search() {
        if (search) {
            sessionStorage.setItem("search", search);
            window.location.href = "/search";
        } else {
            toast("Search field cannot be empty", {
                className: css({
                    background: '#3E0768',
                    boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
                    borderRadius: '17px'
                }),
                bodyClassName: css({
                    fontSize: '20px',
                    color: 'white'
                }),
                progressClassName: css({
                    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,7,104,1) 80%)"
                })
            });
        }
    }
    function logOut(event) {
        event.preventDefault();
        sessionStorage.clear();
        window.location.href = "/login";
    }
    function handleInputChange(event) {
        let value = event.target.value.trim();
        setSearch(value);
    }
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#000000',
                contrastText: '#ffffff',
            },
            secondary: {
                light: '#3E0768',
                main: '#3E0768',
                contrastText: '#ffffff',
            },
            tertiary: {
                main: '#ffffff',
            }
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <HideOnScroll {...props}>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Col size="md-1">
                            <IconButton
                                onClick={toggleMenu}
                                aria-label="Menu"
                            >
                                <MenuIcon
                                    fontSize="large"
                                    className="white"
                                />
                            </IconButton>
                        </Col>
                        <Col size="md-2">
                            <a href="/" className="white ">Demo Company</a>
                        </Col>
                        <Col size="md-1">
                            <a href="/products" className="white center-text">Products</a>
                        </Col>
                        <Col size="md-1">
                            <a href="/tutorials" className="white">Tutorials</a>
                        </Col>
                        <Col size="md-1">
                            <a href="/shop" className="white">Shop</a>
                        </Col>
                        <Col size="md-1">
                            <a href="/contact" className="white">Contact</a>
                        </Col>
                        <Col size="md-2">
                            <Row no-gutters>
                                <div className="search-box">
                                    <Col size="md-2">
                                        <IconButton onClick={Search} aria-label="search" >
                                            <SearchIcon className="white" />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-8">
                                        <input
                                            className="search-field white"
                                            type="text"
                                            name="search"
                                            placeholder="Search"
                                            value={search}
                                            onChange={handleInputChange}
                                        />
                                    </Col>
                                </div>
                            </Row>
                        </Col>
                        {loggedIn ? (
                            <Col size="md-2">
                                <Row>
                                    <Col size="md-6">
                                        <a href="/user/profile" className="white">Profile</a>
                                    </Col>
                                    <Col size="md-6">
                                        <div
                                            className="white-to-purple pointer"
                                            onClick={(event) => logOut(event)}
                                        >
                                            Sign Out
                                </div>
                                    </Col>
                                </Row>
                            </Col>
                        ) : (
                                <Col size="md-2">
                                    <Row>
                                        <Col size="md-6">
                                            <a href="/login" className="white">Login</a>
                                        </Col>
                                        <Col size="md-6">
                                            <a href="/create_account" className="white">Sign Up</a>
                                        </Col>
                                    </Row>
                                </Col>
                            )}
                        <Col size="md-1">
                            <IconButton
                                onClick={CheckCart}
                                aria-label="Go to cart"
                            >
                                <MuiThemeProvider theme={theme}>
                                    <Badge
                                        badgeContent={cartTotal}
                                        color="secondary"
                                    >
                                        <ShoppingCartOutlinedIcon className="white" />
                                    </Badge>
                                </MuiThemeProvider>
                            </IconButton>
                        </Col>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </MuiThemeProvider>
    );
}

export default Navbar;
