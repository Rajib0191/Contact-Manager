import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Contact-Form.css";
import { useUserAuth } from "../contexts/AuthContext";
import { addDoc } from "firebase/firestore";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [err, setErr] = useState("");
    const { usersCollectionRef, user } = useUserAuth();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setErr("");
        try {
            await addDoc(usersCollectionRef, { Name: name, Email: email, PhoneNumber: number, owner: user.email });
            setDisabled(false);
            navigate("/contact");
        } catch (err) {
            setErr(err.message);
        }
    }
    return (
        <div className="contact__form__section">
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <div className="contact__form__wrapper">
                            <div>
                                <h1 className="contact__form__header">Manage your contact</h1>
                                {err && <Alert variant="danger">{err}</Alert>}
                            </div>
                            <Form className="" onSubmit={handleSubmit}>
                                <Form.Control type="text" placeholder="Fullname" className="fullname__field" required
                                    onChange={(e) => setName(e.target.value)} />
                                <Form.Control type="email" placeholder="Email" className="email__field" required
                                    onChange={(e) => setEmail(e.target.value)} />
                                <Form.Control type="number" placeholder="Phone Number" className="mobile__field" required
                                    onChange={(e) => setNumber(e.target.value)} />
                                <Form.Control type="submit" className="submit__contact__button" disabled={disabled} />
                            </Form>
                        </div>
                        <div className='add-contact-button'>
                            <Link to='/contact'>
                                <Button variant="success" size="sm">Back To Contact List</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container >
        </div >
    )
}
export default ContactForm;