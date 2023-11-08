import React from 'react';
import Header from '../../components/Header/Header';
import Filter from './Filter';
import Video from './video';
import Partners from './partners';
import Footer from '../../components/Footer/Footer';

const Tour = () => {
    return (
        <>
            <Header/>
            <Filter/>
            <Video/>
            <Partners/>
            <Footer/>
        </>
    );
}

export default Tour;
