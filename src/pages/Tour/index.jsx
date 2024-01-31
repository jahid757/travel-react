import React from 'react';
import Header from '../../components/Header/Header';
import Filter from './Filter';
import Video from './video';
import Partners from './partners';
import Footer from '../../components/Footer/Footer';
// import TourPackage from './TourPackage';

const Tour = () => {
    return (
        <>
            <Header/>
            <Filter/>
            {/* <TourPackage/> */}
            <Video/>
            <Partners/>
            <Footer/>
        </>
    );
}

export default Tour;
