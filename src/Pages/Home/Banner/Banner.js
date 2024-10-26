import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <p className='fs-10'><small>Budget Jewellery Collection</small></p>
                <h1 className='fw-normal fs-1'>ZENITH <span>ELEMENTS</span></h1>
                <button className='btn-regular'>Shop Now</button>
            </Container>
        </div>
    )
};

export default Banner;