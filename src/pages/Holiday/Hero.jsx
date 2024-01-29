import React, { useEffect, useState } from "react";
import videoClip from '../../assets/video/tour.mp4'
import { getHolidays } from "../../api-loading";

const Hero = () => {

  const [data, setData] = useState({
    destination: [],
    tour_exclusion: [],
  });
  const callApi = async () => {
    const apiUrl = await getHolidays();
    setData(apiUrl);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="banner overflow-hidden banner-450">
      <div className="banner-main">
        <div className="banner-image">
          <div className="video-banner">
            <video autoPlay muted loop id="vid" className="w-100">
              <source src={videoClip} type="video/mp4" />
            </video>
          </div>
          <div className="dot-overlay"></div>
        </div>
        <div className="banner-content">
          <div className="entry-meta mb-0">
            <span className="entry-category">
              <a href="tour-grid.html" className="white">
                {" "}
                Travelin
              </a>
            </span>
          </div>
          <h1 className="mb-0">
            <a href="tour-single.html" className="white">
              {data.hero_title}
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
