import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img style={{ height: '600px' }}
                    className="d-block w-100 "
                    src="https://static.vecteezy.com/system/resources/previews/001/937/734/non_2x/digital-book-online-education-blank-space-paper-and-graduate-hat-on-laptop-mobile-phone-website-background-social-distance-concept-vector.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '600px' }}
                    className="d-block w-100 "
                    src="https://static.vecteezy.com/system/resources/previews/001/937/734/non_2x/digital-book-online-education-blank-space-paper-and-graduate-hat-on-laptop-mobile-phone-website-background-social-distance-concept-vector.jpg"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '600px' }}
                    className="d-block w-100"
                    src="https://www.giffgaff.com/blog/meet-ladyrosy/ladyroase_700%20x%20420pix_blog%20homepage_no%20logo.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;