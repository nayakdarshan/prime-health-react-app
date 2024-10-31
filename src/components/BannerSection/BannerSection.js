import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerData from '../../data/BannerSectionData.json';
import importImages from '../../utils/importImages';
import { EffectFade, Navigation } from 'swiper/modules';

function BannerSection() {
  return (
    // <div>
      <Swiper
      spaceBetween={30}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade,Navigation]}
        autoplay={{ delay: 500 }}
        loop={true}
      >
        {bannerData.banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-section"
              effect={'fade'}
              modules={[EffectFade]}

              style={{ backgroundImage: `url(${importImages(banner.backgroundImage)})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}
            >
              {/* Slide content */}
              <div className="slide__content">
                <div className="container g-0 position-relative">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="d-block d-xl-flex flex-row justify-content-between">
                        <div className="slide__content--headings align-self-center">
                          {banner.slideIcon && (
                            <div className="slide-icon-img">
                              <img className="img-fluid d-inline-block" src={importImages(banner.slideIcon)} width="36" alt="slide-img" />
                              <span>{banner.subtitle}</span>
                              <span>Anytime, Anywhere</span>
                              <span>Within 15 Minutes</span>
                            </div>
                          )}
                          <h2 className="ttm-textcolor-white">{banner.title}</h2>
                          <div className="d-inline-block pt-30">
                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor border-radius-10" href={banner.buttonLink}>
                              <i className="fa fa-user-doctor"></i>&nbsp;{banner.buttonText}
                            </a>
                          </div>
                        </div>

                        {/* Testimonials Section */}
                        {banner.testimonial && (
                          <div className="d-lg-none d-xl-block align-self-center spacing-24">
                            <div className="testimonial-content">
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">
                                  <img className="img-fluid" src={importImages(banner.testimonial.image)} alt="testimonial-img" width="140" height="140" />
                                </div>
                              </div>
                              <div className="testimonial-caption">
                                <h3><a href="our-team.html">{banner.testimonial.name}</a></h3>
                                <label>{banner.testimonial.position}</label>
                                <br />
                                <label className="btn_make_btn"><a href="#">Make an Appointment</a></label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Featured Icons Section */}
              {banner.featuredIcons && (
                <div className="slide__content--headings">
                  <div className="d-sm-flex justify-content-center">
                    {banner.featuredIcons.map((icon, idx) => (
                      <div className="featured-icon-box featured-icon-box-homepage-slider" key={idx}>
                        <div className="featured-icon">
                          <img className="img-fluid" src={importImages(icon.icon)} alt="icon" width="30" height="30" />
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3><a href={icon.link}>{icon.title}</a></h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Team Members Section */}
              {banner.teamMembers && (
                <div>
                  {banner.teamMembers.map((member, idx) => (
                    <div className={`banner-slider-arrow-info arrow-info${idx + 1}`} key={idx}>
                      <div className="text-center">
                        <h3><a href={member.link}>{member.name}</a></h3>
                        <span>{member.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Additional Section for Last Banner */}
              {index === bannerData.banners.length - 1 && (
                <div className="d-inline-block pt-25">
                  {banner.buttonLinks.map((btn, idx) => (
                    <a className={`ttm-btn ttm-btn-size-md ttm-btn-shape-square ${idx === 0 ? 'ttm-btn-style-border' : 'ttm-btn-style-fill ttm-btn-color-skincolor'}`} href={btn.link} key={idx}>
                      {btn.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    // </div>
  );
}

export default BannerSection;
