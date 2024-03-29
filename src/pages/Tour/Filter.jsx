import React, { useEffect, useState } from "react";
import trndingImage from "../../assets/images/trending2.jpg";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getTour } from "../../api-loading";

const Filter = () => {
  const [data, setData] = useState({
    category: [],
    tours: [],
  });
  const callApi = async () => {
    const apiUrl = await getTour();
    setData(apiUrl);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="trending pt-6 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="list-results d-flex align-items-center justify-content-between">
              <div className="list-results-sort">
                <p className="m-0">Showing 1-5 of 80 results</p>
              </div>
              <div className="click-menu d-flex align-items-center justify-content-between">
                <div className="change-list f-active me-2">
                  <a href="tour-list.html">
                    <i className="fa fa-bars rounded"></i>
                  </a>
                </div>
                <div className="change-grid me-2">
                  <a href="tour-grid.html">
                    <i className="fa fa-th rounded"></i>
                  </a>
                </div>
                <div className="sortby d-flex align-items-center justify-content-between ml-2">
                  <select className="niceSelect">
                    <option value="1">Sort By</option>
                    <option value="2">Average rating</option>
                    <option value="3">Price: low to high</option>
                    <option value="4">Price: high to low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {data.tours.map((tour) => {
                const {
                  id,
                  tour_title,
                  //tour_description,
                  single_banner,
                  duration,
                  package_price,
                  rating,
                  country_name,
                } = tour;

                return (
                  <div key={id} className="destination-list">
                    <div className="trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4">
                      <div className="row">
                        <div className="col-lg-4 col-md-3">
                          <div className="trend-item2 rounded">
                            {/* background-image: url(images/destination/destination15.jpg) */}
                            <Link
                              to="tour-single.html"
                              style={{
                                backgroundImage: `url(${single_banner})`,
                              }}
                            ></Link>
                            <div className="color-overlay"></div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <div className="trend-content position-relative text-md-start text-center">
                            <small>{duration} Day Tours</small>
                            <h3 className="mb-1">
                              <a href="tour-single.html">{tour_title}</a>
                            </h3>
                            <h6 className="theme mb-0">
                              <i className="icon-location-pin"></i>{" "}
                              {country_name}
                            </h6>
                            <p className="mt-4 mb-0">
                              Taking Safety Measures <br />
                              <Link to="/">
                                <span className="theme">
                                  {" "}
                                  Free cancellation
                                </span>
                              </Link>
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                          <div className="trend-content text-md-end text-center">
                            <div className="rating">
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                              <span className="fa fa-star checked"></span>
                            </div>
                            <small>{rating} Reviews</small>
                            <div className="trend-price my-2">
                              <span className="mb-0">From</span>
                              <h3 className="mb-0">${package_price}</h3>
                              <small>Per Adult</small>
                            </div>
                            <a href="tour-single.html" className="nir-btn">
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-12">
                <div className="text-center">
                  <Link to="/" className="nir-btn">
                    Load More <i className="fa fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-4">
            <div className="sidebar-sticky">
              <div className="list-sidebar">
                <div className="sidebar-item mb-4">
                  <h3 className="">Categories Type</h3>
                  <ul className="sidebar-category1">
                    {data.category.map((category) => {
                      return (
                        <li>
                          <input type="checkbox" /> {category.name}{" "}
                          <span className="float-end">
                            {category.category_tour_count}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="sidebar-item mb-4">
                  <h3 className="">Duration Type</h3>
                  <ul className="sidebar-category1">
                    <li>
                      <input type="checkbox" checked /> up to 1 hour{" "}
                      <span className="float-end">92</span>
                    </li>
                    <li>
                      <input type="checkbox" /> 1 to 2 hour{" "}
                      <span className="float-end">22</span>
                    </li>
                    <li>
                      <input type="checkbox" /> 2 to 4 hour{" "}
                      <span className="float-end">35</span>
                    </li>
                    <li>
                      <input type="checkbox" /> 4 to 8 hour{" "}
                      <span className="float-end">41</span>
                    </li>
                    <li>
                      <input type="checkbox" /> 8 to 1 Day{" "}
                      <span className="float-end">11</span>
                    </li>
                    <li>
                      <input type="checkbox" /> 1 Day to 2 Days{" "}
                      <span className="float-end">61</span>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-item mb-4">
                  <h3 className="">Duration Type</h3>
                  <div className="range-slider mt-0">
                    <p className="text-start mb-2">Price Range</p>
                    <div
                      data-min="0"
                      data-max="2000"
                      data-unit="$"
                      data-min-name="min_price"
                      data-max-name="max_price"
                      className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                      aria-disabled="false"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="min-value">{data.max_price} $</p>
                        <p className="max-value">
                          {data.min_price > 0 ? data.min_price : "0"} $
                        </p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>

                <div className="sidebar-item">
                  <h3>Related Destinations</h3>

                  <div className="sidebar-destination">
                    <Swiper
                      className="row about-slider"
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
                      <SwiperSlide className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <img src={trndingImage} alt="" />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h5 className="mb-0">
                                  <a href="tour-single.html" className="theme1">
                                    Italy
                                  </a>
                                </h5>
                                <h4 className="mb-0 white">Caspian Valley</h4>
                              </div>
                              <span className="white bg-theme p-1 px-2 rounded">
                                18 Tours
                              </span>
                            </div>
                            <div className="color-overlay"></div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <img src={trndingImage} alt="" />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h5 className="mb-0">
                                  <a href="tour-single.html" className="theme1">
                                    Tokyo
                                  </a>
                                </h5>
                                <h4 className="mb-0 white">Japan</h4>
                              </div>
                              <span className="white bg-theme p-1 px-2 rounded">
                                21 Tours
                              </span>
                            </div>
                            <div className="color-overlay"></div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
