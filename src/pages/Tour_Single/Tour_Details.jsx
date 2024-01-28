import React, { useEffect, useState } from 'react';
import { getSingleTour } from '../../api-loading';

const TourDetails = () => {
    const [isFormOpen, setIsOpenForm] = useState(false);

    const handelPopup = (value) => {
      setIsOpenForm(value);
    };
  
    const [data,setData] = useState({
      tour_exclusion:[],
      tour_price_include:[],
      itinerary_item:[]
  })
  const [id,setID] = useState(1);
  
  const callApi = async (id) => {
      const apiUrl = await getSingleTour(id);
      setData(apiUrl);
    };
  
    useEffect(() => {
      callApi(id);
    }, []);
  
    console.log(data)

    return (
        <section className="trending pt-6">

        <div className="tabs-navbar1 bg-white sticky1 bordernone py-3">
            <ul id="tabs" className="nav nav-tabs bordernone mb-0 overflow-visible">
                <li className="active"><a data-toggle="tab" href="#highlight">Highlight</a></li>
                <li><a data-toggle="tab" href="#iternary">Iternary</a></li>
                <li><a data-toggle="tab" href="#single-map">Map</a></li>
                <li><a data-toggle="tab" href="#single-review">Reviews</a></li>
                <li><a data-toggle="tab" href="#single-comments">Comments</a></li>
                <li><a data-toggle="tab" href="#single-add-review" className="bordernone">Add Reviews</a></li>
            </ul>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-11">
                <div className="single-content">
                <div id="highlight position-relative">
                    <div className="single-full-title border-b mb-2 pb-2">
                        <div className="single-title text-center">
                            <h2 className="mb-1">{data.tour_title}</h2>
                            <div className="rating-main">
                                <p className="mb-0 me-2 d-inline-block"><i className="icon-location-pin"></i> Greater London, United Kingdom</p>
                                <div className="rating me-2 d-inline-block">
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

                   
<div className="row mb-4">
    
<div className="col"><img src={data.single_banner} alt="" className="rounded h-100"/></div>
        <div className="col"><img src={data.grid_banner} alt="" className="rounded h-100"/></div>
</div>

                    <div className="description mb-2">
                        <h4>Description</h4>
                        <p>{data.tour_description}</p>
                    </div>


                    <div className="tour-includes mb-4">
                        <table>
                            <tbody>
                                <tr>
                                    <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> {data.duration} Days</td>
                                    <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> Max People : {data.max_people}</td>
                                    <td><i className="fa fa-calendar pink mr-1" aria-hidden="true"></i> Jan 18 - Dec 21</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-user pink mr-1" aria-hidden="true"></i> Min Age : {data.min_age}+</td>
                                    <td><i className="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Pickup : {data.pick_up}</td>
                                    <td><i className="fa fa-file-alt pink mr-1" aria-hidden="true"></i> Langauge - {data.language}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="description mb-2">
                        <div className="row">
                        <div className="description mb-2">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mb-2">
                      <div className="desc-box bg-grey p-4 rounded">
                        <h5 className="mb-2">Price Includes</h5>
                        <ul>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1"></i> Air Fares
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1"></i> 3 Nights
                            Hotel Accomodation
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1"></i> Tour Guide
                          </li>
                          <li className="d-block">
                            <i className="fa fa-check pink mr-1"></i> Entrance
                            Fees
                          </li>

                          {
                                data.tour_price_include.map((item) => {
                                    return(
                                        <li className="d-block">
                            <i className="fa fa-check pink mr-1"></i> {item.name}
                          </li>
                                    )
                                })
                            }

                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-2">
                      <div className="desc-box bg-grey p-4 rounded">
                        <h5 className="mb-2">Exclusion</h5>
                        <ul>


                          

                            {
                                data.tour_exclusion.map((item) => {
                                    return(
                                        <li className="d-block">
                            <i className="fa fa-close pink mr-1"></i> {item.name}
                          </li>
                                    )
                                })
                            }


                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                        </div>
                    </div>

                    <div className="description mb-4">
                        <h4>What to Expect</h4>
                        <p>{data.accept}</p>               
                    </div>
                </div>

                <div  id="iternary"  className="accrodion-grp faq-accrodion mb-4"data-grp-name="faq-accrodion">
                    

                    {
                        data.itinerary_item.map((item) => {
                            return(
                                <div className={`accrodion ${item.id === 21 ? 'active' : ''}`}>
                        <div className="accrodion-title rounded">
                            <h5 className="mb-0"><span>Day 1</span> - {item.itinerary_title}</h5>
                        </div>
                        <div className="accrodion-content" style={{display: `${item.id === 21 ? 'block':'none'}`}}>
                            <div className="inner">
                                <p>{item.itinerary_description}</p>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }

                </div>

                <div  id="single-map" className="single-map mb-4">
                    <h4>Map</h4>
                    <div className="map rounded overflow-hidden">
                        <div style={{width: "100%"}}>
                        <iframe
                      title="map"
                      className=" rounded overflow-hidden"
                      height="400"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
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
                            {/* <img src={data.} alt=""/> */}
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
                                    <button className="nir-btn">Reply</button>
                                </div>
                                <div className="like-btn pull-right">
                                    <button className="like"><i className="fa fa-thumbs-up"></i></button>
                                    <button className="disike"><i className="fa fa-thumbs-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-box">
                        <div className="comment-image">
                            {/* <img src="images/reviewer/2.jpg" alt="image"> */}
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
                                    <button className="nir-btn">Reply</button>
                                </div>
                                <div className="like-btn pull-right">
                                    <button className="like"><i className="fa fa-thumbs-up"></i></button>
                                    <button className="disike"><i className="fa fa-thumbs-down"></i></button>
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
                                {/* <div className="form-group mb-2">
                                    <textarea defaultValue={'comment'}>Comment</textarea>
                                </div> */}
                            </div>
                            <div className="col-md-6">
                                <div className="form-btn">
                                    <button className="nir-btn">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>
      











      <div className="description-images mb-4">
        <div className="row">
          
          <div className="col">
            <div
              style={{
                minWidth: "300px",
                zIndex: 1000,
                right: "25px",
                top: "25%",
              }}
              className="position-fixed "
            >
              <div className="border border-success border-2 p-2 bg-white shadow-sm rounded text-center">
                <div>
                  <h3 className="mb-1">Rs. 58 259</h3>
                  <p>
                    <small>Starting price per adult</small>
                  </p>
                  <button
                    onClick={() => handelPopup(true)}
                    className="nir-btn w-100"
                  >
                    Book Online
                  </button>
                </div>
                <hr />
                <p>
                  <small>Get our assistance for easy booking</small>
                </p>

                {/* <!-- <a href="tell:+91 99993 60524" className="btn btn-secondary rounded-3 "><small> Want us to call you?</small></a> --> */}
                <a
                  href="tel:+91 99993 60524"
                  type="button"
                  to=""
                  className="btn btn-secondary rounded-3"
                >
                  <i className="fa fa-phone me-1"></i> Want us to call you?
                </a>
                <p>
                  <small>Call us at(Toll Free No.)</small>
                </p>
                <h4>
                  <a href="tel:+91 99993 60524">+91 99993 60524</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={`modal fade ${isFormOpen ? 'd-block' : 'd-none'}`} id="enquire" tabIndex="-1" aria-labelledby="enquire" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Send Message</h5>
              <button onClick={() => handelPopup(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>           
            </div>
            <div className="modal-body pb-0" id="">
                <form method="post" action="#" name="contactform1" id="contactform1">
                    <div className="form-group mb-2">
                        <input type="text" name="user_name" className="form-control" id="fname1" placeholder="User Name"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" name="user_name" className="form-control" id="femail" placeholder="Email Address"/>
                    </div>
                    <div className="form-group mb-2">
                        <input type="tel" name="password_name" className="form-control" id="phone" placeholder="Phone Ex. +991"/>
                    </div>

                    <div className="form-group mb-2">
                        <textarea className="form-control" name="message" id="" defaultValue={''} placeholder="Message"></textarea>
                    </div>
                    
                    
                    <div className="comment-btn mb-2 pb-2 text-center border-b">
                        <button type="submit" className="nir-btn w-100" id="submit1" value="Send"/>
                    </div>
                </form>
            
          </div>
        </div>
      </div>
    </div>

    </section>
    );
}

export default TourDetails;
