import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import TourContent from './Tour_Content';
import Video from '../Tour/video';
import Partners from '../Tour/partners';
// import TourDetails from './Tour_Details';
import TourSingleDetails from './tour-single-details';

const TourSingle = () => {
    return (
        <>
          <Header/>
            {/* <TourContent/> */}
            {/* <TourDetails/> */}
            <TourSingleDetails/>
            <Video/>
            <Partners/>
          <Footer/>  
        </>
    );
}

export default TourSingle;
