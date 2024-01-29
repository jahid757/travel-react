import React, { useEffect, useState } from 'react';
import { getHolidays } from '../../api-loading';

const KnowUs = () => {
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
        <section className="about-us p-0">
        <div className="container">
            <div className="about-image-box">
                <div className="row d-flex align-items-center justify-content-between">
                    
                    <div className="col-lg-12 mb-4 ps-lg-4">
                        <div className="about-content text-center text-lg-start mb-4 mt-10">
                            <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                            <h2>{data.know_us_title}</h2>
                            <p className="border-b mb-2 pb-2">{data.know_us_description}</p>
                            <div className="about-listing">
                                <ul className="d-flex justify-content-between">
                                    <li><i className="icon-location-pin theme"></i> Tour Guide</li>
                                    <li><i className="icon-briefcase theme"></i> Friendly Price</li>
                                    <li><i className="icon-folder theme"></i> Reliable Tour Package</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="white-overlay"></div>
    </section>
    );
}

export default KnowUs;
