import React from 'react';
import Header from '../../components/Header/Header';
import Know from './Know';
import Vision from './Vision';
import TourGuied from '../Home/tourGuied';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <>
            <Header/>
            <Know/>
            <Vision/>
            <TourGuied/>
            <Footer/>
        </>
    );
}

export default About;
