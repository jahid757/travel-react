import React from 'react';
import logo from '../../assets/images/logo.webp'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        //   style="background-image: url(images/background_pattern.png);"
        <footer className="pt-20 pb-4">
        {/* style="background-image: url(images/shape8.png);" */}
        <div className="section-shape top-0" ></div>
       
        <div className="footer-upper pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
                        <div className="footer-about">
                            <img src={logo} alt="logo"/>
                            <p className="mt-3 mb-3 white">
                                You said. We heard. Move smooth.
                            </p>
                            <ul>
                                <li className="white"><strong>PO Box:</strong> (0124)4384563</li>
                                <li className="white"><strong>Location:</strong> Unit - 224, JMD Megapolis, Sohna Road, Sec - 48 Gurgaon
                                    Haryana, India 122001</li>
                                <li className="white"><strong>Email:</strong> info@travelfreeby.com</li>
                                <li className="white"><strong>Website:</strong> www.Travelfreeby.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="footer-links">
                            <h3 className="white">Quick link</h3>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
                                <li><Link to="/">Refund Policy</Link></li>
                                <li><Link to="/cookie">Cookie</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="footer-links">
                            <h3 className="white">Newsletter</h3>
                            <div className="newsletter-form ">
                                <p className="mb-3">Jin our community of over 200,000 global readers who receives emails filled with news, promotions, and other good stuff.</p>
                                <form action="#" method="get" acceptCharset="utf-8" className="border-0 d-flex align-items-center">
                                    <input type="text" placeholder="Email Address"/>
                                    <button className="nir-btn ms-2">Subscribe</button>
                                </form>
                            </div> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-payment">
            <div className="container">
                <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
                    <div className="col-lg-8 footer-payment-nav mb-4">
                        <ul className="">
                            <li className="me-2">We Support:</li>
                            <li className="me-2"><i className="fab fa-cc-mastercard fs-4"></i></li>
                            <li className="me-2"><i className="fab fa-cc-paypal fs-4"></i></li>
                            <li className="me-2"><i className="fab fa-cc-stripe fs-4"></i></li>
                            <li className="me-2"><i className="fab fa-cc-visa fs-4"></i></li>
                            <li className="me-2"><i className="fab fa-cc-discover fs-4"></i></li>
                        </ul>
                    </div>
                    
                </div>    
            </div>
        </div>

        <div className="footer-copyright">
            <div className="container">
                <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                    <div className="copyright-text">
                        <p className="m-0 white">Copyright © 2022 Travel Freeby - A Product of EBMV LLP - All Rights Reserved.</p>
                    </div>
                    <div className="social-links">
                        <ul>  
                            <li><Link to="https://facebook.com"><i className="fab fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true"></i></Link></li>
                            <li><Link to="https://linkedin.com"><i className="fab fa-linkedin" aria-hidden="true"></i></Link></li>
                            <li><Link to="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </div>    
            </div>
        </div>
        <div id="particles-js"></div>
    </footer>
    );
}

export default Footer;
