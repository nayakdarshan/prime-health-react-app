import React from 'react';
// import './Footer.css';

function Footer() {
  return (
    <footer className="widget-footer ttm-textcolor-white clearfix">
      <div className="ttm-bgcolor-darkgrey">
        <div className="second-footer">
          <div className="container">
            <div className="row">
              {/* About Section */}
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget-widget_contact clearfix">
                  <h3 className="widget-title">About Prime Health</h3>
                  <div className="textwidget widget-text" style={{ fontWeight: 'normal' }}>
                    <p>
                      Get affordable healthcare on your terms, with quick access to qualified, Australian-registered telehealth doctors & health practitioners, 24/7, 365 days a year. No more searching for Doctor Near me – Prime connects you instantly.
                    </p>
                  </div>
                  <div className="social-icons pt-20">
                    <ul className="list-inline">
                      <li className="social-facebook">
                        <a href="#" rel="noopener noreferrer" aria-label="facebook" target="_blank">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a href="#" rel="noopener noreferrer" aria-label="linkedin" target="_blank">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="social-twitter">
                        <a href="#" rel="noopener noreferrer" aria-label="twitter" target="_blank">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="social-pinterest">
                        <a href="#" rel="noopener noreferrer" aria-label="pinterest" target="_blank">
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Footer Links Column 1 */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <ul className="menu-footer-service-link menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">For Doctors</a></li>
                    <li><a href="#">For Pharmacies</a></li>
                    <li><a href="#">In the News</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Footer Links Column 2 */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <ul className="menu-footer-service-link menu">
                    <li><a href="#">Telehealth Appointment</a></li>
                    <li><a href="#">Online Medical Certificates</a></li>
                    <li><a href="#">Online Prescriptions</a></li>
                    <li><a href="#">Specialist Referrals</a></li>
                    <li><a href="#">Mental Health</a></li>
                    <li><a href="#">Blood Test Request</a></li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget-widget_contact clearfix">
                  <h3 className="widget-title">Get In Touch</h3>
                  <ul className="widget_contact_wrapper">
                    <li>Mail: <a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                    <li>Fax: +123 456 7890</li>
                    <li>Street: 52 Ridge Road, City: Howard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Text */}
      <div className="bottom-footer-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="copyright">
                  <div className="d-sm-flex align-items-center justify-content-center">
                    <div>Copyright © 2024 <a href="#" className="ttm-textcolor-white">PrimeHealth</a>. All rights reserved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
