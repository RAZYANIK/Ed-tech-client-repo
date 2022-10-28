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
            <Navbar bg="info" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold">
                        <Link className="text-decoration-none text-white" to="/">
                            Ed.<span className="text-dark">Tech</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
                        <Nav className="mx-4">
                            <Nav.Link className="px-4 text-center">
                                <Link
                                    className="text-decoration-none fw-semibold text-white"
                                    to="/course"
                                >
                                    Courses
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="fw-semibold text-white px-4 text-center">
                                <Link
                                    className="text-decoration-none fw-semibold text-dark"
                                    to="/faq"
                                >
                                    FAQ
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="px-4 text-center">
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
                                className="fw-semibold text-white d-flex align-items-center justify-content-center "
                            >
                                {dark ? (
                                    <Button variant="light" className='rounded-5'>
                                        <MdDarkMode className="text-dark border-0 " />
                                    </Button>
                                ) : (
                                    <Button variant="dark" className="rounded-5">
                                        <MdWbSunny className="text-white border-0 " />
                                    </Button>
                                )}
                            </Nav.Link>
                            <>
                                {user?.uid ? (
                                    <><Nav.Link className="d-flex align-items-center me-3 justify-content-center ">
                                        {user?.photoURL ? (
                                            <div content={user?.displayName}>
                                                <Image
                                                    className="border border-2 border-light "
                                                    style={{ height: "30px", width: "30px" }}
                                                    roundedCircle
                                                    src={user?.photoURL}
                                                    title={user.displayName}
                                                ></Image>
                                            </div>
                                        ) : (
                                            <div content={user?.displayName}>
                                                <FaUser
                                                    style={{ height: "25px", width: "25px" }}
                                                    className="text-dark bg-light rounded-5 border border-info border-2"
                                                    title={user.displayName}
                                                ></FaUser>
                                            </div>
                                        )}
                                    </Nav.Link>

                                        <Button
                                            onClick={handleSignOut}
                                            variant="outline-light"
                                            className="d-block p-1 m-1 rounded-5"
                                        >
                                            <Link className="text-decoration-none text-dark">
                                                Logout
                                            </Link>
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link className="d-block mx-auto">
                                            <Button variant="outline-success" className='rounded-5'>
                                                <Link
                                                    to="/login"
                                                    className="text-decoration-none text-dark"
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