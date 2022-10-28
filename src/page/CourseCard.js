import React from 'react';
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { course_id, displayPicture, courseName, duration, price } = course;
    return (
        <Col lg="6" md="6" sm="12">
            <Card
                className="bg-info border border-1 border-dark "
            >
                <Card.Img
                    variant="top"
                    src={displayPicture}
                    className=" img-fluid w-100"
                />
                <Card.Body>
                    <Card.Title className="text-center text-dark mb-3">
                        {courseName}
                    </Card.Title>
                    <Card.Text className="text-center my-0 pb-1 text-dark">
                        Course Price: <span className='fw-semibold'>{price}</span>
                    </Card.Text>
                    <Card.Text className="text-white text-center my-0 fw-semibold">
                        Course Duration: {duration}
                    </Card.Text>
                    <Button variant="dark" className="d-block mx-auto mt-4">
                        <Link
                            to={`/course/${course_id}`}
                            className="text-decoration-none text-light fw-semibold"
                        >
                            See Details
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;