import React, { useEffect, useState } from 'react';
import shape from '../../assets/images/shape4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getHolidays } from '../../api-loading';
import { Link } from 'react-router-dom';

const TourDeal = () => {
    const [data, setData] = useState({
        destination: [],
        tour_exclusion: [],
        deals:[]
      });
      const callApi = async () => {
        const apiUrl = await getHolidays();
        setData(apiUrl);
      };
    
      useEffect(() => {
        callApi();
      }, []);

    return (
        <section className="trending pb-6" style={{backgroundImage: `url(${shape})`}}>
        <div className="container">
            <div className="row align-items-center justify-content-between mb-6 ">
                <div className="col-lg-7">
                    <div className="section-title text-center text-lg-start">
                        <h4 className="mb-1 theme1">Top Deals</h4>
                        <h2 className="mb-1">{data.deals_title}</h2>
                        <p>{data.deals_description}</p>
                    </div>
                </div>
                
            </div>  
            <div className="trend-box">
                <div className="row">
                
                   


                    
                    
                    <Swiper
            className="row shop-slider"
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
            {data.deals.map((item) => {
              return (
                <SwiperSlide key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className=" rounded box-shadow bg-white mb-4">
                            <div className="trend-image position-relative">
                                <img src={item.single_banner} alt="" className=""/>
                                <div className="trend-content1 p-4">
                                    <h5 className="theme1 mb-1"><i className="flaticon-location-pin"></i> Norway</h5>
                                    <h3 className="mb-1 white"><Link to="/" className="text-white">Norway Lake</Link></h3>
                                    <div className="rating-main d-flex align-items-center pb-2">
                                        <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <span className="ms-2 white">(16)</span>
                                    </div>
                                    <div className="entry-meta d-flex align-items-center justify-content-between">
                                        <div className="entry-author d-flex align-items-center">
                                            <p className="mb-0 text-white"><span className="theme1 fw-bold fs-5"> $180.00</span> | Per person</p>
                                        </div>
                                        <div className="entry-author">
                                            <i className="icon-calendar text-white"></i>
                                            <span className="fw-bold text-white"> 6 Days Tours</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                </SwiperSlide>
              );
            })}
          </Swiper>


                </div>

            </div>    
        </div>
    </section>
    );
}

export default TourDeal;
