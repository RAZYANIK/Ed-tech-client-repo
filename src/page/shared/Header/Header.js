import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Button, Image } from "react-bootstrap";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../UserContext/UserContext';


const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [dark, setDark] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error));
    };


    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold">
                        <Link className="text-decoration-none text-white" to="/">
                            Hex <span className="text-warning">Bytes</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="px-5 text-center">
                                <Link
                                    className="text-decoration-none fw-semibold text-white"
                                    to="/course"
                                >
                                    Courses
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="fw-semibold text-white px-5 text-center">
                                FAQ
                            </Nav.Link>
                            <Nav.Link className="px-5 text-center">
                                <Link
                                    className="text-decoration-none fw-semibold text-white"
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link
                                onClick={() => setDark(!dark)}
                                className="fw-semibold text-white d-flex align-items-center justify-content-center"
                            >
                                {dark ? (
                                    <Button variant="light">
                                        <MdDarkMode className="text-dark border-0" />
                                    </Button>
                                ) : (
                                    <Button variant="warning">
                                        <MdWbSunny className="text-dark border-0" />
                                    </Button>
                                )}
                            </Nav.Link>
                            <>
                                {user?.uid ? (
                                    <><Nav.Link className="d-flex align-items-center me-3 justify-content-center">
                                        {user?.photoURL ? (
                                            <div content={user?.displayName}>
                                                <Image
                                                    className="border border-2 border-warning"
                                                    style={{ height: "30px", width: "30px" }}
                                                    roundedCircle
                                                    src={user?.photoURL}
                                                ></Image>
                                            </div>
                                        ) : (
                                            <div content={user?.displayName}>
                                                <FaUser
                                                    style={{ height: "25px", width: "25px" }}
                                                    className="text-dark bg-warning rounded-5 border border-warning border-2"
                                                ></FaUser>
                                            </div>
                                        )}
                                    </Nav.Link>

                                        <Button
                                            onClick={handleSignOut}
                                            variant="warning"
                                            className="mx-auto d-block"
                                        >
                                            <Link className="text-decoration-none text-black">
                                                Logout
                                            </Link>
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link className="d-block mx-auto">
                                            <Button variant="warning">
                                                <Link
                                                    to="/login"
                                                    className="text-decoration-none text-black"
                                                >
                                                    Login
                                                </Link>
                                            </Button>
                                        </Nav.Link>
                                    </>
                                )}
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;