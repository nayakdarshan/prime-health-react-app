import React from 'react';
import portfolioData from './PortfolioSectionData.json';
import importImages from '../../utils/importImages';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import { Navigation, Pagination } from 'swiper'; // Import required modules

function PortfolioSection() {
    return (
        <section className="ttm-row bottom_zero_padding-section clearfix">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-lg-5 m-auto">
                        {/* <!--section-title --> */}
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>WHAT WE DO</h3>
                                <h2 className="title">Quality Reliability With 100% Satisfaction</h2>
                            </div>
                        </div>
                        {/* <!--section-title-end --> */}
                    </div>
                </div>
                <div className="pt-20 res-991-pt-10">
                    <Swiper
                        slidesPerView={3} 
                        spaceBetween={30}
                        loop={true}
                        // breakpoints={{
                        //     1200: {
                        //         slidesPerView: 3,
                        //     },
                        //     1024: {
                        //         slidesPerView: 3,
                        //     },
                        //     991: {
                        //         slidesPerView: 2,
                        //     },
                        //     767: {
                        //         slidesPerView: 2,
                        //     },
                        //     575: {
                        //         slidesPerView: 1,
                        //     },
                        //     400: {
                        //         slidesPerView: 1,
                        //     },
                        // }}
                    >
                        {portfolioData.map(item => (
                            <SwiperSlide key={item.id}>
                                {/* <div className="col-lg-3 col-md-6 col-sm-12"> */}
                                    {/* <!-- featured-imagebox-portfolio --> */}
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        {/* <!-- ttm-box-view-overlay --> */}
                                        <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                            {/* <!-- featured-thumbnail --> */}
                                            <div className="featured-thumbnail">
                                                <img
                                                    className="img-fluid"
                                                    src={importImages(item.imgSrc)}
                                                    width="840"
                                                    height="840"
                                                    alt={item.alt}
                                                />
                                                <div className="ttm-media-link">
                                                    <a href={item.link} className="ttm_link">
                                                        <i className="fa fa-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <!-- ttm-box-view-overlay end--> */}
                                        </div>
                                        {/* <!-- featured-imagebox-portfolio end --> */}
                                    </div>
                                {/* </div> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
