import React from 'react';
import { Link } from 'react-router-dom';

import blog_img from '../../assets/images/blog/blog1.jpg'
import team_1 from '../../assets/images/teams/img2.jpg'

const BlogFilter = () => {
    return (
        <section className="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 pe-lg-4">
                    <div className="listing-inner">
                        <div className="list-results d-flex align-items-center justify-content-between">
                            <div className="list-results-sort">
                                <p className="m-0">Showing 1-5 of 80 results</p>
                            </div>
                            <div className="click-menu d-flex align-items-center justify-content-between">
                                <div className="change-list f-active me-2 rounded overflow-hidden"><Link to="post-list-1.html"><i className="fa fa-bars"></i></Link></div>
                                <div className="change-grid me-2 rounded overflow-hidden"><Link to="post-grid-1.html"><i className="fa fa-th bg-grey"></i></Link></div>
                                <div className="sortby d-flex align-items-center justify-content-between ml-2">
                                    <select className="niceSelect">
                                        <option value="1" >Sort By</option>
                                        <option value="2">Average rating</option>
                                        <option value="3">Price: low to high</option>
                                        <option value="4">Price: high to low</option>
                                    </select> 
                                </div>
                            </div>
                        </div>
                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Travel</h5>
                                        
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Harbour amid a Slowen down in singer city screening</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>  
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog8.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Wedding</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Bring to the table win-win survival strategies</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/*  style="background-image: url(images/blog/blog2.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Tech</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Top 8 Amazing Places to Stay in Canada</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                         
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog3.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Electronic</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">DevOps. Nanotechnology immersion along</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog9.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Health</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Top 8 Amazing Places to Stay in Canada</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog10.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Fashion</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Need to know 3 Easy Ways To Make Your iPhone Faster</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog11.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Food</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">How To Make More Construction By Doing Less</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog3.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Public</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Best garden wing supplies for the horticu ltural hopeless</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-full d-flex mb-4 border-b bg-white box-shadow p-4 rounded border-all">
                            <div className="row">
                                <div className="col-lg-5 col-md-4 blog-height">
                                   <div className="blog-image rounded">
                                   {/* style="background-image: url(images/blog/blog5.jpg);" */}
                                        <Link to="/" style={{backgroundImage: `url(${blog_img})` }}></Link>
                                    </div> 
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="blog-content">
                                        <h5 className="theme mb-1">Tech</h5>
                                        <h3 className="mb-2"><Link to="detail-3.html" className="">Naturalistic a design is thriv as actual nature dies</Link></h3>
                                        <p className="date-cats mb-2">
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-file"></i> Categories</Link> 
                                            <Link to="post-grid-2.html" className="me-2"><i className="fa fa-calendar-alt"></i> Mar 15, 2021</Link>
                                            <Link to="post-grid-2.html" className=""><i className="fa fa-user"></i> By Lorem Ipsum</Link>
                                        </p> 
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pagination-main text-center">
                            <ul className="pagination">
                                <li><Link to="#"><i className="fa fa-angle-double-left" aria-hidden="true"></i></Link></li>
                                <li className="active"><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">4</Link></li>
                                <li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 ps-lg-4">
                    <div className="sidebar-sticky">
                        <div className="list-sidebar">
                            <div className="sidebar-item">
                                <h4 className="">Search Here</h4>
                                <div className="newsletter-form rounded overflow-hidden position-relative">
                                    <form>
                                        <input type="text" placeholder="Search your keyword here.."/>
                                        <input type="submit" className="nir-btn bordernone rounded-0 position-absolute end-0" value="Search"/>
                                    </form>
                                </div>
                            </div>

                            <div className="author-news mb-4 box-shadow p-5 text-center rounded overflow-hidden border-all">
                                <div className="author-news-content">
                                    <div className="author-thumb mb-1">
                                        <img src={team_1} alt="author"/>
                                    </div>
                                    <div className="author-content">
                                        <h3 className="title mb-1"><Link to="#">Relson Dulux</Link></h3>
                                        <p className="mb-2">Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                                        <div className="header-social">
                                            <ul>
                                                <li><Link to="#"><i className="fab fa-facebook-f rounded"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-google-plus-g rounded"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter rounded"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-item mb-4">
                                <h4 className="">All Categories</h4>
                                <ul className="sidebar-category">
                                    <li><Link to="#">All</Link></li>
                                    <li><Link to="#">Featured</Link></li>
                                    <li><Link to="#">Sliders</Link></li>
                                    <li className="active"><Link to="#">Manage Listings</Link></li>
                                    <li><Link to="#">Address and Map</Link></li>
                                    <li><Link to="#">Reservation Requests</Link></li>
                                    <li><Link to="#">Your Reservation</Link></li>
                                    <li><Link to="#">Search Results</Link></li>
                                </ul>
                            </div>

                            <div className="popular-post sidebar-item mb-4">
                                <div className="sidebar-tabs">
                                    <div className="post-tabs">
                                        <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab1" role="tablist">
                                            <li className="nav-item d-inline-block" role="presentation">
                                                <button aria-selected="false" className="nav-link active" data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button>
                                            </li>
                                            <li className="nav-item d-inline-block" role="presentation">
                                                <button aria-selected="true" className="nav-link" data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="postsTabContent1">
                                            <div aria-labelledby="popular-tab" className="tab-pane fade active show" id="popular" role="tabpanel">
                                                <article className="post mb-2 border-b pb-2">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                            <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">An Incredibly Easy Method That Works For All</Link></h5>
                                                            <div className="date">10 Apr 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>

                                                <article className="post border-b pb-2 mb-2">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">15 Unheard Ways To Achieve Greater Walker</Link></h5>
                                                            <div className="date">29 Mar 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>

                                                <article className="post mb-2 border-b pb-2">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">An Incredibly Easy Method That Works For All</Link></h5>
                                                            <div className="date">10 Apr 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>

                                                <article className="post">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">15 Unheard Ways To Achieve Greater Walker</Link></h5>
                                                            <div className="date">21 Feb 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>
                                        </div>
                                            <div aria-labelledby="recent-tab" className="tab-pane fade" id="recent" role="tabpanel">
                                                <article className="post mb-2 border-b pb-2">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">10 Ways To Immediately Start Selling Furniture</Link></h5>
                                                            <div className="date">08 Mar 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>

                                                <article className="post border-b pb-2 mb-2">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">Photography Photo modify and Beautiful Walker</Link></h5>
                                                            <div className="date">18 Jan 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>

                                                <article className="post mb-2 border-b pb-2">
                                                        <div className="s-content d-flex align-items-center justify-space-between">
                                                            <div className="sidebar-image w-25 me-3 rounded">
                                                            <Link to="/"><img src={blog_img} alt=""/></Link>
                                                            </div>
                                                            <div className="content-list w-75">
                                                                <h5 className="mb-1"><Link to="detail-1.html">An Incredibly Easy Method That Works For All</Link></h5>
                                                                <div className="date">10 Apr 2021</div>
                                                            </div>    
                                                        </div> 
                                                    </article>

                                                <article className="post">
                                                    <div className="s-content d-flex align-items-center justify-space-between">
                                                        <div className="sidebar-image w-25 me-3 rounded">
                                                        <Link to="/"><img src={blog_img} alt=""/></Link>
                                                        </div>
                                                        <div className="content-list w-75">
                                                            <h5 className="mb-1"><Link to="detail-1.html">1Certified Graphic Design with Free Project Course</Link></h5>
                                                            <div className="date">12 Feb 2021</div>
                                                        </div>    
                                                    </div> 
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-item mb-4">
                                <h4 className="">Tags</h4>
                                <ul className="sidebar-tags">
                                    <li><Link to="/">Tour</Link></li>
                                    <li><Link to="/">Rental</Link></li>
                                    <li><Link to="/">City</Link></li>
                                    <li><Link to="/">Yatch</Link></li>
                                    <li><Link to="/">Activity</Link></li>
                                    <li><Link to="/">Museum</Link></li>
                                    <li><Link to="/">Beauty</Link></li>
                                    <li><Link to="/">Classic</Link></li>
                                    <li><Link to="/">Creative</Link></li>
                                    <li><Link to="/">Designs</Link></li>
                                    <li><Link to="/">Featured</Link></li>
                                    <li><Link to="/">Free Style</Link></li>
                                    <li><Link to="/">Programs</Link></li>
                                    <li><Link to="/">Travel</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default BlogFilter;
