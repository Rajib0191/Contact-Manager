import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoSearchData = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
            <h1 style={{ textAlign: "center" }}>No Search Data</h1>
            <div style={{ textAlign: "center" }}>
                <Link to='/contact'>
                    <Button variant="success" size="sm">Back To Contact List</Button>
                </Link>
            </div>
        </div>
    );
};

export default NoSearchData;