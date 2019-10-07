import React from "react";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AlbumIconOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import "./style.css";

function Navbar() {
    function GoHome() {
        window.location.href = "/";
    }
    function CheckCart() {
        window.location.href = "/cart";
    }
    return (
        <header className="head-bar">
            <div className="header-wrapper">
                <div className="company-logo">
                    <IconButton onClick={GoHome} aria-label="logo">
                        <AlbumIconOutlinedIcon
                            fontSize="large"
                        />
                    </IconButton>
                </div>
                <nav className="nav-list">
                    <ol className="ordered-list">
                        <li className="list-items">
                            <a href="/products">Products</a>
                        </li>
                        <li className="list-items">
                            <a href="/tutorials">Tutorials</a>
                        </li>
                        <li className="list-items">
                            <a href="/shop">Shop</a>
                        </li>
                        <li className="list-items">
                            <a href="/contact">Contact</a>
                        </li>
                    </ol>
                </nav>
                <div className="user-interaction">
                    <IconButton aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                    <div className="search-box">
                        <InputBase
                            fullWidth={true}
                            // value="What are you looking for?"
                            // onChange={props.handleInputChange}
                            placeholder="What are you looking for?"
                        />
                    </div>
                    <IconButton onClick={CheckCart} aria-label="Go to cart">
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
