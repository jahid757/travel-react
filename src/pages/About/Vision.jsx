import React, { useEffect, useState } from "react";
import { getAbout } from "../../api-loading";

const Vision = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const apiUrl = await getAbout();
    setData(apiUrl.our_vision);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="about-us pb-0">
      <div className="section-shape section-shape1"></div>
      <div className="container">
        <div className="section-title mb-6 w-50 mx-auto text-center">
          <h2 className="mb-1">
            OUR<span className="theme">VISION</span>
          </h2>
          <p>
            To power the in-person connections that move people, ideas and
            businesses forward.
          </p>
        </div>

        <div className="why-us">
          <div className="why-us-box">
            <div className="row ">
              {data.map((info) => {
                return (
                  <div key={info.id} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                      <div className="why-us-content">
                        <div className="why-us-icon mb-1">
                          <i className="icon-flag theme"></i>
                        </div>
                        <h4>
                          <a href="about.html">{info.title}</a>
                        </h4>
                        <p className="mb-2">{info.description}</p>
                        <p className="mb-0 theme">{info.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
