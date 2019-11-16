import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Col, Row, Container } from "../Grid";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AlbumIconOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Badge from '@material-ui/core/Badge';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";


function Navbar() {
    const cart = useSelector(state => state.cart);
    const [cartTotal, setCartTotal] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [visibility, setVisibility] = useState("");

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
    function CheckCart() {
        window.location.href = "/cart";
    }
    function Search() {
        window.location.href = "/search";
    }
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });

    return (
        <header className="head-bar">
            <div className="header-wrapper">
                <nav className="nav-list">
                    {loggedIn ? (
                        <ol className="ordered-list">
                            <li className="list-icons white">
                                <a href="/">
                                    <AlbumIconOutlinedIcon
                                        fontSize="large"
                                    />
                                </a>
                            </li>
                            <li className="list-items white">
                                <a href="/">Demo Company</a>
                            </li>
                            <li className="list-items white">
                                <a href="/products">Products</a>
                            </li>
                            <li className="list-items white">
                                <a href="/tutorials">Tutorials</a>
                            </li>
                            <li className="list-items white">
                                <a href="/shop">Shop</a>
                            </li>
                            <li className="list-items white">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="list-icons white">
                                <IconButton onClick={Search} aria-label="search" >
                                    <SearchIcon className="white-to-purple" />
                                </IconButton>
                            </li>
                            <li className="list-items white">
                                <input
                                    className="search-box"
                                    type="text"
                                    name="search"
                                    placeholder="Search"
                                />
                            </li>
                            <li className="list-items white">
                                <a href="/user/profile">Profile</a>
                            </li>
                            <li className="list-items white">
                                Sign Out
                                                </li>
                            <li className="list-icons white">
                                <IconButton
                                    onClick={CheckCart}
                                    aria-label="Go to cart"
                                >
                                    <MuiThemeProvider theme={theme}>
                                        <Badge
                                            badgeContent={cartTotal}
                                            color="primary"
                                        >
                                            <ShoppingCartOutlinedIcon className="white-to-purple" />
                                        </Badge>
                                    </MuiThemeProvider>
                                </IconButton>
                            </li>
                        </ol>
                    ) : (
                            <ol className="ordered-list">
                                <li className="list-items white">
                                    <a href="/">
                                        <AlbumIconOutlinedIcon
                                            fontSize="large"
                                        />
                                    </a>
                                </li>
                                <li className="list-items white">
                                    <a href="/">Demo Company</a>
                                </li>
                                <li className="list-items white">
                                    <a href="/products">Products</a>
                                </li>
                                <li className="list-items white">
                                    <a href="/tutorials">Tutorials</a>
                                </li>
                                <li className="list-items white">
                                    <a href="/shop">Shop</a>
                                </li>
                                <li className="list-items white">
                                    <a href="/contact">Contact</a>
                                </li>
                                <li className="list-items white">
                                    <IconButton onClick={Search} aria-label="search" >
                                        <SearchIcon className="white-to-purple" />
                                    </IconButton>
                                </li>
                                <li className="list-items white">
                                    <input
                                        className="search-box"
                                        type="text"
                                        name="search"
                                        placeholder="Search"
                                    />
                                </li>
                                <li className="list-items white">
                                    <a href="/login">Login</a>
                                </li>
                                <li className="list-items white">
                                    <a href="/create_account">Sign Up</a>
                                </li>
                                <li className="list-items white">
                                    <IconButton
                                        onClick={CheckCart}
                                        aria-label="Go to cart"
                                    >
                                        <MuiThemeProvider theme={theme}>
                                            <Badge
                                                badgeContent={cartTotal}
                                                color="primary"
                                            >
                                                <ShoppingCartOutlinedIcon className="white-to-purple" />
                                            </Badge>
                                        </MuiThemeProvider>
                                    </IconButton>
                                </li>
                            </ol>
                        )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
