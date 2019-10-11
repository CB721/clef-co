import React from 'react';
import { Col, Row } from "../Grid";
import Radio from '@material-ui/core/Radio';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import "./style.css";

function ShopMenu(props) {
    return (
        <div className="menu white">
            <Row>
                <Col size="md-9">
                    <h4 className="white" onClick={props.collapseFeatured}>
                        Featured
                    </h4>
                </Col>
                <Col size="md-2">
                    <ArrowForwardIcon
                        onClick={props.collapseFeatured}
                        className={props.featuredClass}
                    />
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row classname={props.collapseFeaturedItems}>
                <Col size="md-12">
                    {props.collapseFeaturedItems === "content-expand" ? (
                        <div className={props.collapseFeaturedItems}>
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        On Sale
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Bestsellers
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-9">
                    <h4 className="white" onClick={props.collapseInsturments}>
                        Instruments
                    </h4>
                </Col>
                <Col size="md-2">
                    <ArrowForwardIcon
                        onClick={props.collapseInsturments}
                        className={props.instrumentClass}
                    />
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row className={props.collapseInstrumentItems}>
                <Col size="md-12">
                    {props.collapseInstrumentItems === "content-expand" ? (
                        <div className={props.collapseInstrumentItems}>
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Guitars & Amps
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Microphones
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Keyboards & Pianos
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Bass
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Headphones
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Drums & Drum Machines
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        DJ Equipment
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Recording Software
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-9">
                    <h4 className="white" onClick={props.collapseBundles}>
                        Bundles
                    </h4>
                </Col>
                <Col size="md-2">
                    <ArrowForwardIcon
                        onClick={props.collapseBundles}
                        className={props.bundleClass}
                    />
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row className={props.collapseBundleItems}>
                <Col size="md-12">
                    {props.collapseBundleItems === "content-expand" ? (
                        <div className={props.collapseBundleItems}>
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Vocalists
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Synths
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Begineers
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                        </div>
                    ) : (<div />)}
                </Col>
            </Row>
            <Row>
                <Col size="md-9">
                    <h4 className="white" onClick={props.collapseTypes}>
                        Type
                    </h4>
                </Col>
                <Col size="md-2">
                    <ArrowForwardIcon
                        onClick={props.collapseTypes}
                        className={props.typeClass}
                    />
                </Col>
            </Row>
            <Divider orientation="horizontal" />
            <Row>

                <Col size="md-12">
                    {props.collapseTypeItems === "content-expand" ? (
                        <div className={props.collapseTypeItems}>
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Hardware
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
                                </Col>
                            </Row>
                            <Divider orientation="horizontal" />
                            <Row>
                                <Col size="md-8">
                                    <h6>
                                        Software
                            </h6>
                                </Col>
                                <Col size="md-4">
                                    <Radio />
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