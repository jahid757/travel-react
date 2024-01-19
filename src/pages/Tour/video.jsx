import React, { useEffect, useState } from 'react';
import { getTour } from '../../api-loading';

const Video = () => {

    const [data,setData] = useState({
        
    })
    const callApi = async () => {
        const apiUrl = await getTour();
        setData(apiUrl);
      };
    
      useEffect(() => {
        callApi();
      }, []);

    return (
        // style="background-image:url(images/section-bg1.png); background-position:center;"
        <section className="discount-action pt-0" >
        <div className="container">
            <div className="call-banner rounded pt-10 pb-14">
                <div className="call-banner-inner w-75 mx-auto text-center px-5">
                    <div className="trend-content-main">
                        <div className="trend-content mb-5 pb-2 px-5">
                            <h5 className="mb-1 theme">Love Where Your're Going</h5>
                            <h2><a href="detail-fullwidth.html">{data.video_section_title}</a></h2>
                            <p>{data.video_section_description}</p>
                        </div>
                        <div className="video-button text-center position-relative">
                             <div className="call-button text-center">
                                <button type="button" className="play-btn js-video-button" data-video-id="152879427" data-channel="vimeo">
                                    <i className="fa fa-play bg-blue"></i>
                                </button>
                            </div>
                            <div className="video-figure"></div>
                        </div>
                    </div>
                </div>
            </div>     
        </div>    
        <div className="white-overlay"></div>
        <div className="white-overlay"></div>
        {/*  style="background-image: url(images/shape6.png);" */}
        <div className="section-shape  top-inherit bottom-0"></div>
    </section>
    );
}

export default Video;
