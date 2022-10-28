import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const CourseCards = () => {
    const course = useLoaderData();
    return (
        <div>
            <Row className="mt-5 g-3">
                {course.map((course) => (
                    <CourseCard
                        key={course.course_id}
                        course={course}
                    ></CourseCard>
                ))}
            </Row>
        </div>
    );
};

export default CourseCards;