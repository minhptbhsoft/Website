import React from 'react'; 
import {Container, Row, Col} from 'reactstrap';
export default class Footer extends React.Component{
    render(){
        return(
            <Container>
                <Row className="footer">
                    <Col sm='12' md='12'>
                    <h5 style={{fontStyle: 'italic'}}>©Copyright2019: MySelf. Just Kidding :D </h5> <br></br>                        
                    </Col>
                </Row>
            </Container>
        )
    }
}