import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import team1 from "../../assets/images/teams/img1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getHome } from "../../api-loading";

const TourGuied = () => {
  const [data, setData] = useState({
    title: "",
    // subtitle: "",
    description: "",
    member:[

    ]
  });

  const callApi = async () => {
    const apiUrl = await getHome();
    setData(apiUrl.our_excellent_guides);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="our-team pb-0">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">Tour Guides</h4>
          <h2 className="mb-1">
            {/* Meet Our <span className="theme">Excellent Guides</span> */}
            {data.title}
          </h2>
          <p>{data.description}</p>
        </div>
        <div className="team-main">
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
            {data.member.map((memberInfo) => {
              return (
                <SwiperSlide key={memberInfo.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="team-list rounded">
                    <div className="team-image">
                      <img src={memberInfo.profile} alt="team" />
                    </div>
                    <div className="team-content text-center p-3 bg-theme">
                      <h4 className="mb-0 white">{memberInfo.username}</h4>
                      <p className="mb-0 white">{memberInfo.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TourGuied;
