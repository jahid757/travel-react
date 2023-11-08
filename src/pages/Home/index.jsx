import React from 'react';
import Header from '../../components/Header/Header';
import Slider from './slider';
import Feature from './feature';
import Testimonial from './testimonial';
import TourGuied from './tourGuied';
import Client from './client';
import Contact from './contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>
            <Feature/>
            <Testimonial/>
            <TourGuied/>
            <Client/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;
