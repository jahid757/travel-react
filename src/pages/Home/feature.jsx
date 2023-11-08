import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        // <section className="about-us pb-6 pt-10" style="background-image:url(images/shape4.png); background-position:center;">
        <section className="about-us pb-6 pt-10">
        <div className="container">
            
            <div className="section-title mb-6 w-50 mx-auto text-center">
                <h4 className="mb-1 theme1">Core Features</h4>
                <h2 className="mb-1">Hoist your travel management with Travel Freeby</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <div className="why-us">
                <div className="why-us-box">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-flag theme"></i>
                                    </div>
                                    <h4><Link to="/about">Efficiency</Link></h4>
                                    <p className="mb-2">Our cutting edge technology and continuous support significantly improves employees' efficiency.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-location-pin theme"></i>
                                    </div>
                                    <h4><a href="about.html">Savings</a></h4>
                                    <p className="mb-2">Returning more is out habit. TFB's Difference. Super special flight deals, last minute negotiated hotel inventory.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-directions theme"></i>
                                    </div>
                                    <h4><a href="about.html">Safety - Maximum Priority</a></h4>
                                    <p className="mb-2">Regular risk alert sms notifications and emails. Pre-Trip planning and approvals mitigate risk prior to travel bookings. Complete covid regulations guide in the current situation.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>  
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-compass theme"></i>
                                    </div>
                                    <h4><a href="about.html">Why Choose TFB?</a></h4>
                                    <p className="mb-2">One-size-fits-all travel programmes just don’t cut it. You need plans that adapt, experts on call, and technology that makes your journey seamless. Let us enhance your travel programme and help you stay ahead.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="white-overlay"></div>
    </section>
    );
}

export default Feature;
