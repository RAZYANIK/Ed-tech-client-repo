import React from 'react';
import { Badge, Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div>
            <div className="container mt-5">
                <Card className="bg-dark text-white rounded-2 mb-5">
                    <Card.Img
                        src={courseDetails.coverPicture}
                        alt="Card image"
                        className="img-fluid rounded-5"
                    />
                </Card>
                <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column mb-3">
                    <h3 className="fw-bolder text-dark">{courseDetails.courseName}</h3>

                    <Pdf targetRef={ref} filename={`${courseDetails.courseName}.pdf`}>
                        {({ toPdf }) => (
                            <Button variant="info" className="px-5 py-2 rounded-0" onClick={toPdf}>
                                <span className="me-2">Download PDF</span>
                                <FaDownload />
                            </Button>
                        )}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <div className="mb-3  d-flex justify-content-between mt-5">
                        <h5>
                            <Badge bg="success" className="text-dark p-4 rounded-0 ">
                                Course Instructor: {courseDetails.courseInstructor}
                            </Badge>

                        </h5>
                        <h5>
                            <Badge bg="info" className="text-dark p-4 rounded-0 ms-5">
                                Course Duration: {courseDetails.duration}
                            </Badge>
                        </h5>


                    </div>
                    <h6 className="fw-semibold mt-5"><span className='fw-bold text-success'>What you'll learn: </span> {courseDetails.description}</h6>
                    <div className="mb-3 mt-2 d-flex justify-content-between">
                        <div>
                            <h6 className="fw-bold mt-5 mb-3 ms-4 text-success">Requirements</h6>
                            {courseDetails.preRequisites.map((item) => (
                                <ul className='fw-semibold'>{item}</ul>
                            ))}
                        </div>
                        <div>
                            <h6 className="fw-bold ms-4 mt-5 mb-3 text-success">SKILLS YOU WILL GAIN</h6>
                            {courseDetails.courseContent.map((item) => (
                                <ul className='fw-semibold'>{item}</ul>
                            ))}
                            <h5>
                                <Badge bg="danger" className="text-light p-3 rounded-0 ms-4 mt-5">
                                    Course Fee: {courseDetails.price}
                                </Badge>
                            </h5>
                        </div>

                    </div>
                </div>
                <Button
                    className="px-5 py-2 d-block mx-auto mb-5 mt-5 fw-bold"
                    variant="success"
                >
                    <Link
                        to={`/checkout/${courseDetails.course_id}`}
                        className="text-light text-decoration-none"
                    >
                        Get Full Access
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default CourseDetails;