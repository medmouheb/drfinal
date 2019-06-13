import React, { Component } from 'react';
import { Form, Button,Container } from 'react-bootstrap'

class ContactForm extends Component {
    render() {
        return (
            <Container>
                <h1>contact</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontFamily:"italic"}}>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default ContactForm 