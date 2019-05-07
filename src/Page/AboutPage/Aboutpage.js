import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Aboutpage = () => {
    let imgUrl = require('../../img/_MG_8490.jpg')
    return (
        <Container >
            <Row className="aboutme">
                <Col sm='12' md={{ size: 6, offset: 3 }}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="about">
                                <h1>ABOUT ME</h1>
                                <Col md={{ size: 6, offset: 3 }}>
                                    <div className="who">
                                        <h5>Who am i?</h5>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <hr style={{ margin: 50 }}></hr>
                    </Row>
                </Col>
                <div className="line">
                    <div className="circle"></div>
                </div>
            </Row>
            <Row>
                <Col sm='12' md={{ size: 12 }}>
                    <Col sm='6' md={{ size: 4 }}>
                        <div className="pic" style={{ backgroundImage: 'url(' + imgUrl + ')' }}></div>
                    </Col>
                    <Col sm='6' md={{ size: 7, offset: 1 }} style={{ textAlign: 'left', }}>
                        <Col sm='6' md={{ size: 4 }}>
                            <h2 className='styleaw'>Full Name: </h2> <br></br>
                            <h2 className='styleaw'>Date of Birthday: </h2> <br></br>
                            <h2 className='styleaw'>Address: </h2> <br></br>
                            <h2 className='styleaw'>Phone: </h2> <br></br>
                            <h2 className='styleaw'>Email: </h2> <br></br>
                        </Col>
                        <Col sm='6' md={{ size: 8 }}>
                            <h2 className='styleq'> Phan Tuấn Minh</h2> <br></br>
                            <h2 className='styleq'> 22 January 1999</h2> <br></br>
                            <h2 className='styleq'> Từ Liêm, Hà Nội, Việt Nam</h2> <br></br>
                            <h2 className='styleq'> 0367592801</h2> <br></br>
                            <h2 className='styleq'> phantuanminhnh117@gmail.com</h2> <br></br>
                        </Col>
                        <Col md='12'>
                            <hr></hr>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Col>
                </Col>  
                <Col sm='12' md='12' style={{ marginTop: 100 }}>
                        <hr style={{ margin: 50 }}></hr>
                        
                    </Col>
            </Row>
            
        </Container>
    );
}
export default Aboutpage; 