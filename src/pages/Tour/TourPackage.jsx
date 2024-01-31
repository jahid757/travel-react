import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTour } from "../../api-loading";

const TourPackage = () => {
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
    //bg-lgrey
    <section className="trending pt-6 pb-6 ">
      <div className="container">
        <div className="list-results d-flex align-items-center justify-content-between">
          <div className="list-results-sort">
            <p className="m-0">Showing 1-5 of 80 results</p>
          </div>
          <div className="click-menu d-flex align-items-center justify-content-between">
            <div className="change-list me-2">
              <a href="tour-list.html">
                <i className="fa fa-bars rounded"></i>
              </a>
            </div>
            <div className="change-grid f-active me-2">
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
                          style={{ backgroundImage: `url(${single_banner})` }}
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
                          <i className="icon-location-pin"></i> {country_name}
                        </h6>
                        <p className="mt-4 mb-0">
                          Taking Safety Measures <br />
                          <Link to="/">
                            <span className="theme"> Free cancellation</span>
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
    </section>
  );
};

export default TourPackage;
