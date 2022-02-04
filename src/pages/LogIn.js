import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import { useUserAuth } from "../contexts/AuthContext";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const { login } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            await login(email, password);
            navigate("/contact");
        } catch (err) {
            setErr(err.message);
        }
    }
    return (
        <section className='login__section'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='login__wrapper'>
                            <h1>Login</h1>
                            <div className='login__alert__container'>
                                {err && <Alert variant="danger" className='login__alert'>{err}</Alert>}
                            </div>
                            <form className='login__form' onSubmit={handleSubmit}>
                                <input type='email' placeholder='Email address' className='input__email'
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input type='password' placeholder='Password' className='input__password'
                                    onChange={(e) => setPassword(e.target.value)} />
                                <input type='submit' value='Log in' className='submit__button' />
                            </form>
                            <div className='connect__signup'>
                                <p>Don’t have an account?
                                    <span>
                                        <Link to='/sign-up'>Create One</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default LogIn;