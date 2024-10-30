import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_prime.png';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Toggle after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="masthead" className={`header ${scrolled ? 'scrolled' : 'ttm-header-style-01'}`}>
      <div id="site-header-menu" className="site-header-menu">
        <div className="site-header-menu-inner sticky-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="site-branding">
                      <Link to="/" className="home-link" title="Prime Health" rel="home">
                        <img src={logo} className="img-fluid" alt="Prime Health Logo" style={{ minHeight: '80px' }} />
                      </Link>
                    </div>
                    <div className="site-menubar">
                      <div className="btn-show-menu-mobile menubar menubar--squeeze">
                        <span className="menubar-box">
                          <span className="menubar-inner"></span>
                        </span>
                      </div>
                      <nav className="main-menu menu-mobile" id="menu">
                        <ul className="menu">
                          <li className="mega-menu-item active">
                            <Link to="/consultation-type" className="mega-menu-link">Online Prescription</Link>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="#" className="mega-menu-link">Online Medical Certificate</Link>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="#" className="mega-menu-link">Specialist Doctor Referrals</Link>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="#" className="mega-menu-link">Pathology Referrals</Link>
                          </li>
                          <li className="bg_search_prime">
                            <i className="fa fa-2x fa-search"></i>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
