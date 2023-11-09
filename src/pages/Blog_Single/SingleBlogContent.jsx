import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../assets/images/bg1.jpg'
import bg2 from '../../assets/images/destination10.jpg'

const SingleBlogContent = () => {
    return (
        <section className="blog">
        <div className="container">
            <div className="row flex-row-reverse">
                <div className="col-lg-9 mb-4">
                    <div className="blog-single">

                        <div className="blog-wrapper">
                            <h2 className="lh-sm">Apple honors eight developers with annual Apple Design Awards.</h2>
                            <div className="blog-content first-child-cap">
                                <p className="mb-3">The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million. Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit vitae lo bortis faucibus. Lorem ipsum dolor sit amet, conse dolor sit amet, consectetu ctetur adipis Viales. Lorem ipsum dolor sit amet, cons sit amet, consectetur adi ectetur adipis Vi.<br/><br/>
                                <img src={bg} alt="" />
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            </div>

                            <div className="blog-quote mb-4 rounded">
                                <p className="white">“To take a trivial example, which ever undertakes laborious physical work exercise, except obtain some advantage blinded” </p>
                                <span className="white">By Michael Delwell</span>
                                <i className="fas fa-quote-left"></i>
                            </div>

                            <div className="blog-imagelist mb-4">
                                <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    {/* <img src="images/trending/trending4.jpg" alt="image" className="rounded"/> */}
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    {/* <img src="images/trending/trending2.jpg" alt="image" className="rounded"/> */}
                                </div>
                                </div>
                            </div>    

                            <div className="bigyapan mb-4">
                                <Link to = "/"><img src="images/bigyapan1.jpg" alt="" className="rounded"/></Link>
                            </div>

                            <p className="mb-4">as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                                <Link to = "/"><img src="images/bigyapan1.jpg" alt="" className="rounded"/></Link>
                            <div className="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border rounded">
                                <div className="blog-share-tag">
                                    <ul className="inline">
                                        <li><strong>Posted In:</strong></li>    
                                        <li><Link to = "/">Fashion,</Link></li>
                                        <li><Link to = "/">Beauty,</Link></li>
                                        <li><Link to = "/">Vacation,</Link></li>
                                        <li><Link to = "/">Travel,</Link></li>
                                        <li><Link to = "/">News</Link></li>
                                    </ul>
                                </div>
                                <div className="header-social">
                                    <ul>
                                        <li><Link to = "/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to = "/"><i className="fab fa-google-plus-g"></i></Link></li>
                                        <li><Link to = "/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to = "/"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="blog-author mb-4 bg-grey border rounded">
                            <div className="blog-author-item">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-md-3 col-sm-3 col-xs-12">
                                        <div className="blog-thumb text-center position-relative">
                                            <img src="images/reviewer/1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-sm-9 col-xs-12">
                                        <h3 className="title pink"><Link to = "/">About Author <span>Graphic Designer</span></Link></h3>
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                                    </div>
                                    
                                </div>        
                            </div>
                        </div>

                        <div className="blog-next mb-4 d-sm-flex align-items-center rounded">
                            <Link to = "/" className="d-block bg-theme">
                                <div className="prev ps-4">
                                    <i className="fa fa-arrow-left white"></i> 
                                    <p  className="m-0 white">Previous Post</p>
                                    <p className="m-0 white">The bedding was hardly able</p>
                                </div>
                            </Link>
                            <Link to = "/" className="d-block bg-grey">
                                <div className="next pr-4 text-right">
                                    <i className="fa fa-arrow-right"></i>
                                    <p className="m-0">Previous Post</p>
                                    <p className="m-0">The bedding was hardly able</p>
                                </div>
                            </Link>
                        </div>

                        <div className="single-comments single-box mb-4">
                            <h4 className="mb-4">Showing 16 verified guest comments</h4>
                            <div className="comment-box">
                                <div className="comment-image mt-2">
                                    {/* <img src="images/reviewer/1.jpg" alt="image"/> */}
                                </div>
                                <div className="comment-content rounded">
                                    <h4 className="mb-1 Soldman Kell">Soldman Kell</h4>
                                    <p className="comment-date">April 25, 2019 at 10:46 am</p>
                                    <div className="comment-rate">
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span className="comment-title">"The worst hotel ever"</span>
                                    </div>    
                                    
                                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div className="comment-like">
                                        <div className="like-title float-left">
                                            <Link to = "/" className="nir-btn mr-2">Reply</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="comment-box">
                                <div className="comment-image mt-2">
                                    {/* <img src="images/reviewer/2.jpg" alt="image"/> */}
                                </div>
                                <div className="comment-content rounded">
                                    <h4 className="mb-1">Burson Lesson</h4>
                                    <p className="comment-date">April 25, 2019 at 10:46 am</p>
                                    <div className="comment-rate">
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span className="comment-title">"Was too noisy and not suitable for business meetings"</span>
                                    </div> 
                                    
                                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div className="comment-like">
                                        <div className="like-title float-left">
                                            <Link to = "/" className="nir-btn">Reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-add-review">
                            <h4 className="">Write a Review</h4>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-2">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-2">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-1">
                                        <div className="form-group">
                                            <textarea>Comment</textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-btn">
                                            <Link to = "/" className="nir-btn">Submit Review</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mb-4">
                    <div className="sidebar-sticky">
                            <div className="detail-sidebar">
                            <div className="mag-image mb-2 position-relative">
                                <img src={bg2} alt=''/>
                                <div className="video-button text-center position-absolute top-50 start-0 end-0 z-index1">
                                     <div className="call-button text-center">
                                        <button type="button" className="play-btn js-video-button" data-video-id="152879427" data-channel="vimeo">
                                            <i className="fa fa-play bg-blue"></i>
                                        </button>
                                    </div>
                                    <div className="video-figure"></div>
                                </div>
                            </div>
                            <div className="detail-sidebar-item border-b pb-2 mb-2">
                                <h5><Link to = "detail-1.html">Some native species quickly disappeared from Biotest Lake</Link><span><Link to = "/">John Doe</Link></span></h5>     
                            </div>
                            <div className="detail-sidebar-item border-b pb-2 mb-2">
                                <h5><Link to = "detail-1.html">Some native species quickly disappeared from Biotest Lake</Link><span><Link to = "/">John Doe</Link></span></h5>     
                            </div>
                            <div className="detail-sidebar-item border-b pb-2 mb-2">
                                <h5><Link to = "detail-1.html">Some native species quickly disappeared from Biotest Lake</Link><span><Link to = "/">John Doe</Link></span></h5>     
                            </div>
                            <div id="sidebar1">
                                <div className="sidebar-icons">
                                    <Link to = "/" className="me-1"><i className="fa fa-heart" aria-hidden="true"><span> 1.2K</span></i></Link>
                                    <Link to = "/" className="me-1"><i className="fa fa-bookmark" aria-hidden="true"></i></Link>
                                    <Link to = "/" className="me-1"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                                    <Link to = "/"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
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

export default SingleBlogContent;
