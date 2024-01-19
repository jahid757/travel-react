import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import review_img from "../../assets/images/review-1.jpg";
import { getHome } from "../../api-loading";

const Testimonial = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [comment, setComment] = useState([
    {
      name: "",
      profile: "",
      comment: "",
    },
    {
      name: "",
      profile: "",
      comment: "",
    },
    {
      name: "",
      profile: "",
      comment: "",
    },
    {
      name: "",
      profile: "",
      comment: "",
    },
  ]);

  const callApi = async () => {
    const apiUrl = await getHome();
    setData(apiUrl.testimonial);
    setComment(apiUrl.testimonial.comment);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${review_img})`,
        backgroundPosition: "inherit",
      }}
      className="testimonial pt-10 pb-20"
    >
      <div className="container">
        <div className="testimonial-in">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title">
                <h4 className="mb-1 theme1">Our Testimonails</h4>
                <h2 className="mb-1 white">{data.title}</h2>
                <p className="mb-0 white">{data.description}</p>
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
                            {comment[0].comment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                          {/* <img src={comment[0].profile} alt=""/> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{comment[0].name}</h5>
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
                            {comment[1].comment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                            {/* <img src={comment[1].profile} alt=""/> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{comment[1].name}</h5>
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
                            {comment[2].comment}
                          </p>
                          <div className="author-info d-flex align-items-center">
                          {/* <img src={comment[2].profile} alt=""/> */}
                            <div className="author-title ms-3">
                              <h5 className="m-0 theme1">{comment[2].name}</h5>
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
