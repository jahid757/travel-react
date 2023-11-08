import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import team1 from '../../assets/images/teams/img1.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TourGuied = () => {
    return (
        <section className="our-team pb-0">
        <div className="container">
              
            <div className="section-title mb-6 w-75 mx-auto text-center">
                <h4 className="mb-1 theme1">Tour Guides</h4>
                <h2 className="mb-1">Meet Our <span className="theme">Excellent Guides</span></h2>
                <p>We're with you while you're ON THE GO</p>
            </div>  
            <div className="team-main">
                <Swiper className="row shop-slider"
                slidesPerView={4}
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
                >
                    <SwiperSlide className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="team-list rounded">
                            <div className="team-image">
                                <img src={team1} alt="team"/>
                            </div>
                            <div className="team-content text-center p-3 bg-theme">
                               <h4 className="mb-0 white">Gundeep Singh</h4>
                                <p className="mb-0 white">Operations Hotels and Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="team-list rounded">
                            <div className="team-image">
                            <img src={team1} alt="team"/>
                            </div>
                            <div className="team-content text-center p-3 bg-theme">
                               <h4 className="mb-0 white">Bhawana Bisht</h4>
                                <p className="mb-0 white">Operations Hotels and Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="team-list rounded">
                            <div className="team-image">
                            <img src={team1} alt="team"/>
                            </div>
                            <div className="team-content text-center p-3 bg-theme">
                               <h4 className="mb-0 white">Kajal</h4>
                                <p className="mb-0 white">Operations Flights and Visa</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="team-list rounded">
                            <div className="team-image">
                            <img src={team1} alt="team"/>
                            </div>
                            <div className="team-content text-center p-3 bg-theme">
                               <h4 className="mb-0 white">Abhishek Rawat</h4>
                                <p className="mb-0 white">Operations Flights</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="team-list rounded">
                            <div className="team-image">
                            <img src={team1} alt="team"/>
                            </div>
                            <div className="team-content text-center bg-theme p-3">
                               <h4 className="mb-0 white">Sanjeev Jha</h4>
                                <p className="mb-0 white">Accountant</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
    );
}

export default TourGuied;
