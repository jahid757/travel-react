import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { getTour } from "../../api-loading";

const Partners = () => {
  const [data, setData] = useState([]);
  const callApi = async () => {
    const apiUrl = await getTour();
    setData(apiUrl.partners);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="our-partner pb-6 pt-6">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">Our Partners</h4>
          <h2 className="mb-1">{data.partners_title}</h2>
          <p>{data.partners_description}</p>
        </div>
        <Swiper
          className="row align-items-center partner-in partner-slider"
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
          {data.map((partner) => {
            return (
              <SwiperSlide className="col-md-3 col-sm-6">
                <div className="partner-item p-4 py-2 ">
                  <img src={partner.profile} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
