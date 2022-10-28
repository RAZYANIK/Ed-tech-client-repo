import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../utilies/dop5.jpeg';
import img2 from '../../../utilies/dop2.png';
import img3 from '../../../utilies/dop3.jpg';
const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img style={{ height: '450px' }}
                    className="d-block w-100 "
                    src={img2}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '600px' }}
                    className="d-block w-100 "
                    src={img1}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '550px' }}
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;