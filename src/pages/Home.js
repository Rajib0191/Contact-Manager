import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';

const Home = () => {
    return (
        <div className='home__page__section'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='home__page__content__container'>
                            <h3 className='home__page__header'>Welcome to our Contact Manager Application</h3>
                            <p className=''>
                                “Contact Manager” is an application where a user can create a list of contacts, can view,
                                update and delete individual contact data. But one must need to be authenticated to create
                                their desired list of contacts.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed eros nec arcu auctor sagittis.
                                Nunc elementum a eros nec consequat. Suspendisse et lacus eu odio consequat congue vitae quis magna.
                                Donec id ante dignissim, sagittis ipsum a, euismod dolor. Suspendisse eget odio nulla. Ut placerat,
                                dui vel suscipit semper, ipsum ex feugiat diam, id hendrerit enim tortor vitae velit. Duis nunc orci,
                                viverra in suscipit quis, congue sit amet metus. Etiam blandit volutpat risus, eu finibus felis consectetur vitae.
                                Proin cursus ipsum accumsan dui aliquam laoreet. Proin justo tellus, suscipit at pulvinar efficitur, euismod at nulla.
                                Cras consequat arcu vitae diam bibendum pellentesque.
                            </p>
                            <Link to='/login' className='home__button'>Create Your Favourite Contact list</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;