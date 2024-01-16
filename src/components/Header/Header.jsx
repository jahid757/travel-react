import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'

const Header = () => {
    return (
        <header className="main_header_area">
       
        <div className="header_menu" id="header_menu">
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
                        
                        <div className="navbar-header">
                            <Link to={'/'} className="navbar-brand">
                                {/* <img src="images/logo.webp" alt="image"/> */}
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        
                        <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav" id="responsive-menu">
                                <li className="dropdown submenu active">
                                    <Link to="/" className="dropdown-toggle"  aria-haspopup="true" aria-expanded="false">Home</Link>
                                   
                                </li>

                                <li><Link to="/about">About Us</Link></li>

                                

                                

                                <li className="submenu dropdown">
                                    <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Holidays <i className="icon-arrow-down" aria-hidden="true"></i></Link> 
                                    <ul className="dropdown-menu">
                                        <li><Link to="/tour">Tour Grid</Link></li>
                                        <li><Link to="/tour-single/1">Tour Single </Link></li>
                                    </ul> 
                                </li>

                                <li className="submenu dropdown">
                                    <Link to={'/blog'} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog <i className="icon-arrow-down" aria-hidden="true"></i></Link> 
                                    <ul className="dropdown-menu">
                                        <li><Link to="/blog">Blog List</Link></li>
                                        <li><Link to="/blog-single/1">Blog Single</Link></li>
                                    </ul> 
                                </li>
                                <li className="search-main"><a href="#search1" className="mt_search"><i className="fa fa-search"></i></a></li>
                            </ul>
                        </div>    
                        <div className="register-login">
                            <a href="https://online.travelfreeby.com/Home/" className="nir-btn white text-uppercase">Move Onboard</a>
                        </div> 

                    </div>
                </div>
            </nav>
        </div>
    </header>
    );
}

export default Header;
