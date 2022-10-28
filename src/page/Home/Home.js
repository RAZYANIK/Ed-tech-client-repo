import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../shared/Slider/Slider';


const Home = () => {
    return (
        <div className='pt-3'>
            <Container lg-10>
                <h2 className='text-dark fw-bold'>Learn From The World's Leading Experts </h2>
                <Slider></Slider>

            </Container>
        </div>
    );
};

export default Home;