import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/navbar.css";
import { useUserAuth } from '../contexts/AuthContext';

const Navbar = ({ contactList }) => {
    const { user, logout } = useUserAuth();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    // console.log(contactList)

    const handleClick = async () => {
        try {
            await logout();

        } catch (err) {
            console.log(err.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?name=${search}`, { state: { contactList } })
        setSearch("");
    }
    return (
        <div className='navbar__section'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='navbar__container'>
                            <div className=''>
                                <p>Welcome {user && user.email}</p>
                            </div>
                            <form onSubmit={handleSubmit} contactList={contactList}>
                                <input
                                    type='text'
                                    placeholder='Search Name...'
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    className='search__field'
                                />
                            </form>
                            <div className='navbar__right__side'>
                                <div className='add-contact-button'>
                                    <Link to='/contact-form'>
                                        <Button variant="success">Add contact</Button>
                                    </Link>
                                </div>
                                <Link to='/login' className='logout__button' onClick={handleClick}>Logout</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Navbar;