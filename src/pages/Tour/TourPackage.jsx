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
              tour_title,
              tour_description,
              single_banner,
              duration,
              package_price,
              rating,
            } = tour;

            return (
              <div className="col-lg-4 col-md-4 mb-4">
                <div className="trend-item rounded box-shadow">
                  <div className="trend-image position-relative">
                    <img src={single_banner} alt="" />
                    <div className="color-overlay"></div>
                  </div>
                  <div className="trend-content p-4 pt-5 position-relative">
                    <div className="trend-meta bg-theme white px-3 py-2 rounded">
                      <div className="entry-author">
                        <i className="icon-calendar"></i>
                        <span className="fw-bold"> {duration} Days Tours</span>
                      </div>
                    </div>
                    <h5 className="theme mb-1">
                      <i className="flaticon-location-pin"></i> {tour_title}
                    </h5>
                    <h3 className="mb-1">
                      <a href="tour-single.html">Piazza Castello</a>
                    </h3>
                    <div className="rating-main d-flex align-items-center pb-2">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                      </div>
                      <span className="ms-2">({rating})</span>
                    </div>
                    <p className=" border-b pb-2 mb-2">
                      {tour_description.substr(0, 67) + "..."}
                    </p>
                    <div className="entry-meta">
                      <div className="entry-author d-flex align-items-center">
                        <p className="mb-0">
                          <span className="theme fw-bold fs-5">
                            {" "}
                            ${package_price}
                          </span>{" "}
                          | Per person
                        </p>
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
