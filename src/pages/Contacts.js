import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Nodata from '../component/Nodata';
import { useUserAuth } from '../contexts/AuthContext';
import '../assets/css/Contact.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import Loading from '../component/Loading';
import ContactRow from '../component/ContactRow';

const Contacts = () => {
    const { user, usersCollectionRef } = useUserAuth();
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const contact = await getDocs(usersCollectionRef);
            const dataList = []
            const data = (contact.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            data.forEach((doc) => {
                if (doc.owner === user.email) {
                    dataList.push(doc);
                }
            })
            setContactList(dataList);
            setLoading(false);

        } catch (err) {
            console.log(err.message)
        }
    };
    useEffect(() => {
        getData();
    }, [user]);
    return (
        <div>
            {loading ?
                <Loading /> :
                contactList.length !== 0 ?
                    <div>
                        <Navbar contactList={contactList} />
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className='contact__section'>
                                        <div className='contact__wrapper'>
                                            <div className='contact__list'>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ textAlign: "center", minWidth: "87px" }}>Name</th>
                                                            <th style={{ textAlign: "center", minWidth: "87px" }}>Email</th>
                                                            <th style={{ textAlign: "center", minWidth: "87px" }}>Number</th>
                                                            <th style={{ textAlign: "center", minWidth: "87px" }}>Actions</th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                                {contactList.map((contact) => {
                                                    return (
                                                        <div key={contact.id}>
                                                            <ContactRow data={contact} onSuccessfulDelete={(id) => { setContactList(contactList.filter((item) => item.id !== id)); }} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div >
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    :
                    <Nodata />}
        </div >
    );
}

export default Contacts;