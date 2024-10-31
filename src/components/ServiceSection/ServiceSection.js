import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Ensure you import Swiper styles
import servicesData from '../../data/ServiceSectionData.json';
import importImages from '../../utils/importImages';

function ServiceSection() {
  return (
    <section className="ttm-row services-section ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            {/* <!-- section title --> */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>{servicesData.sectionData.subtitle}</h3>
                <h2 className="title">{servicesData.sectionData.title}</h2>
              </div>
            </div>
            {/* <!-- section title end --> */}
          </div>
        </div>
        {/* Swiper for services */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
        //   breakpoints={{
        //     1020: {
        //       slidesPerView: 3,
        //     },
        //     768: {
        //       slidesPerView: 3,
        //     },
        //     575: {
        //       slidesPerView: 1,
        //     },
        //   }}
          className="services-slider"
        >
          {servicesData.services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="featured-icon-box icon-align-top-content style1">
                <div className="featured-icon">
                  <img className="img-fluid" src={importImages(service.icon)} width="85" height="85" alt="" />
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3><a href={service.link}>{service.title}</a></h3>
                  </div>
                  <div className="featured-desc">
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="fetured-bottom">
                  <a href={service.link} className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-lg">
                    <i className="flaticon flaticon-exit"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServiceSection;
