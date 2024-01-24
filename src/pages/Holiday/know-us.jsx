import React from 'react';

const KnowUs = () => {
    return (
        <section className="about-us p-0">
        <div className="container">
            <div className="about-image-box">
                <div className="row d-flex align-items-center justify-content-between">
                    
                    <div className="col-lg-12 mb-4 ps-lg-4">
                        <div className="about-content text-center text-lg-start mb-4 mt-10">
                            <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                            <h2>Explore All Tour of the world with us.</h2>
                            <p className="border-b mb-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="about-listing">
                                <ul className="d-flex justify-content-between">
                                    <li><i className="icon-location-pin theme"></i> Tour Guide</li>
                                    <li><i className="icon-briefcase theme"></i> Friendly Price</li>
                                    <li><i className="icon-folder theme"></i> Reliable Tour Package</li>
                                </ul>
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

export default KnowUs;
