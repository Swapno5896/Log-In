import React from 'react';
import { Button ,Nav,FormControl,Form,Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogIn = () => {
    return (
     <div>
        <Container>
          <Row>
            <Col xs={12} md={6}>
                <img style={{width:'100%',margin:'0px', padding:'0px'}} src="https://i.ibb.co/FWxxVj7/Cute-woman-sitting-with-laptop-in-cozy-scandinavian-home-interior-Gadget-addiction-concept-Girl-spen.jpg" alt=""/>
            </Col>
            <Col xs={12} md={4}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
          </Row>
        </Container>
    </div>
    );
};

export default LogIn;