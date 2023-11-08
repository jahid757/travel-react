import React from 'react';

const Vision = () => {
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
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-flag theme"></i>
                                    </div>
                                    <h4><a href="about.html">Passion</a></h4>
                                    <p className="mb-2">We love what we do. We are energetic, take responsibility and achieve extraordinary results.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-location-pin theme"></i>
                                    </div>
                                    <h4><a href="about.html">Care</a></h4>
                                    <p className="mb-2">We treat others as we would want to be treated ourselves, demonstrate compassion and empathy, go out of our way to promote equal opportunity and protect the well-being of colleagues.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                <div className="why-us-content">
                                    <div className="why-us-icon mb-1">
                                        <i className="icon-directions theme"></i>
                                    </div>
                                    <h4><a href="about.html">Fun</a></h4>
                                    <p className="mb-2">We enjoy what we do. We share stories and successes, engage with each other, laugh, and avoid taking ourselves too seriously. We keep smiling even when facing adversity.</p>
                                    <p className="mb-0 theme">100+ Reviews</p>
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

export default Vision;
