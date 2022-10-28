import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Navbar = () => {
    const courses = useLoaderData();



    return (
        <div className="mt-5 bg-light p-3 rounded-1 ">
            {courses.map(course =>
                <p
                    key={course.course_id}
                    className="bg-dark px-1 py-5  my-2 rounded-2 text-center "
                >
                    <Link
                        to={`/course/${course.course_id}`}
                        className=" text-decoration-none text-white fw-semibold"
                    >
                        {course.courseName}
                    </Link>
                </p>
            )}
        </div>
    );
};

export default Navbar;