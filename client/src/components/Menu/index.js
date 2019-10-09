import React from 'react';
import { Col, Row } from "../Grid";
import Radio from '@material-ui/core/Radio';
import "./style.css";

function ShopMenu(props) {
    let featured = true;
    function collapseFeatured(event) {
        event.preventDefault();
        featured = !featured;
    }

    return (
        <div className="menu white">
            <Row>
                <Col size="md-10">
                    <h4 className="white">
                        Featured
                    </h4>
                </Col>
                <Col size="md-2">
                    <button onClick={collapseFeatured} className="menu-collapse white">
                        -
                    </button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
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
                </Col>
            </Row>
            <Row>
                <Col size="md-10">
                    <h4 className="white">
                        Instruments
                    </h4>
                </Col>
                <Col size="md-2">
                    <button onClick={collapseFeatured} className="menu-collapse white">
                        -
                    </button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
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
                </Col>
            </Row>
            <Row>
                <Col size="md-10">
                    <h4 className="white">
                        Bundles
                    </h4>
                </Col>
                <Col size="md-2">
                    <button onClick={collapseFeatured} className="menu-collapse white">
                        -
                    </button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
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
                </Col>
            </Row>
            <Row>
                <Col size="md-10">
                    <h4 className="white">
                        Type
                    </h4>
                </Col>
                <Col size="md-2">
                    <button onClick={collapseFeatured} className="menu-collapse white">
                        -
                    </button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
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
                </Col>
            </Row>

        </div>
    )
}

export default ShopMenu;