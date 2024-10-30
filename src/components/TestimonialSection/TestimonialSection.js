import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/swiper-bundle.min.css';
import importImages from '../../utils/importImages';
import testimonialData from './TestimonialSectionData.json';
function TestimonialSection() {
  return (
    <section className="ttm-row zero_padding-section testimonial-section-homepage clearfix">
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-5 col-lg-12">
            <div className="box-shadow ttm-bg ttm-col-bgcolor-yes ttm-left-span ttm-bgcolor-skincolor spacing-21">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="layer-content">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <!-- section title --> */}
                    <div className="section-title mb-18">
                      <div className="title-header">
                        <h3 className="ttm-textcolor-white">{testimonialData.sectionData.subtitle}</h3>
                        <h2 className="title">{testimonialData.sectionData.title}</h2>
                      </div>
                    </div>
                    {/* <!-- section title end --> */}
                  </div>
                </div>
                <div className="ttm-horizontal_sep mt-5"></div>
                <div className="featured-icon-box icon-align-before-content style20">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-white">
                      <i className="flaticon flaticon-support"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-desc">
                      <p>If you have any questions or need help contact<br /> with our team, or call<a href="#"><span> (003) 123 456 7890 </span></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 pt-60 res-1199-pt-0">
            <div className="box-shadow ttm-bg ttm-col-bgimage-yes ttm-right-span col-bg-img-eleven spacing-22">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer ttm-bgcolor-darkgrey"></div>
              <div className="layer-content">
                {/* Swiper component */}
                <Swiper
                  slidesPerView={1}
                  className="testimonial-slider"
                >
                  {testimonialData.testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonials style5">
                      <div className="testimonial-content">
                        <div className="row">
                          <div className="col-md-3 align-self-center">
                            <div className="testimonial-bottom">
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">
                                  <img className="img-fluid" src={importImages(testimonial.image)} alt="testimonial-img" width="80" height="80" />
                                </div>
                              </div>
                              <div className="testimonial-caption">
                                <h3>{testimonial.name}</h3>
                                <label>{testimonial.role}</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9 res-767-pt-20 res-767-pr-15">
                            <div className="testimonial-desc">
                              <blockquote className="testimonial-text">{testimonial.text}</blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
