import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FaGithub } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import { Container } from "react-bootstrap";

const Login = () => {
    const { ProviderLogIn, userLogIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        ProviderLogIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                if (user?.email) {
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleGithubSignIn = () => {
        ProviderLogIn(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError("");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            });
    };

    return (
        <Container >

            <div className="mt-5 bg-info p-lg-5 p-md-5 px-sm-2 py-sm-5 py-5 rounded-2 mb-5 ">
                <h3 className="text-center text-dark fw-bolder">Log In</h3>
                <Form className="mt-5 w-50 mx-auto" onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="text-dark">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            className="bg-light border-0"
                        />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label className="text-dark ">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="bg-light border-0"
                        />
                    </Form.Group>

                    <Form.Text className="text-danger fw-semibold">
                        <p className="text-center">{error}</p>
                    </Form.Text>

                    <Button
                        variant="dark w-100"
                        className="mt-3 fw-semibold"
                        type="submit"
                    >
                        Login
                    </Button>
                    <p className="text-center text-white mt-4">
                        <small>
                            Don't have an account?
                            <Link
                                className="text-decoration-none text-dark ms-1 fw-semibold"
                                to="/signup"
                            >
                                Sign Up
                            </Link>
                        </small>
                    </p>
                </Form>
                <div className="d-flex mt-5 align-items-center justify-content-center mb-3">
                    <hr className="text-dark w-50 mx-auto pb-3" />
                    <p className="text-dark text-center fw-semibold">or Login with</p>
                    <hr className="text-dark w-50 mx-auto pb-3" />
                </div>
                <div className="d-flex justify-content-center gap-3">
                    <Button variant="light" onClick={handleGoogleSignIn}>
                        <BsGoogle />
                    </Button>
                    <Button variant="light" onClick={handleGithubSignIn}>
                        <FaGithub />
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;