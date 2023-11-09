import React from 'react';
import { Link } from 'react-router-dom';

const TourContent = () => {
    return (
        <section className="trending pt-6">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="single-content">
                        <div id="highlight">
                            <div className="single-full-title border-b mb-2 pb-2">
                                <div className="single-title">
                                    <h2 className="mb-1">Adriatic Adventure–Zagreb to Athens</h2>
                                    <div className="rating-main d-md-flex align-items-center">
                                        <p className="mb-0 me-2"><i className="icon-location-pin"></i> Greater London, United Kingdom</p>
                                        <div className="rating me-2">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span>(1,186 Reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="description-images mb-4">
                                {/* <img src="images/trending/trending-large.jpg" alt="" className="w-100 rounded"/> */}
                            </div>

                            <div className="description mb-2">
                                <h4>Description</h4>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                <p className="mb-0">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </div>

                            <div className="tour-includes mb-4">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> 5 Days</td>
                                            <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> Max People : 26</td>
                                            <td><i className="fa fa-calendar pink mr-1" aria-hidden="true"></i> Jan 18 - Dec 21</td>
                                        </tr>
                                        <tr>
                                            <td><i className="fa fa-user pink mr-1" aria-hidden="true"></i> Min Age : 10+</td>
                                            <td><i className="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Pickup : Airport</td>
                                            <td><i className="fa fa-file-alt pink mr-1" aria-hidden="true"></i> Langauge - English, Thai</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="description mb-2">
                                <div className="row">
                                    
                                    <div className="col-lg-6 col-md-6 mb-2">
                                        <div className="desc-box bg-grey p-4 rounded">
                                            <h5 className="mb-2">Price Includes</h5>
                                            <ul>
                                                <li className="d-block pb-1"><i className="fa fa-check pink mr-1"></i> Air Fares</li>
                                                <li className="d-block pb-1"><i className="fa fa-check pink mr-1"></i> 3 Nights Hotel Accomodation</li>
                                                <li className="d-block pb-1"><i className="fa fa-check pink mr-1"></i> Tour Guide</li>
                                                <li className="d-block"><i className="fa fa-check pink mr-1"></i> Entrance Fees</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-2">
                                        <div className="desc-box bg-grey p-4 rounded">
                                            <h5 className="mb-2"> 
                                                Exclusion</h5>
                                            <ul>
                                                <li className="d-block pb-1"><i className="fa fa-close pink mr-1"></i> Guide Service Fee</li>
                                                <li className="d-block pb-1"><i className="fa fa-close pink mr-1"></i> Driver Service Fee</li>
                                                <li className="d-block pb-1"><i className="fa fa-close pink mr-1"></i> Any Private Expenses</li>
                                                <li className="d-block"><i className="fa fa-close pink mr-1"></i> Room Service Fees</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="description mb-4">
                                <h4>What to Expect</h4>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                                <p className="mb-0">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>               
                            </div>
                        </div>

                        <div  id="iternary"  className="accrodion-grp faq-accrodion mb-4"data-grp-name="faq-accrodion">
                            <div className="accrodion active">
                                <div className="accrodion-title rounded">
                                    <h5 className="mb-0"><span>Day 1</span> - Barcelona - Zaragoza - Madrid</h5>
                                </div>
                                <div className="accrodion-content" style={{display: "block"}}>
                                    <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accrodion ">
                                <div className="accrodion-title rounded">
                                    <h5 className="mb-0"><span>Day 2</span> - Zurich - Biel/Bienne - Neuchatel - Geneva</h5>
                                </div>
                                <div className="accrodion-content" style={{display: "none"}}>
                                    <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accrodion">
                                <div className="accrodion-title rounded">
                                    <h5 className="mb-0"><span>Day 3</span> - Enchanting Engelberg</h5>
                                </div>
                                <div className="accrodion-content"  style={{display: "none"}}>
                                    <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accrodion ">
                                <div className="accrodion-title rounded">
                                    <h5 className="mb-0"><span>Day 4</span> - Barcelona - Zaragoza - Madrid</h5>
                                </div>
                                <div className="accrodion-content"  style={{display: "none"}}>
                                    <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  id="single-map" className="single-map mb-4">
                            <h4>Map</h4>
                            <div className="map rounded overflow-hidden">
                                <div style={{width: "100%"}}>
                                    <iframe title='map' className=" rounded overflow-hidden" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>

                        <div  id="single-review" className="single-review mb-4">
                            <h4>Average Reviews</h4>
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="review-box bg-title text-center py-4 p-2 rounded">
                                        <h2 className="mb-1 white"><span>2.2</span>/5</h2>
                                        <h4 className="white mb-1">"Feel so much worst than thinking"</h4>
                                        <p className="mb-0 white font-italic">From 40 Reviews</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="review-progress">
                                        <div className="progress-item mb-1">
                                            <p className="mb-0">Cleanliness</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                                                    <span className="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-item mb-1">
                                            <p className="mb-0">Facilities</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}>
                                                    <span className="sr-only">30% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-item mb-1">
                                            <p className="mb-0">Value for money</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                                                    <span className="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-item mb-1">
                                            <p className="mb-0">Service</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-item">
                                            <p className="mb-0">Location</p>
                                            <div className="progress rounded">
                                                <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width:"45%"}}>
                                                    <span className="sr-only">45% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  id="single-comments" className="single-comments single-box mb-4">
                            <h5 className="border-b pb-2 mb-2">Showing 16 verified guest comments</h5>
                            <div className="comment-box">
                                <div className="comment-image">
                                    {/* <img src="images/reviewer/1.jpg" alt="image"/> */}
                                </div>
                                <div className="comment-content rounded">
                                    <h5 className="mb-1">Helena</h5>
                                    <p className="comment-date">April 25, 2022 at 10:46 am</p>
                                    <div className="comment-rate">
                                        <div className="rating mar-right-15">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span className="comment-title">The worst hotel ever"</span>
                                    </div>    
                                    
                                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div className="comment-like">
                                        <div className="like-title">
                                            <Link to="/" className="nir-btn">Reply</Link>
                                        </div>
                                        <div className="like-btn pull-right">
                                            <Link to="/"  className="like"><i className="fa fa-thumbs-up"></i></Link>
                                            <Link to="/"  className="disike"><i className="fa fa-thumbs-down"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-box">
                                <div className="comment-image">
                                    {/* <img src="images/reviewer/2.jpg" alt="image"/> */}
                                </div>
                                <div className="comment-content rounded">
                                    <h5 className="mb-1">Helena</h5>
                                    <p className="comment-date">April 25, 2022 at 10:46 am</p>
                                    <div className="comment-rate">
                                        <div className="rating mar-right-15">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span className="comment-title">Was too noisy and not suitable for business meetings"</span>
                                    </div> 
                                    
                                    <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div className="comment-like">
                                        <div className="like-title">
                                            <Link to="/"  className="nir-btn">Reply</Link>
                                        </div>
                                        <div className="like-btn pull-right">
                                            <Link to="/"  className="like"><i className="fa fa-thumbs-up"></i></Link>
                                            <Link to="/"  className="disike"><i className="fa fa-thumbs-down"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  id="single-add-review" className="single-add-review">
                            <h4>Write a Review</h4>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-2">
                                            <textarea>Comment</textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-btn">
                                            <Link to="/"  className="nir-btn">Submit Review</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 ps-lg-4">
                    <div className="sidebar-sticky sticky1">
                        <div className="tabs-navbar bg-lgrey mb-4 bordernone rounded overflow-hidden">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul id="tabs" className="nav nav-tabs bordernone mb-0">
                                        <li className="active">
                                            <Link  data-toggle="tab" to="#highlight" className="rounded box-shadow mb-2 border-all">Highlight</Link>
                                        </li>
                                        <li>
                                            <Link  data-toggle="tab" to="#iternary" className="rounded box-shadow mb-2 border-all">Iternary</Link>
                                        </li>
                                        <li>
                                            <Link  data-toggle="tab" to="#single-map" className="rounded box-shadow mb-2 border-all">Map</Link>
                                        </li>
                                        <li>
                                            <Link  data-toggle="tab" to="#single-review" className="rounded box-shadow mb-2 border-all">Reviews</Link>
                                        </li>
                                        <li>
                                            <Link  data-toggle="tab" to="#single-comments" className="rounded box-shadow mb-2 border-all">Comments</Link>
                                        </li>
                                        <li>
                                            <Link  data-toggle="tab" to="#single-add-review"  className="rounded box-shadow mb-2 border-all">Add Reviews</Link>
                                        </li>
                                    </ul>
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

export default TourContent;
