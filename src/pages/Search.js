import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import NoSearchData from '../component/No-Search-Data';


const Search = () => {
    const location = useLocation();

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let search = query.get("name");

    const contactList = location.state.contactList.filter((item) => item.Name === search);

    // console.log(contactList)
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        {contactList.length !== 0 ?
                            <div>
                                <Table style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contactList.map((contact) => {
                                            return (
                                                <tr>
                                                    <td>{contact.Name}</td>
                                                    <td>{contact.Email}</td>
                                                    <td>+88{contact.PhoneNumber}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                                <div style={{ textAlign: "center" }}>
                                    <Link to='/contact'>
                                        <Button variant="success" size="sm">Back To Contact List</Button>
                                    </Link>
                                </div>
                            </div>
                            :
                            <NoSearchData />
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Search;