import React, { Component } from "react";
import ReactPlayer from 'react-player';
import { Col, Row, Container } from "../components/Grid";

class Tutorials extends Component {
    state = {
        playing: false,
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                    <Col size="md-12">
                            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="Learn" className="add-shadow" id="search-top-image"></img>
                        </Col>
                        <Col size="md-12">
                            <h1 className="purple f-top-pad text-shadow padding-bottom">
                                Tutorial Videos
                            </h1>
                        </Col>
                    </Row>
                    <div className="tutorial-videos">
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <div className="video purple">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=hU5XhG5Ywbk&t=3s'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        Logic Pro X Setup
                                    </h6>
                                </div>

                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                            <div className="video">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=qMaVhqSsPcE'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        Vocal Recording
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <div className="video">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=5jTsSvkBv60'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        Tune Your Guitar
                                    </h6>
                                </div>

                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                            <div className="video">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=E51zYgMSRb0'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        Mic A Guitar Amp
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-1" />
                            <Col size="md-4">
                                <div className="video">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=dqNdnxpCmSI'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        Intro to EQ
                                    </h6>
                                </div>

                            </Col>
                            <Col size="md-2" />
                            <Col size="md-4">
                            <div className="video">
                                    <ReactPlayer
                                        className="add-shadow"
                                        url='https://www.youtube.com/watch?v=oBK2re5wRmE'
                                        playing={this.state.playing}
                                        width="100%"
                                        height="75%"
                                    />
                                    <h6 className="center text-shadow f-top-pad">
                                        DJ Controller Review
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Tutorials;