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
        <div className="menu white">
            <Row>
                <Col size="md-12">
                    <div className="category-header" onClick={props.collapseFeatured}>
                        <Row>
                            <Col size="md-9">
                                <h4 className="white">
                                    Featured
                                </h4>
                            </Col>
                            <Col size="md-2">
                                <ArrowForwardIcon
                                    className={props.featuredClass}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row classname={props.collapseFeaturedItems}>
                <Col size="md-12">
                    {props.collapseFeaturedItems === "content-expand" ? (
                        <div className={props.collapseFeaturedItems}>
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    On Sale
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
                                                <MuiThemeProvider theme={theme}>
                                                    <Radio
                                                        color="primary"
                                                        name="onSale"
                                                        onClick={props.handleChange}
                                                        checked={props.onSale}
                                                    />
                                                </MuiThemeProvider>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Bestsellers
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="category-header" onClick={props.collapseInsturments}>
                        <Row>
                            <Col size="md-9">
                                <h4 className="white">
                                    Instruments
                                </h4>
                            </Col>
                            <Col size="md-2">
                                <ArrowForwardIcon
                                    className={props.instrumentClass}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row className={props.collapseInstrumentItems}>
                <Col size="md-12">
                    {props.collapseInstrumentItems === "content-expand" ? (
                        <div className={props.collapseInstrumentItems}>
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Guitars & Amps
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Microphones
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
                                                <MuiThemeProvider theme={theme}>
                                                    <Radio
                                                        color="primary"
                                                        name="microphones"
                                                        value={props.microphones}
                                                        onClick={props.handleChange}
                                                        checked={props.microphones}
                                                    />
                                                </MuiThemeProvider>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Keyboards & Pianos
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Bass
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Headphones
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>

                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Drums & Drum Machines
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    DJ Equipment
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Recording Software
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>

                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="category-header" onClick={props.collapseBundles}>
                        <Row>
                            <Col size="md-9">
                                <h4 className="white">
                                    Bundles
                                </h4>
                            </Col>
                            <Col size="md-2">
                                <ArrowForwardIcon
                                    className={props.bundleClass}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row className={props.collapseBundleItems}>
                <Col size="md-12">
                    {props.collapseBundleItems === "content-expand" ? (
                        <div className={props.collapseBundleItems}>
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Vocalists
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
                                                <MuiThemeProvider theme={theme}>
                                                    <Radio
                                                        color="primary"
                                                        name="vocalists"
                                                        value={props.vocalists}
                                                        onClick={props.handleChange}
                                                        checked={props.vocalists}
                                                    />
                                                </MuiThemeProvider>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Synths
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
                                                <MuiThemeProvider theme={theme}>
                                                    <Radio
                                                        color="primary"
                                                        name="synths"
                                                        value={props.synths}
                                                        onClick={props.handleChange}
                                                        checked={props.synths}
                                                    />
                                                </MuiThemeProvider>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Begineers
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
                                                <MuiThemeProvider theme={theme}>
                                                    <Radio
                                                        color="primary"
                                                        name="begineers"
                                                        value={props.begineers}
                                                        onClick={props.handleChange}
                                                        checked={props.begineers}
                                                    />
                                                </MuiThemeProvider>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="category-header" onClick={props.collapseTypes}>
                        <Row>
                            <Col size="md-9">
                                <h4 className="white">
                                    Type
                                </h4>
                            </Col>
                            <Col size="md-2">
                                <ArrowForwardIcon
                                    className={props.typeClass}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row>
                <Col size="md-12">
                    {props.collapseTypeItems === "content-expand" ? (
                        <div className={props.collapseTypeItems}>
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Hardware
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-12">
                                    <div className="menu-sub-category">
                                        <Row>
                                            <Col size="md-8">
                                                <h6>
                                                    Software
                                                </h6>
                                            </Col>
                                            <Col size="md-4">
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
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
        </div>
    )
}

export default ShopMenu;