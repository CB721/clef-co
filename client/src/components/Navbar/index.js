import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Col, Row, Container } from "../Grid";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AlbumIconOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Badge from '@material-ui/core/Badge';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";


function Navbar() {
    const cart = useSelector(state => state.cart);
    const [cartTotal, setCartTotal] = useState(0)
    useEffect(() => {
        setCartTotal(cart.length);
    });
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
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <header className="head-bar">
                        <div className="header-wrapper">
                            <Row>
                                <Col size="md-12">
                                    <nav className="nav-list">
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
                                        </ol>
                                    </nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12">
                                    <div className="user-interaction">
                                        <IconButton onClick={Search} aria-label="search" >
                                            <SearchIcon className="white" />
                                        </IconButton>
                                        <div className="search-box">
                                            <InputBase
                                                fullWidth={true}
                                                // value="What are you looking for?"
                                                // onChange={props.handleInputChange}
                                                placeholder=" Search website"
                                            />
                                        </div>
                                        <IconButton
                                            onClick={CheckCart}
                                            aria-label="Go to cart"
                                        >
                                            <MuiThemeProvider theme={theme}>
                                                <Badge
                                                    badgeContent={cartTotal}
                                                    color="primary"
                                                >

                                                    <ShoppingCartOutlinedIcon className="white" />
                                                </Badge>
                                            </MuiThemeProvider>
                                        </IconButton>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </header>
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;
