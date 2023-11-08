import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogFilter from './BlogFilter';

const Blog = () => {
    return (
        <>
          <Header/>
            <BlogFilter/>
          <Footer/>  
        </>
    );
}

export default Blog;
