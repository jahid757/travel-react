import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cl_1 from '../../assets/images/cl-1.png'
import cl_2 from '../../assets/images/cl-2.png'
import cl_3 from '../../assets/images/cl-3.png'
import cl_4 from '../../assets/images/cl-4.png'
import cl_5 from '../../assets/images/cl-5.png'

const Partners = () => {
    return (
        <section className="our-partner pb-6 pt-6">
        <div className="container">
            <div className="section-title mb-6 w-75 mx-auto text-center">
                <h4 className="mb-1 theme1">Our Partners</h4>
                <h2 className="mb-1">Our Awesome <span className="theme">partners</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <Swiper className="row align-items-center partner-in partner-slider"
                slidesPerView={4}
                speed={3000}
              loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
                >
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_1} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_3} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_4} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_5} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-md-3 col-sm-6">
                    <div className="partner-item p-4 py-2 ">
                        <img src={cl_1} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    );
}

export default Partners;
