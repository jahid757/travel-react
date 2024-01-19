import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHome } from "../../api-loading";

const Feature = () => {
  const [data, setData] = useState({ 
    title: "Hoist Your Travel Management With Travel Freeby",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." ,
});
const [features_data,setFeatures_data] = useState([
  {
    title:'',
    sub_title:'',
    description:'',
    feature_review:''
  },
  {
    title:'',
    sub_title:'',
    description:'',
    feature_review:''
  },
  {
    title:'',
    sub_title:'',
    description:'',
    feature_review:''
  },
  {
    title:'',
    sub_title:'',
    description:'',
    feature_review:''
  },
])


const callApi = async () => {
  const apiUrl = await getHome();
  setData(apiUrl.core_features);
  setFeatures_data(apiUrl.core_features_detail);
};

useEffect(() => {
  callApi();
}, []);

  return (
    // <section className="about-us pb-6 pt-10" style="background-image:url(images/shape4.png); background-position:center;">
    <section className="about-us pb-6 pt-10">
      <div className="container">
        <div className="section-title mb-6 w-50 mx-auto text-center">
          <h4 className="mb-1 theme1">Core Features</h4>
          <h2 className="mb-1">{data.title}</h2>
          <p>{data.description}</p>
        </div>

        <div className="why-us">
          <div className="why-us-box">
            <div className="row">

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                  <div className="why-us-content">
                    <div className="why-us-icon mb-1">
                      <i className="icon-flag theme"></i>
                    </div>
                    <h4>
                      <Link to="/about">{features_data[0].title}</Link>
                    </h4>
                    <p className="mb-2">{features_data[0].description}</p>
                    <p className="mb-0 theme">{features_data[0].feature_review} reviews</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                  <div className="why-us-content">
                    <div className="why-us-icon mb-1">
                      <i className="icon-location-pin theme"></i>
                    </div>
                    <h4>
                      <Link to="/about">{features_data[1].title}</Link>
                    </h4>
                    <p className="mb-2">{features_data[1].description}</p>
                    <p className="mb-0 theme">{features_data[1].feature_review} reviews</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                  <div className="why-us-content">
                    <div className="why-us-icon mb-1">
                      <i className="icon-directions theme"></i>
                    </div>
                    <h4>
                      <Link to="/about">{features_data[2].title}</Link>
                    </h4>
                    <p className="mb-2">{features_data[2].description}</p>
                    <p className="mb-0 theme">{features_data[2].feature_review} reviews</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                  <div className="why-us-content">
                    <div className="why-us-icon mb-1">
                      <i className="icon-compass theme"></i>
                    </div>
                    <h4>
                      <Link to="/about">{features_data[3].title}</Link>
                    </h4>
                    <p className="mb-2">{features_data[3].description}</p>
                    <p className="mb-0 theme">{features_data[3].feature_review} reviews</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="white-overlay"></div>
    </section>
  );
};

export default Feature;
