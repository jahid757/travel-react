import React, { useEffect, useState } from "react";
import travel_img from "../../assets/images/travel.png";
import { getAbout } from "../../api-loading";

const Know = () => {
  const [data, setData] = useState({
    know_us: {
      title: "",
      description: "",
    },
    website_info: {},
  });

  const callApi = async () => {
    const apiUrl = await getAbout();
    setData(apiUrl);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="about-us pt-6">
      <div className="container">
        <div className="about-image-box">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-6 ps-4">
              <div className="about-content text-center text-lg-start">
                <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                <h2 className="border-b mb-2 pb-1">{data.know_us.title}</h2>
                <p className="border-b mb-2 pb-2">{data.know_us.description}</p>
                <div className="about-listing">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <i className="icon-location-pin theme"></i> Efficient
                    </li>
                    <li>
                      <i className="icon-briefcase theme"></i> Safety Maximum
                      Priority
                    </li>
                    <li>
                      <i className="icon-folder theme"></i> Savings
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 pe-4">
              <div
                className="about-image"
                style={{ animation: "none", background: "transparent" }}
              >
                <img src={travel_img} alt="" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="counter-main w-75 float-start z-index3 position-relative">
                <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                      <div className="counter-item border-end pe-4">
                        <div className="counter-content">
                          <h2 className="value mb-0 theme">
                            {data.website_info.years_experiences}
                          </h2>
                          <span className="m-0">Years Experiences</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                      <div className="counter-item border-end pe-4">
                        <div className="counter-content">
                          <h2 className="value mb-0 theme">
                            {data.website_info.award_winning}
                          </h2>
                          <span className="m-0">Award Winning</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                      <div className="counter-item ">
                        <div className="counter-content">
                          <h2 className="value mb-0 theme">
                            {data.website_info.happy_customers}
                          </h2>
                          <span className="m-0">Happy Travelers</span>
                        </div>
                      </div>
                    </div>
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

export default Know;
