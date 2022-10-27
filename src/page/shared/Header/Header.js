import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Ed.Course</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Link className='text-decoration-none ms-5 text-white' to='/course'>Courses</Link>
                        <Link className='text-decoration-none ms-5 text-white' to="/faq">FAQ</Link>
                        <Link className='text-decoration-none ms-5 text-white' to="/blog">Blog</Link>

                    </Nav>

                    <Nav>
                        <Nav.Link href="#deets">theme</Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;