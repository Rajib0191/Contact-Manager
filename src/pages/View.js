import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import "../assets/css/View.css";


const View = () => {
    const location = useLocation();
    console.log(location.state.data)
    return (
        <div style={{ paddingTop: "50px" }}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="text-center">User Contact Details</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ display: "inline-block" }}>Name:</Card.Title>
                                <Card.Text style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        {location.state.data.Name}
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title style={{ display: "inline-block" }}>Email:</Card.Title>
                                <Card.Text style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        {location.state.data.Email}
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title style={{ display: "inline-block" }}>Phone Number:</Card.Title>
                                <Card.Text style={{ display: "inline-block", marginLeft: "20px" }}>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        {location.state.data.PhoneNumber}
                                    </h5>
                                </Card.Text>
                            </Card.Body>
                            {/* <Button variant="primary"> */}
                            <Link to="/contact" className='view__page__button'>
                                Go To Contact List
                            </Link>
                            {/* </Button> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default View;