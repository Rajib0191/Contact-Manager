import React, { useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { useUserAuth } from '../contexts/AuthContext';


const ContactRow = ({ data, onSuccessfulDelete }) => {
    const navigate = useNavigate();
    const { usersCollectionRef } = useUserAuth();
    const [deleteloding, setDeleteLoding] = useState(false);

    const onDelete = async (id) => {
        setDeleteLoding(true);
        const data = doc(usersCollectionRef, id);
        await deleteDoc(data);
        onSuccessfulDelete(id);
        setDeleteLoding(false)
    }

    return (
        <div>
            <Table>
                <tbody key={data.id}>
                    <tr>
                        <td style={{ textAlign: "center", minWidth: "200px", }}>{data.Name}</td>
                        <td style={{ textAlign: "center", minWidth: "200px", }}>{data.Email}</td>
                        <td style={{ textAlign: "center", minWidth: "200px", }}>+88 {data.PhoneNumber}</td>
                        <td style={{ textAlign: "center", minWidth: "200px" }}>
                            <Button variant="warning"
                                onClick={() => navigate('/update', { state: { data } })}>
                                Edit
                            </Button>
                            {
                                deleteloding ?
                                    <Button variant="primary" disabled style={{ margin: "0 10px" }}>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    </Button>
                                    :
                                    <Button variant="danger" style={{ margin: "0 10px" }}
                                        onClick={() => onDelete(data.id)}>
                                        Delete
                                    </Button>
                            }
                            <Button variant="warning"
                                onClick={() => navigate('/view', { state: { data } })}>
                                View
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ContactRow;