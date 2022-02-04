
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/signup.css';
import { useUserAuth } from "../contexts/AuthContext";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [err, setErr] = useState("");
    const { signup } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            await signup(email, password);
            navigate("/login");
        } catch (err) {
            setErr(err.message);
        }
    }
    return (
        <div className="signup__section">
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <div className="signup__wrapper">
                            <div>
                                <h1 className="signup__header">Create a free account to manage your contact</h1>
                                {err && <Alert variant="danger">{err}</Alert>}
                            </div>
                            <form className="signup__form" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-lg-6">
                                        <input type='text' placeholder="First name" className="first__name form-control"
                                            onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type='text' placeholder="Last name" className="last__name form-control"
                                            onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type='email' placeholder="Email address" className="email__field form-control"
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type='password' placeholder="Password" className="password__field form-control"
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type='submit' value="create a free account" className="create__account__button form-control " />
                                    </div>
                                </div>
                            </form>
                            <div className='connect__login'>
                                <p>Already have a account?
                                    <span>
                                        <Link to='/login'>Log in</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    )
}
export default SignUp;