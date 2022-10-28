import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../utilies/dop1.png';
import img2 from '../../../utilies/dop2.png';
import img3 from '../../../utilies/dop3.jpg';
const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img style={{ height: '350px' }}
                    className="d-block w-100 "
                    src={img2}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '400px' }}
                    className="d-block w-100 "
                    src={img1}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '350px' }}
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;