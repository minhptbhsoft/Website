import React from 'react';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input,} from 'reactstrap';
export default class Contactpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }
    upcontact() {
        var url = 'http://localhost:3000/contacts';
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var description = document.getElementById("description").value;
        var data = { name, email, phone, description };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        window.location.reload();
        alert("Your infor has been save...");
    }

    render() {
        var styleb = {
            height: 50,
        }
        return (

            <Container>
            <Row className="aboutme">
                <Col sm='12' md={{ size: 6, offset: 3 }}>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="about">
                                <h1>CONTACT</h1>
                                <Col md={{ size: 6, offset: 3 }}>
                                    <div className="who">
                                        <h5>SEND ME?</h5>
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
                <Row style={{ marginTop: 100 }}>
                    <Col md={{size: 5, offset:1}}>
                    <Form style={{textAlign: 'left'}}>
                        <FormGroup>
                            <Label className="styleq" for="exampleEmail">Name</Label>
                            <Input style={styleb} type="name" name="Your Name" id="name" placeholder="Your name" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="styleq" for="exampleEmail">Email</Label>
                            <Input style={styleb}  type="email" name="email" id="email" placeholder="Your email" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="styleq" for="examplePassword">Phone</Label>
                            <Input style={styleb}  type="password" name="password" id="phone" placeholder="Phone number" />
                             </FormGroup>
                        <FormGroup>
                            <Label className="styleq" for="exampleText">Description</Label>
                            <Input style={styleb}  type="textarea" name="text" id="description" />
                        </FormGroup>
                        <Button onClick={this.upcontact}>Submit</Button>
                    </Form>
                    </Col>
                    <Col md={{size: 5}} style={{textAlign: 'left'}}>
                        <h2>ADDRESS</h2> <br></br>
                        <h4>Tu Liem, Ha Noi, Viet Nam</h4> <br></br>
                        <hr></hr>
                        <h2>CONTACT INFO</h2> <br></br>
                        <h4>phantuanminhnh117@gmail.com</h4> <br></br>
                        <h4>+84 367 59 2801</h4> <br></br>
                        <hr></hr>
                        <h2>FREE TIME</h2> <br></br>
                        <h4>Every time</h4> <br></br>
                        <hr></hr>
                    </Col>
                    <Col sm='12' md='12' style={{ marginTop: 100 }}>
                        <hr style={{ margin: 50 }}></hr>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}