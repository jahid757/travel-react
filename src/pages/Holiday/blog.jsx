import React from 'react';
import img from '../../assets/images/trending2.jpg'
import review from '../../assets/images/1.jpg'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="trending recent-articles pb-6 pt-6">
        <div className="container">
            <div className="section-title mb-6 w-75 mx-auto text-center">
                <h4 className="mb-1 theme1">Our Blogs Offers</h4>
                <h2 className="mb-1">Recent <span className="theme">Articles & Posts</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="recent-articles-inner">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="trend-item box-shadow bg-white mb-4 rounded">
                            <div className="trend-image">
                                <img src={img} alt=""/>
                            </div>
                            <div className="trend-content-main p-4 pb-2">
                                <div className="trend-content">
                                    <h5 className="theme mb-1">Technology</h5>
                                    <h4><a href="detail-1.html">How a developer duo at Deutsche Bank keep remote alive.</a></h4>
                                    <p className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                    <div className="entry-meta d-flex align-items-center justify-content-between">
                                        <div className="entry-author mb-2">
                                            <img src={review} alt="" className="rounded-circle me-1"/>
                                            <span>Sollmond Nell</span>
                                        </div>
                                        <div className="entry-button d-flex align-items-center mb-2">
                                        <Link to="/" className="nir-btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="trend-item box-shadow bg-white mb-4 rounded">
                            <div className="trend-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="trend-content-main p-4 pb-2">
                                <div className="trend-content">
                                    <h5 className="theme mb-1">Inspiration</h5>
                                    <h4><a href="detail-1.html">Inspire Runner with Autism Graces of Women's Running</a></h4>
                                    <p className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                    <div className="entry-meta d-flex align-items-center justify-content-between">
                                        <div className="entry-author mb-2">
                                            <img src={review} alt="" className="rounded-circle me-1"/>
                                            <span>David Scott</span>
                                        </div>
                                        <div className="entry-button d-flex align-items-center mb-2">
                                        <Link to="/" className="nir-btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="trend-item box-shadow bg-white mb-4 rounded">
                            <div className="trend-image">
                                <img src={img} alt="" />
                            </div>
                            <div className="trend-content-main p-4 pb-2">
                                <div className="trend-content">
                                    <h5 className="theme mb-1">Public</h5>
                                    <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate Products</a></h4>
                                    <p className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                    <div className="entry-meta d-flex align-items-center justify-content-between">
                                        <div className="entry-author mb-2">
                                            <img src={review} alt="" className="rounded-circle me-1"/>
                                            <span>John Bolden</span>
                                        </div>
                                        <div className="entry-button d-flex align-items-center mb-2">
                                            <Link to="/" className="nir-btn">Read More</Link>
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

export default Blog;
