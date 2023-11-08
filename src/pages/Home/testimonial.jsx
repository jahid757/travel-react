import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonial = () => {
    return (
        // style="background-image: url(images/review-1.jpg); background-position: inherit;"
        <section className="testimonial pt-10 pb-20"  >   
        <div className="container">
            <div className="testimonial-in">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h4 className="mb-1 theme1">Our Testimonails</h4>
                            <h2 className="mb-1 white">Good Reviews By <span className="theme">Clients</span></h2>
                            <p className="mb-0 white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="row about-slider">
<Swiper
speed={3000}
              loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
>
                            <SwiperSlide className="col-sm-4 item">
                                <div className="testimonial-item1">
                                    <div className="details d-flex">
                                        <i className="fa fa-quote-left fs-1 mb-0"></i>
                                        <div className="author-content ms-4">
                                            <p className="mb-4 white fs-5 fw-normal">Travel Freeby was excellent all the way through this booking which was complicated by a number of changes, Travel Freeby was quick to respond and interpreted all our needs.</p>
                                            <div className="author-info d-flex align-items-center">
                                                {/* <img src="images/testimonial/img1.jpg" alt=""> */}
                                                <div className="author-title ms-3">
                                                    <h5 className="m-0 theme1">Lonell South</h5>
                                                    <span className="white">Accountant</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="col-sm-4 item">
                                <div className="testimonial-item1">
                                    <div className="details d-flex">
                                        <i className="fa fa-quote-left fs-1 mb-0"></i>
                                        <div className="author-content ms-4">
                                            <p className="mb-4 white fs-5 fw-normal">Travel Freeby provide a means of booking and controlling business travel costs with the backing of real-time analytical data to monitor and review our travel expenditure.</p>
                                            <div className="author-info d-flex align-items-center">
                                                {/* <img src="images/testimonial/img2.jpg" alt=""> */}
                                                <div className="author-title ms-3">
                                                    <h5 className="m-0 theme1">Kelton Mick</h5>
                                                    <span className="white">Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="col-sm-4 item">
                                <div className="testimonial-item1">
                                    <div className="details d-flex">
                                        <i className="fa fa-quote-left fs-1 mb-0"></i>
                                        <div className="author-content ms-4">
                                            <p className="mb-4 white fs-5 fw-normal">Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                                            <div className="author-info d-flex align-items-center">
                                                {/* <img src="images/testimonial/img3.jpg" alt=""> */}
                                                <div className="author-title ms-3">
                                                    <h5 className="m-0 theme1">Jared Erondu</h5>
                                                    <span className="white">Supervisor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
</Swiper>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 

        <div className="dot-overlay"></div>   
    </section>
    );
}

export default Testimonial;
