import React from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
export default class Content extends React.Component {
    render() {
        var stylefont = {
            fontStyle: "italic",
            fontFamily: "Artifika",
        }
        return (
            <Container>
                <Row>
                    <Col sm='12' md='12' style={{ marginTop: 100 }}>
                        <h1 style={stylefont}>Phan Tuấn Minh</h1> <br></br>
                        <h2 style={stylefont}>I'am Devoloper</h2>
                        <hr style={{ margin: 50 }}></hr>
                    </Col>
                    <Col sm='12' md={{ size: 6, offset: 3 }}>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <div className="about">
                                    <h1>What am i doing?</h1>
                                    <Col md={{ size: 6, offset: 3 }}>
                                        <div className="who">
                                            <h5>Think and do</h5>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md='12' style={{ margin: 30 }}>
                        <div style={{ fontSize: 20 }}>
                            <p style={stylefont}>
                                I’m personally interested in becoming a Font-end Web Developer. However, there are many different career opportunities that I like.
                                It takes a long time to take on an web course. It is very hard and requires a tremendous amount of patience and hard work. I hope that I’ll be able to overcome these challenges, and that my dream will come true.
                            </p>
                        </div>
                        <Row style={{ fontSize: 70 }} className="cando1">
                            <Col className="cando">
                                <i class="fas fa-drafting-compass"></i>
                                <h2>DESIGN</h2>
                            </Col>
                            <Col className="cando">
                                <i class="fas fa-code"></i>
                                <h2>PROGRAMMING</h2>
                            </Col>
                            <Col className="cando">
                                <i class="fab fa-codepen"></i>
                                <h2>LABORIUOS</h2>
                            </Col>
                            <Col className="cando">
                                <i class="fas fa-brain"></i>
                                <h2>CREATIVE</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md={{ size: 6, offset: 3 }}>
                        <hr style={{ margin: 50 }}></hr>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <div className="about">
                                    <h1>Professional Skills</h1>
                                    <Col md={{ size: 6, offset: 3 }}>
                                        <div className="who">
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md='12' style={{ margin: 30 }}>
                        <div>
                            <div className="text-left"><h3>HTML/CSS</h3></div>
                            <Progress animated color="danger" value="70" />
                            <div className="text-left"><h3>BOOSTRAP</h3></div>
                            <Progress animated color="danger" value="60" />
                            <div className="text-left"><h3>JAVASCRIPT</h3></div>
                            <Progress animated color="danger" value="30" />
                            <div className="text-left"><h3>REACTSTRAP</h3></div>
                            <Progress animated color="danger" value="30" />
                            <div className="text-left"><h3>RESPONSIVE</h3></div>
                            <Progress animated color="danger" value="60" />
                        </div>
                    </Col>
                    <Col sm='12' md={{ size: 6, offset: 3 }}>
                        <hr style={{ margin: 50 }}></hr>
                        <Row>
                            <Col sm="12" md={{ size: 12 }}>
                                <div className="about">
                                    <h1>Want to know more about me? <br></br> Click About on Menu</h1>
                                    <Col md={{ size: 6, offset: 3 }}>
                                        <div className="who">
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='12' md='12' style={{ marginTop: 100 }}>
                        <hr style={{ margin: 50 }}></hr>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}