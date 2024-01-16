import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import review_img from '../../assets/images/review-1.jpg'

const Testimonial = () => {

  const [data,setData] = useState({
      title:'Good Reviews By Clients', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      comments:[
        {username:"Jared Erondu",profile:"",usercomment:"Travel Freeby was excellent all the way through this booking which was complicated by a number of changes, Travel Freeby was quick to respond and interpreted all our needs."}

      ]

  })

   // // useEffect( () => {
  // //   fetch('https://trawelfreeby.jdinfotech.net/api/home')
  // //   .then(response => response.json())
  // //   .then(data => setData(data.data.slider))
  // //   },[])

  //   const  getHome = async () =>{
  //     const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/home')
  //     const result = await apiUrl.json();
  //     return setData(result.slider)
  // }
  // useEffect( () => {
  //   getHome()
  //   },[])
  //   console.log(data) // title ,subtitle, description


  return (
    <section style={{backgroundImage:`url(${review_img})`,backgroundPosition:"inherit"}} className="testimonial pt-10 pb-20">
      <div className="container">
        <div className="testimonial-in">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title">
                <h4 className="mb-1 theme1">Our Testimonails</h4>
                <h2 className="mb-1 white">
                  {data.title}
                </h2>
                <p className="mb-0 white">
                  {data.description}
                </p>
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
                          <p className="mb-4 white fs-5 fw-normal">
                            {data.comments[0].usercomment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                            {/* <img src="images/testimonial/img1.jpg" alt=""> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{data.comments[0].username}</h5>
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
                          <p className="mb-4 white fs-5 fw-normal">
                            {data.comments[0].usercomment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                            {/* <img src="images/testimonial/img1.jpg" alt=""> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{data.comments[0].username}</h5>
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
                          <p className="mb-4 white fs-5 fw-normal">
                            {data.comments[0].usercomment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                            {/* <img src="images/testimonial/img1.jpg" alt=""> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{data.comments[0].username}</h5>
                              <span className="white">Accountant</span>
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
};

export default Testimonial;
