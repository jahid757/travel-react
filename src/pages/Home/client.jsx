import React, { useEffect, useState } from "react";
// import affle from "../../assets/images/client/affle.png";
// import digi from "../../assets/images/client/digi_logo.png";
// import vitamin from "../../assets/images/client/vitamin.png";
// import iotech from "../../assets/images/client/iotech.png";
import { getHome } from "../../api-loading";

const Client = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const apiUrl = await getHome();
    setData(apiUrl.our_awesome_client);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="our-partner pt-3 pb-0">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">Our clients</h4>
          <h2 className="mb-1">
            Our Awesome <span className="theme">clients</span>
          </h2>
          <p></p>
        </div>
        <div className="row align-items-center partner-in partner-slider">
          {data.map((client) => {
            return (
              <div key={client.id} className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                <div className="partner-item p-4 py-2  ">
                  <img src={client.logo} alt={client.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Client;
