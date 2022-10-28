import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div><h2 className='mt-5 text-center'>Frequently Asked Questions</h2>
            <Accordion className='container mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header >Can I enroll in the course anytime?</Accordion.Header>
                    <Accordion.Body>
                        Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Certificate, you’re automatically subscribed to the full Certificate. Visit your learner dashboard to track your progress.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >When will I have access to the lectures and assignments?</Accordion.Header>
                    <Accordion.Body>
                        Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit. If you don't see the audit option:

                        The course may not offer an audit option. You can try a Free Trial instead, or apply for Financial Aid.

                        The course may offer 'Full Course, No Certificate' instead. This option lets you see all course materials, submit required assessments, and get a final grade. This also means that you will not be able to purchase a Certificate experience.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header >What will I get if I subscribe to this Specialization?</Accordion.Header>
                    <Accordion.Body>
                        If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header >What is the refund policy</Accordion.Header>
                    <Accordion.Body>
                        When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. Your electronic Certificate will be added to your Accomplishments page - from there, you can print your Certificate or add it to your LinkedIn profile.  If you only want to read and view the course content, you can audit the course for free.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;