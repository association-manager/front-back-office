import React from "react";
import {Button} from 'react-bootstrap';

const Association = ({ details, onDelete }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.name}</td>
        <td>{details.type}</td>
        <td>{details.entryDate}</td>
        <td>
            <Button variant="secondary">
                <i className="fa fa-eye f-22 m-r-10"/>
            </Button>
            <Button variant="primary">
                <i className="fa fa-edit f-22 m-r-10"/>
            </Button>
            <Button variant="danger" onClick={() => onDelete(details.id)}>
                <i className="fa fa-trash f-22 m-r-10"/>
            </Button>
        </td>
    </tr>
);

export default Association;