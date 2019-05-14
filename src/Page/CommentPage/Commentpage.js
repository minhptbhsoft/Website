import React from 'react';
import { Row, Container, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
export default class Commentpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }
    upcomment() {
        var url = 'http://localhost:3000/comments';
        var name = document.getElementById("username").value;
        var content = document.getElementById("userpassword").value;
        var data = { name, content };
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
    }
    componentDidMount() {
        fetch("http://localhost:3000/comments")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json,
                })
            });
    }

    render() {
        var styleb = {
            height: 50,
        }
        var { isLoaded, data } = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>
        }
        else
            return (
                <Container>
                    <Row className="aboutme">
                        <Col sm='12' md={{ size: 6, offset: 3 }}>
                            <Row>
                                <Col sm="12" md={{ size: 6, offset: 3 }}>
                                    <div className="about">
                                        <h1>Thank you</h1>
                                        <Col md={{ size: 10, offset: 1 }}>
                                            <div className="who">
                                                <h5>I need your comment ... </h5>
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
                        <Col md={{ size: 5, offset: 1 }}>
                            <Form style={{ textAlign: 'left' }}>
                                <FormGroup>
                                    <Label className="styleq" for="exampleEmail">Name</Label>
                                    <Input style={styleb} type="name" name="Your Name" id="username" placeholder="Your name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="styleq" for="exampleText">Your comment</Label>
                                    <Input style={styleb} type="textarea" name="text" id="userpassword" placeholder="Comment here" />
                                </FormGroup>
                                <Button onClick={this.upcomment}>Submit</Button>
                            </Form>
                        </Col>
                        <Col md={{ size: 5 }} style={{ textAlign: 'left' }}>
                            <h1>Your Comment here:</h1>
                            <ul>
                                {data.map(item => (
                                    <li className="styleq" key={item.id}>
                                        {item.name} <br></br> {item.content} <hr></hr>
                                    </li>
                                ))};
                        </ul>
                        </Col>
                        <Col sm='12' md='12' style={{ marginTop: 100 }}>
                            <hr style={{ margin: 50 }}></hr>

                        </Col>
                    </Row>
                </Container>
            )
    }
}