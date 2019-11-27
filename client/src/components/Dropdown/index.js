import React, { useEffect, useState } from "react";
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./style.css";

function Dropdown(props) {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };
    useEffect(() => {
        setState({ ...state, left: props.isOpen });
    }, [props.isOpen]);
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
    const styles = {
        paper: {
            background: '#000000'
        }
    };
    function goToHome() {
        window.location.href = "/";
    }
    function goToProducts() {
        window.location.href = "/products";
    }
    function goToTutorials() {
        window.location.href = "/tutorials";
    }
    function goToShop() {
        window.location.href = "/shop";
    }
    function goToSearch() {
        window.location.href = "/search";
    }
    function goToContact() {
        window.location.href = "/contact";
    }
    function goToLogin() {
        window.location.href = "/login";
    }
    function goToSignUp() {
        window.location.href = "/create_account";
    }
    function goToProfile() {
        if (props.loggedIn) {
            window.location.href = "/user/profile";
        } else {
            window.location.href = "/login";
        }
    }


    return (

        <MuiThemeProvider theme={theme}>
            <Drawer
                classes={{ paper: styles.paper.background }}
                open={state.left}
                onClose={toggleDrawer('left', false)}
            >
                <List>
                    <ListItem button onClick={goToHome}>
                        <ListItemIcon>
                            <HomeOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={goToProducts}>
                        <ListItemIcon>
                            <AudiotrackOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Products"} />
                    </ListItem>
                    <ListItem button onClick={goToTutorials}>
                        <ListItemIcon>
                            <MusicVideoOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Tutorials"} />
                    </ListItem>
                    <ListItem button onClick={goToShop}>
                        <ListItemIcon>
                            <AddShoppingCartOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Shop"} />
                    </ListItem>
                    <ListItem button onClick={goToContact}>
                        <ListItemIcon>
                            <ContactSupportOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItem>
                    <ListItem button onClick={goToSearch}>
                        <ListItemIcon>
                            <SearchOutlinedIcon className="white"/>
                        </ListItemIcon>
                        <ListItemText primary={"Search"} />
                    </ListItem>
                    {props.loggedIn ? (
                        <ListItem button onClick={goToProfile}>
                            <ListItemIcon>
                                <HeadsetOutlinedIcon className="white"/>
                            </ListItemIcon>
                            <ListItemText primary={"Profile"} />
                        </ListItem>
                    ) : (
                            <ListItem button onClick={goToLogin}>
                                <ListItemIcon>
                                    <HeadsetOutlinedIcon className="white"/>
                                </ListItemIcon>
                                <ListItemText primary={"Login"} />
                            </ListItem>
                        )}
                    {props.loggedIn ? (
                        <ListItem button onClick={(event) => props.logOut(event)}>
                            <ListItemIcon>
                                <AccountCircleOutlinedIcon className="white"/>
                            </ListItemIcon>
                            <ListItemText primary={"Sign Out"} />
                        </ListItem>
                    ) : (
                            <ListItem button onClick={goToSignUp}>
                                <ListItemIcon>
                                    <AccountCircleOutlinedIcon className="white"/>
                                </ListItemIcon>
                                <ListItemText primary={"Sign Up"} />
                            </ListItem>
                        )}
                </List>
            </Drawer>
        </MuiThemeProvider>
    )
}

export default Dropdown;