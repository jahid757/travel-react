import React from 'react';
import { Link } from 'react-router-dom';
import shape from '../../assets/images/shape-1.png'
import bg from '../../assets/images/bg4.jpg'
const Video = () => {
    return (
        <section className="discount-action pt-0 pb-8" style={{backgroundImage: `url(${shape})`, backgroundAttachment:"unset"}}>
        <div className="container">
            <div className="call-banner1 rounded" style={{backgroundImage: `url(${bg})`, backgroundPosition:"right"}} >
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                        <div className="call-banner-inner bg-theme p-5 pt-10 pb-10 my-5 rounded ms-4">
                            <h5 className="mb-1 white">Love Where Your're Going</h5>
                            <h2><a href="tour-single.html" className="white">Explore Your Life, <span className="theme1"> Travel Where You Want!</span></a></h2>
                            <p className="white mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link to="/" className="nir-btn-black">Read More</Link>
                        </div>
                    </div>  
                    <div className="col-lg-6 col-md-6 p-0">
                        <div className="video-button text-center position-relative z-index2">
                            <div className="call-button text-center">
                                <button type="button" className="play-btn js-video-button" data-video-id="152879427" data-channel="vimeo">
                                    <i className="fa fa-play bg-blue"></i>
                                </button>
                            </div>
                            <div className="video-figure"></div>
                        </div>
                    </div> 
                </div> 
            </div> 
            {/* <div className="partner-wrapper pt-4">
                <div className="row align-items-center text-center text-lg-start">
                    <div className="col-lg-2"><h3 className="mb-2">Our Partners</h3></div>
                    <div className="col-lg-10 mb-2">
                        <ul className="side-slider mb-2">
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-1.png" alt=""/></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-2.png" alt=""/></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-3.png" alt=""></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-4.png" alt=""></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-5.png" alt=""></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-3.png" alt=""></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-4.png" alt=""></li>
                            <li className="p-2 border rounded mx-2 bg-white"><img src="images/cl-5.png" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>     */}
        </div>    
    </section>
    );
}

export default Video;
