import React, { useEffect, useState } from 'react';
// import img from '../../assets/images/trending4.jpg'
import { getHolidays } from '../../api-loading';
import { Link } from 'react-router-dom';

const TourPackage = () => {
    const [data, setData] = useState({
        destination: [],
        tour_exclusion: [],
        tour_packages:[]
      });
      const callApi = async () => {
        const apiUrl = await getHolidays();
        setData(apiUrl);
      };
    
      useEffect(() => {
        callApi();
      }, []);

    return (
        <section className="trending p-0">
        <div className="container">
            <div className="section-title text-center w-75 mx-auto mb-6">
                <h4 className="mb-1 theme1">Top Pick</h4>
                <h2 className="mb-1">{data.tour_packages_title} </h2>
                <p>{data.tour_packages_description}</p>
            </div>
            <div className="trend-box">
                <div className="row justify-content-center">
                    

                    {
                        data.tour_packages.map((item) => {
                            return(
                                <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 mb-4 h-100">
                        <div className="trend-item rounded box-shadow">
                            <div className="trend-image position-relative">
                                {/* <img src="images/trending/trending2.jpg" alt="image" className=""/> */}
                                <img src={item.grid_banner} alt="" />
                                <div className="color-overlay"></div>
                            </div>
                            <div className="trend-content p-4 pt-5 position-relative">
                                <div className="trend-meta bg-theme white px-3 py-2 rounded">
                                    <div className="entry-author">
                                        <i className="icon-calendar"></i>
                                        <span className="fw-bold"> {item.duration} Days Tours</span>
                                    </div>
                                </div>
                                <h5 className="theme mb-1"><i className="flaticon-location-pin"></i> {item.country_name}</h5>
                                <h3 className="mb-1"><Link to={`/tour-single/${item.id}`}>{item.tour_title}</Link></h3>
                                <div className="rating-main d-flex align-items-center pb-2">
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>
                                    <span className="ms-2">(12)</span>
                                </div>
                                <p className=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                                <div className="entry-meta">
                                    <div className="entry-author d-flex align-items-center">
                                        <p className="mb-0"><span className="theme fw-bold fs-5"> ${item.package_price}.00</span> | Per person</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }


                    
                    
                    <div className="col-lg-12 text-center">
                        <a href="tour-grid.html" className="nir-btn">View All Packages</a>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    );
}

export default TourPackage;
