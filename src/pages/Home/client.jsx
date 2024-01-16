import React, { useState } from 'react';
import affle from '../../assets/images/client/affle.png'
import digi from '../../assets/images/client/digi_logo.png'
import vitamin from '../../assets/images/client/vitamin.png'
import iotech from '../../assets/images/client/iotech.png'




const Client = () => {
    const [data,setData] = useState(
        {title:"Explore Travel",subtitle:"Effective Travel and Expense Management.",
        logos:[
            {url:''},
            {url:''},
            {url:''},
            {url:''},
            {url:''},
        ]
    },
      )

    return (
        <section className="our-partner pt-3 pb-0">
        <div className="container">
            <div className="section-title mb-6 w-75 mx-auto text-center">
                <h4 className="mb-1 theme1">Our clients</h4>
                <h2 className="mb-1">Our Awesome <span className="theme">clients</span></h2>
                <p></p>
            </div>
            <div className="row align-items-center partner-in partner-slider">
                <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                    <div className="partner-item p-4 py-2  ">
                        <img src={affle} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                    <div className="partner-item p-4 py-2  ">
                    <img src={digi} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                    <div className="partner-item p-4 py-2  ">
                    <img src={vitamin} alt=""/>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 d-flex align-items-center justify-content-center">
                    <div className="partner-item p-4 py-2  ">
                    <img src={iotech} alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
}

export default Client;
