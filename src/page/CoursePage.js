import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CourseCards from "./CourseCards";
import Navbar from './shared/Navbar/Navbar';

const CoursePage = () => {
    return (
        <div>
            <h1 className='mt-5 fw-bold bg-danger text-center text-light'><small>Skills for your present and your future.</small> Get started with us.</h1>
            <h1 className='mt-5 fw-bold bg-info text-center text-dark'>Currently Available Courses.</h1>
            <Container className="mb-5">
                <Row>

                    <Col lg="9">
                        <CourseCards></CourseCards>
                    </Col>
                    <Col lg="3">
                        <Navbar></Navbar>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CoursePage;