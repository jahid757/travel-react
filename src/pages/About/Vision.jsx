import React, { useState } from 'react';

const Vision = () => {

     // const  getAbout = async() =>{
    //     const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/about')
    //     const result = await apiUrl.json();
    //     console.log(result.data)
    // }

    const [data,setData] = useState({
        vision:[
            {title:'Passion',description:"We love what we do. We are energetic, take responsibility and achieve extraordinary results.",review:"100+ Reviews"},
            {title:'Passion',description:"We love what we do. We are energetic, take responsibility and achieve extraordinary results.",review:"100+ Reviews"},
            {title:'Passion',description:"We love what we do. We are energetic, take responsibility and achieve extraordinary results.",review:"100+ Reviews"},
        ]
})


    return (
        // style="background-image: url(images/shape8.png);"
        <section className="about-us pb-0">
        <div className="section-shape section-shape1" ></div>
        <div className="container">
            
            <div className="section-title mb-6 w-50 mx-auto text-center">
                <h2 className="mb-1">OUR<span className="theme">VISION</span></h2>
                <p>To power the in-person connections that move people, ideas and businesses forward.</p>
            </div>

            <div className="why-us">
                <div className="why-us-box">
                    <div className="row ">
                       {
                        data.vision.map((info) => {
                            return(
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-flag theme"></i>
                                    </div>
                                    <h4><a href="about.html">{info.title}</a></h4>
                                    <p className="mb-2">{info.description}</p>
                                    <p className="mb-0 theme">{info.review}</p>
                                </div>
                            </div>
                        </div>
                            )
                        })
                       }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Vision;
