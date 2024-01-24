import React from 'react';
import img from '../../assets/images/destination10.jpg'
import img1 from '../../assets/images/destination1.jpg'
import shape from '../../assets/images/shape-1.png'

const TopDestination = () => {
    return (
        //  style="background-image:url(images/shape-1.png); background-position:center;"
            <section className="trending pb-0 pt-6" style={{backgroundImage:`url(${shape})`,backgroundPosition:'center'}}>
        <div className="container">
            <div className="section-title mb-6 w-50 mx-auto text-center">
                <h4 className="mb-1 theme1">Top Destinations</h4>
                <h2 className="mb-1">Explore <span className="theme">Top Destinations</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 mb-4">
                    <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                            <img src={img1} alt="" />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                <div className="trend-content-title">
                                    <h5 className="mb-0"><a href="tour-grid.html" className="theme1">England</a></h5>
                                    <h3 className="mb-0 white">London</h3>
                                </div>
                                <span className="white bg-theme p-1 px-2 rounded">15 Tours</span>
                            </div>
                            <div className="color-overlay"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <img src={img} alt="" />
                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                        <div className="trend-content-title">
                                            <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5>
                                            <h3 className="mb-0 white">Caspian Valley</h3>
                                        </div>
                                        <span className="white bg-theme p-1 px-2 rounded">18 Tours</span>
                                    </div>
                                    <div className="color-overlay"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <img src={img} alt="" />
                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                        <div className="trend-content-title">
                                            <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Tokyo</a></h5>
                                            <h3 className="mb-0 white">Japan</h3>
                                        </div>
                                        <span className="white bg-theme p-1 px-2 rounded">21 Tours</span>
                                    </div>
                                    <div className="color-overlay"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    {/* <img src={img} alt="" /> */}
                                    <img src={img} alt="" />
                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                        <div className="trend-content-title">
                                            <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Moscow</a></h5>
                                            <h3 className="mb-0 white">Russia</h3>
                                        </div>
                                        <span className="white bg-theme p-1 px-2 rounded">15 Tours</span>
                                    </div>
                                    <div className="color-overlay"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <img src={img} alt="" />
                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                        <div className="trend-content-title">
                                            <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Florida</a></h5>
                                            <h3 className="mb-0 white">America</h3>
                                        </div>
                                        <span className="white bg-theme p-1 px-2 rounded">32 Tours</span>
                                    </div>
                                    <div className="color-overlay"></div>
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

export default TopDestination;
