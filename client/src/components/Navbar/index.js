import React, { useEffect, useState, useRef } from "react";
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
import SideMenu from '../SideMenu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import API from '../../utilities/api';
import "./style.css";


function Navbar(props) {
    const cart = useSelector(state => state.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [renderMiddleCol, setMiddleCol] = useState(true);
    const [menuClass, setMenuClass] = useState("no-menu");

    function validateUser(status) {
        if (status) {
            setLoggedIn(true);
        } else {
            sessionStorage.clear();
            setLoggedIn(false);
            window.location.href = "/login";
        }
    }
    useEffect(() => {
        if (window.sessionStorage.id) {
            API.veriftyUserLoggedIn(window.sessionStorage.id, window.sessionStorage.token)
                .then(res => validateUser(res.data))
                .catch(err => console.log(err))
        } else {
            sessionStorage.clear();
            setLoggedIn(false);
        }
    }, [window.sessionStorage.id]);
    useEffect(() => {
        if (cart[0]) {
            setCartTotal(cart[0].line_items.length);
        }
    }, [cart[0]]);
    useEffect(() => {
        if (window.innerWidth < 450) {
            setMiddleCol(false);
        } else {
            setMiddleCol(true);
        }
    }, []);
    const searchInput = useRef(null);
    useEffect(() => {
        searchInput.current.focus();
    }, [search]);
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
        if (window.sessionStorage.id && window.sessionStorage.token.length >= 64) {
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
        const cookieEnabled = navigator.cookieEnabled;
        if (cookieEnabled) {
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
        } else {
            toast("Please enable cookies to continue", {
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
                }),
                toastId: 2345,
                onClick: function () {
                    window.location.href = "/search"
                }
            });
        }
    }
    function logOut(event) {
        event.preventDefault();
        setIsOpen(false);
        sessionStorage.clear();
        const user = { "user_auth": "" };
        API.updateUser(window.sessionStorage.id, user)
            .then(
                window.location.href = "/login"
            )
            .catch(err => console.log(err));
    }
    function handleInputChange(event) {
        let value = event.target.value.trim();
        setSearch(value);
    }
    function toggleMenu(event) {
        event.preventDefault();
        setIsOpen(!isOpen);
        if (menuClass === "no-menu") {
            setMenuClass("menu-background");
        } else {
            setMenuClass("no-menu");
        }
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
                            <a href="/" className="white "><h6>Clef Co</h6></a>
                        </Col>
                        {renderMiddleCol ? (
                            <Col size="lg-6 md-5 sm-3" />
                        ) : (<div />)}
                        <Col size="md-2 4">
                            <Row no-gutters>
                                <div className="search-box">
                                    <Col size="md-2 1">
                                        <IconButton
                                            onClick={Search}
                                            type="submit"
                                            aria-label="search"
                                            disableFocusRipple={true}
                                            disableRipple={true}
                                            edge={"start"}
                                        >
                                            <SearchIcon className="white-to-purple" />
                                        </IconButton>
                                    </Col>
                                    <Col size="md-8 9">
                                        <input
                                            ref={searchInput}
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
            <SideMenu
                isOpen={isOpen}
                menuClass={menuClass}
                toggleMenu={toggleMenu}
                loggedIn={loggedIn}
                logOut={logOut}
            />
        </MuiThemeProvider>
    );
}

export default Navbar;
