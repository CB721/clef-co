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
                                            <a href="/" data-text="Home">Home</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
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
                                            <a href="/products" data-text="Products">Products</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
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
                                            <a href="/shop" data-text="Shop">Shop</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
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
                                            <a href="/search" data-text="Search">Search</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
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
                                            <a href="/tutorials" data-text="Tutorials">Tutorials</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
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
                                            <a href="/contact" data-text="Contact Us">Contact Us</a>
                                        </Textfit>
                                    </Col>
                                </Row>
                            </li>
                            {props.loggedIn ? (
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
                                                <a href="/user/profile" data-text="Profile">Profile</a>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            ) : (
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
                                                    <a href="/login" data-text="Login">Login</a>
                                                </Textfit>
                                            </Col>
                                        </Row>
                                    </li>
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
                                                <div className="menu-sign-out" onClick={(event) => props.logOut(event)}>Sign Out</div>
                                            </Textfit>
                                        </Col>
                                    </Row>
                                </li>
                            ) : (
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
                                                    <a href="/create_account" data-text="Sign Up">Sign Up</a>
                                                </Textfit>
                                            </Col>
                                        </Row>
                                    </li>
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