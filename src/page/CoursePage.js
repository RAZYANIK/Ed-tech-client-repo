import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CourseCards from "./CourseCards";
import Navbar from './shared/Navbar/Navbar';

const CoursePage = () => {
    return (
        <div>
            <h1 className='mt-5 fw-bold'>Welcome to your new E-journey</h1>
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