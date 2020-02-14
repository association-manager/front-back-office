import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Aux from "../../hoc/_Aux";

class UserRegistration extends React.Component {

    state = {
        redirect: false
      };


    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/admin/membres' />
        }
      }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Création d'un nouvel utilisateur</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Nom</Form.Label>
                                                <Form.Control type="text" placeholder="Le nom de l'utilisateur" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="firstName">
                                                <Form.Label>Prénom</Form.Label>
                                                <Form.Control type="text" placeholder="Le prénom de l'utilisateur" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="username">
                                                <Form.Label>Nom d'utilisateur</Form.Label>
                                                <Form.Control type="text" placeholder="Nom d'utilisateur (username)" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="L'email de l'utilisateur" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="mobile">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control type="text" placeholder="Le téléphone de contact de l'utilisateur" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="dataUsageAgreement">
                                                <Form.Check type="checkbox" label="Accord d'utilisation" />
                                            </Form.Group>

                                            {this.renderRedirect()}
                                            <Button variant="primary" onClick={this.setRedirect}>
                                            Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserRegistration;
