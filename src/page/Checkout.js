import React from "react";
import { Badge } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const selectedCourse = useLoaderData();
    console.log(selectedCourse);
    return (
        <div className="container mt-5 mb-5">
            <Card className="bg-info rounded-2 ">
                <Card.Img
                    variant="top"
                    className="img-fluid p-0 rounded-1"
                    src={selectedCourse.coverPicture}
                />
                <Card.Body>
                    <Card.Title className="text-dark bg-success p-1 fw-bold text-center">
                        <span className='text-light'>Your Course:</span> {selectedCourse.courseName} <span className='text-light'>by</span> {selectedCourse.courseInstructor}
                    </Card.Title>
                    <div className="mb-3 d-flex  justify-content-between align-items-center">

                        <h5>
                            <Badge bg="warning" className="text-dark rounded-0">
                                Course Duration: {selectedCourse.duration}
                            </Badge>
                        </h5>
                        <h5>
                            <Badge bg="danger" className="text-dark rounded-0 m-2 p-2">
                                You have pay total: {selectedCourse.price}
                            </Badge>
                        </h5>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;
