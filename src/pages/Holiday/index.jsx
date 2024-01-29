import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from './Hero';
import KnowUs from './know-us';
import TopDestination from './top-destination';
import Exclution from './exclution';
import TourPackage from './tour-package';
import Video from './video';
import Testimonial from './../Home/testimonial';
import Blog from './blog';
import TourDeal from './tour-deal';

const Holiday = () => {
    return (
        <>
            <Header/>
                <Hero/>
                <KnowUs/>
                <TopDestination/>
                <Exclution/>
                <TourPackage/>
                <TourDeal/>
                <Video/>
                <Testimonial/>
                <Blog/>
            <Footer/>
        </>
    );
}

export default Holiday;
