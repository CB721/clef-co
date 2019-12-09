import React from "react";
import { Row, Col } from "../Grid";
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Textfit } from 'react-textfit';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import "./style.css";

function SideMenu(props) {

    return (
        <div className={props.menuClass}>
            <Col size="md-3 sm-4">
                <Fade top>
                    <Slide top cascade>
                        <ul className="side-menu">
                            <a href="/">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <HomeOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Home">Home</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            <a href="/products">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <AudiotrackOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Products">Products</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            <a href="/shop">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <AddShoppingCartOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Shop">Shop</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            <a href="/search">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <SearchOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Search">Search</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            <a href="/tutorials">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <MusicVideoOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Tutorials">Tutorials</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            <a href="/contact">
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <ContactSupportOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="all-side-items-except-sign-out" data-text="Contact Us">Contact Us</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            </a>
                            {props.loggedIn ? (
                                <a href="/user/profile">
                                    <li className="side-menu-item">
                                        <Row no-gutters>
                                            <Col size="3">
                                                <HeadsetOutlinedIcon className="white" fontSize={"large"} />
                                            </Col>
                                            <Col size="9">
                                                <Textfit
                                                    mode="single"
                                                    min={10}
                                                    max={32}
                                                >
                                                    <div className="all-side-items-except-sign-out" data-text="Profile">Profile</div>
                                                </Textfit>
                                            </Col>
                                        </Row>
                                    </li>
                                </a>
                            ) : (
                                    <a href="/login">
                                        <li className="side-menu-item">
                                            <Row no-gutters>
                                                <Col size="3">
                                                    <HeadsetOutlinedIcon className="white" fontSize={"large"} />
                                                </Col>
                                                <Col size="9">
                                                    <Textfit
                                                        mode="single"
                                                        min={10}
                                                        max={32}
                                                    >
                                                        <div className="all-side-items-except-sign-out" data-text="Login">Login</div>
                                                    </Textfit>
                                                </Col>
                                            </Row>
                                        </li>
                                    </a>
                                )}
                            {props.loggedIn ? (
                                <li className="side-menu-item">
                                    <Row no-gutters>
                                        <Col size="3">
                                            <AccountCircleOutlinedIcon className="white" fontSize={"large"} />
                                        </Col>
                                        <Col size="9">
                                            <Textfit
                                                mode="single"
                                                min={10}
                                                max={32}
                                            >
                                                <div className="menu-sign-out white" onClick={(event) => props.logOut(event)}>Sign Out</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            ) : (
                                    <a href="/create_account">
                                        <li className="side-menu-item">
                                            <Row no-gutters>
                                                <Col size="3">
                                                    <AccountCircleOutlinedIcon className="white" fontSize={"large"} />
                                                </Col>
                                                <Col size="9">
                                                    <Textfit
                                                        mode="single"
                                                        min={10}
                                                        max={32}
                                                    >
                                                        <div className="all-side-items-except-sign-out" data-text="Sign Up">Sign Up</div>
                                                    </Textfit>
                                                </Col>
                                            </Row>
                                        </li>
                                    </a>
                                )}
                        </ul>
                    </Slide>
                </Fade>
            </Col>
            <Col size="md-9 8">
                <div id="menu-outer-section" onClick={(event) => props.toggleMenu(event)} />
            </Col>
        </div>
    )
}

export default SideMenu;