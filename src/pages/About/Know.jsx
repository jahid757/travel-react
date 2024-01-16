import React, { useState } from 'react';
import travel_img from "../../assets/images/travel.png"

const Know = () => {

    // const  getAbout = async() =>{
    //     const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/about')
    //     const result = await apiUrl.json();
    //     console.log(result.data)
    // }

    const [data,setData] = useState({
            title:"Explore The World With Us.", description:"We are people who are well-versed in the fun and rigors of corporate travel management. Our organization came together to provide cost effective and innovation corporate travel solutions . We have over 10 years of corporate travel planning between us! While working with us, we want you to be completely safe and happy with the experience. If you have questions about us, our services, get in touch! We hope you continue to book with us for many years to come.",
    info:[
        { }
    ]
    })


    return (
        //  style="background-image:url(images/background_pattern.png); background-position:bottom right;"
        <section className="about-us pt-6">
        <div className="container">
            <div className="about-image-box">
                <div className="row d-flex align-items-center justify-content-between">

                    <div className="col-lg-6 ps-4">
                        <div className="about-content text-center text-lg-start">
                            <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                            <h2 className="border-b mb-2 pb-1">{data.title}</h2>
                            <p className="border-b mb-2 pb-2">{data.description}</p>
                            <div className="about-listing">
                                <ul className="d-flex justify-content-between">
                                    <li><i className="icon-location-pin theme"></i> Efficient</li>
                                    <li><i className="icon-briefcase theme"></i>  Safety Maximum Priority</li>
                                    <li><i className="icon-folder theme"></i> Savings</li>
                                </ul>
                            </div>
                    </div>
                    </div>

                    <div className="col-lg-6 mb-4 pe-4">
                        <div className="about-image" style={{animation:"none", background:"transparent"}}>
                            <img src={travel_img} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="counter-main w-75 float-start z-index3 position-relative">
                            <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                        <div className="counter-item border-end pe-4">
                                            <div className="counter-content">
                                                <h2 className="value mb-0 theme">10</h2>
                                                <span className="m-0">Years Experiences</span>
                                            </div>
                                        </div>    
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                        <div className="counter-item border-end pe-4">
                                            <div className="counter-content">
                                                <h2 className="value mb-0 theme">100</h2>
                                                <span className="m-0">Current corporate</span>
                                            </div>
                                        </div>    
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                        <div className="counter-item ">
                                            <div className="counter-content">
                                                <h2 className="value mb-0 theme">2500</h2>
                                                <span className="m-0">Happy Travelers</span>
                                            </div>
                                        </div>    
                                    </div>

                                    


                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Know;
