import React from "react";
import GroupButton from '../General/GroupButton'

const Project = ({ details, onDelete, onEdit, isAdminOrSuperAdmin }) => (
    <tr>
        <th>{details.id}</th>
        <td>{details.name}</td>
        <td>{details.owner}</td>
        <td>{details.status}</td>
        <td>{details.startDate}</td>
        <td>{details.deadLine}</td>
        
        {(isAdminOrSuperAdmin) ? (
            <td>
                <GroupButton
                    details={details}
                    onDelete={onDelete}
                    onEdit = {onEdit}
                />
            </td>
        ):<td></td>}
    </tr>
);

export default Project;