import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TourContent from './Tour_Content';
import Video from '../Tour/video';
import Partners from '../Tour/partners';

const TourSingle = () => {
    return (
        <>
          <Header/>
            <TourContent/>
            <Video/>
            <Partners/>
          <Footer/>  
        </>
    );
}

export default TourSingle;
