import React from 'react';
import { Col, Row } from "../Grid";
import Radio from '@material-ui/core/Radio';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import "./style.css";

function ShopMenu(props) {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#3E0768' }
        },
    });
    return (
        <div className="menu white add-shadow">
            <Row>
                <div className="category-header menu-top" onClick={props.collapseFeatured}>
                    <Col size="9">
                        <h4 className="white">
                            Featured
                        </h4>
                    </Col>
                    <Col size="3">
                        <ArrowForwardIcon
                            className={props.featuredClass}
                        />
                    </Col>
                </div>
            </Row>
            <Divider orientation="horizonal" />
            <Row classname={props.collapseFeaturedItems}>
                {props.collapseFeaturedItems === "content-expand" ? (
                    <div className={props.collapseFeaturedItems}>
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Most popular
                                    </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="topProducts"
                                            onClick={props.handleChange}
                                            checked={props.topProducts}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Bestsellers
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="bestsellers"
                                            value={props.bestsellers}
                                            onClick={props.handleChange}
                                            checked={props.bestsellers}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ) : (<div />)}
            </Row>
            <Row>
                <div className="category-header" onClick={props.collapseInsturments}>
                    <Col size="9">
                        <h4 className="white">
                            Instruments
                                </h4>
                    </Col>
                    <Col size="3">
                        <ArrowForwardIcon
                            className={props.instrumentClass}
                        />
                    </Col>
                </div>
            </Row>
            <Divider orientation="horizonal" />
            <Row className={props.collapseInstrumentItems}>
                {props.collapseInstrumentItems === "content-expand" ? (
                    <div className={props.collapseInstrumentItems}>
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Guitars & Amps
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="guitars"
                                            value={props.guitars}
                                            onClick={props.handleChange}
                                            checked={props.guitars}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Microphones
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="microphone"
                                            value={props.microphone}
                                            onClick={props.handleChange}
                                            checked={props.microphone}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Keyboards & Pianos
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="keyboards"
                                            value={props.keyboards}
                                            onClick={props.handleChange}
                                            checked={props.keyboards}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Bass
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="bass"
                                            value={props.bass}
                                            onClick={props.handleChange}
                                            checked={props.bass}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Headphones
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="headphones"
                                            value={props.headphones}
                                            onClick={props.handleChange}
                                            checked={props.headphones}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Drums
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="drums"
                                            value={props.drums}
                                            onClick={props.handleChange}
                                            checked={props.drums}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        DJ Equipment
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="dj"
                                            value={props.dj}
                                            onClick={props.handleChange}
                                            checked={props.dj}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Recording Software
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="recording"
                                            value={props.recording}
                                            onClick={props.handleChange}
                                            checked={props.recording}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                    </div>
                ) : (<div />)}
            </Row>
            <Row>
                <div className="category-header" onClick={props.collapseBundles}>
                    <Col size="9">
                        <h4 className="white">
                            Bundles
                                </h4>
                    </Col>
                    <Col size="3">
                        <ArrowForwardIcon
                            className={props.bundleClass}
                        />
                    </Col>
                </div>
            </Row>
            <Divider orientation="horizonal" />
            <Row className={props.collapseBundleItems}>
                {props.collapseBundleItems === "content-expand" ? (
                    <div className={props.collapseBundleItems}>
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Rock Band
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="rock-band"
                                            value={props.rockBand}
                                            onClick={props.handleChange}
                                            checked={props.rockBand}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Country
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="country"
                                            value={props.country}
                                            onClick={props.handleChange}
                                            checked={props.country}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Hip Hop
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="hip-hop"
                                            value={props.hipHop}
                                            onClick={props.handleChange}
                                            checked={props.hipHop}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        EDM
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="edm"
                                            value={props.edm}
                                            onClick={props.handleChange}
                                            checked={props.edm}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ) : (<div />)}
            </Row>
            <Row>
                <div className="category-header menu-bottom" onClick={props.collapseTypes}>
                    <Col size="9">
                        <h4 className="white">
                            Type
                                </h4>
                    </Col>
                    <Col size="2">
                        <ArrowForwardIcon
                            className={props.typeClass}
                        />
                    </Col>
                </div>
            </Row>
            <Divider orientation="horizonal" />
            <Row>
                {props.collapseTypeItems === "content-expand" ? (
                    <div className={props.collapseTypeItems}>
                        <div className="menu-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Hardware
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="hardware"
                                            value={props.hardware}
                                            onClick={props.handleChange}
                                            checked={props.hardware}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                        <Divider orientation="horizonal" />
                        <div className="menu-sub-category last-sub-category">
                            <Row>
                                <Col size="8">
                                    <h6>
                                        Software
                                                </h6>
                                </Col>
                                <Col size="4">
                                    <MuiThemeProvider theme={theme}>
                                        <Radio
                                            color="primary"
                                            name="software"
                                            value={props.software}
                                            onClick={props.handleChange}
                                            checked={props.software}
                                        />
                                    </MuiThemeProvider>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ) : (<div />)}
            </Row>
        </div>
    )
}

export default ShopMenu;