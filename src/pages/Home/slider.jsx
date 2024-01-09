import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import sliderImage1 from "../../assets/images/bg-hero.jpg";
import sliderImage2 from "../../assets/images/bg-hero-2.jpg";
import sliderImage3 from "../../assets/images/bg-hero-3.jpg";
import { getHome } from "../../api-loading";




// import { Navigation } from "swiper/modules";



// Swiper.use([Navigation, Pagination, Autoplay]);
const Slider = () => {

  const [data,setData] = useState([])

  // useEffect( () => {
  //   fetch('https://trawelfreeby.jdinfotech.net/api/home')
  //   .then(response => response.json())
  //   .then(data => setData(data.data.slider))
  //   },[])

    const  getHome = async () =>{
      const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/home')
      const result = await apiUrl.json();
      return setData(result)
  }
  useEffect( () => {
    getHome()
    },[])
    console.log(data) // title ,subtitle, description
  
  return (
    <section className="banner overflow-hidden">
      <div style={{ height: "300px" }} className="slider top50">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Swiper style={{ height: "100%", width: "100%" }}
              speed={4500}
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
              >
                <SwiperSlide style={{ height: "100%" }}>
                  <div className="slide-inner">
                    <div
                      className="slide-image"
                      style={{ backgroundImage: "url(" + sliderImage1 + ")" }}
                    ></div>
                    <div className="swiper-content">
                      <div className="entry-meta mb-2">
                        <h5 className="entry-category mb-0 white">
                          { data[0].title}
                        </h5>
                      </div>
                      <h1 className="mb-2">
                        <a href="tour-single.html" className="white">
                          {data ? '' : data[0].subtitle}
                        </a>
                      </h1>
                      <p className="white mb-4">
                        {data ? "" : data[0].description}
                      </p>
                      <button className="nir-btn">Discover More</button>
                    </div>
                    <div className="dot-overlay"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{height: "100%" }}>
                  <div className="slide-inner">
                    <div
                      className="slide-image"
                      style={{ backgroundImage: `url(${sliderImage2})` }}
                    ></div>
                    <div className="swiper-content">
                      <div className="entry-meta mb-2">
                        <h5 className="entry-category mb-0 white">
                          { data[0].title}
                        </h5>
                      </div>
                      <h1 className="mb-2">
                        <a href="tour-single.html" className="white">
                          {data ? '' : data[0].subtitle}
                        </a>
                      </h1>
                      <p className="white mb-4">
                        {data ? "" : data[0].description}
                      </p>
                      <button className="nir-btn">Discover More</button>
                    </div>
                    <div className="dot-overlay"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{height: "100%" }}>
                  <div className="slide-inner">
                    <div
                      className="slide-image"
                      style={{ backgroundImage: `url(${sliderImage3})` }}
                    ></div>
                    <div className="swiper-content">
                      <div className="entry-meta mb-2">
                        <h5 className="entry-category mb-0 white">
                          { data[0].title}
                        </h5>
                      </div>
                      <h1 className="mb-2">
                        <a href="tour-single.html" className="white">
                          {data ? '' : data[0].subtitle}
                        </a>
                      </h1>
                      <p className="white mb-4">
                        {data ? "" : data[0].description}
                      </p>
                      <button className="nir-btn">Discover More</button>
                    </div>
                    <div className="dot-overlay"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
