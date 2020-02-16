import React from 'react';
import {Row, Col, Card, Button, Table} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Group from './Group'
import Aux from "../../hoc/_Aux";

class GroupList extends React.Component {

    state = {
        groups: [
            {id: 1, groupName: "Jean"},
            {id: 2, groupName: "Jeannine"},
            {id: 3, groupName: "Paul"},
            {id: 4, groupName: "Edouard"},
            {id: 5, groupName: "Ronaldo"},
        ],
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = (url) => {
        if (this.state.redirect) {
            return <Redirect to={url}/>
        }
    };


    handleDelete = id => {
        const groups = [...this.state.groups];
        const index = groups.findIndex(group => group.id === id);

        groups.splice(index, 1);

        this.setState({groups});
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={9} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as="h5">Groupe&nbsp;&nbsp;
                                    {this.renderRedirect('/admin/creation/groupe')}
                                    <Button variant="success" onClick={this.setRedirect}>
                                        + Créer un nouveau groupe
                                    </Button>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Groupe Nom</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRedirect('/admin/éditer/groupe')}
                                    {this.state.groups.map(group => (
                                        <Group
                                            details={group}
                                            key={group.id}
                                            onDelete={this.handleDelete}
                                            onEdit = {this.setRedirect}
                                        />
                                    ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default GroupList;