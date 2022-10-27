import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from '../shared/Slider/Slider';


const Home = () => {
    return (
        <div>
            <Container lg-10>
                <h1 className='text-info'>Welcome to Edu.course </h1>
                <Slider></Slider>
            </Container>
        </div>
    );
};

export default Home;