import React from 'react';
import blogData from './AboutSectionData.json';
import importImages from '../../utils/importImages';
function AboutSection() {
  return (
    <section className="ttm-row about-section ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            {/* <!-- section title --> */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>READ OUR BLOG</h3>
                <h2 className="title mb-0">We Provide Special Service For Patients</h2>
              </div>
            </div>
            {/* <!-- section title end --> */}
          </div>
        </div>
        <div className="row slick_slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":false, "infinite":true, "responsive": [{"breakpoint":1100,"settings":{"slidesToShow": 3}} , {"breakpoint":991,"settings":{"slidesToShow": 2}}, {"breakpoint":767,"settings":{"slidesToShow": 2}}, {"breakpoint":575,"settings":{"slidesToShow": 1}}]}'>
          {blogData.map((blog) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={blog.id}>
              <div className="featured-imagebox featured-imagebox-blog style2 m-15">
                <div className="featured-thumbnail"> 
                  <img className="img-fluid" src={importImages(blog.image)} width="740" height="568" alt={blog.title}/> 
                  <div className="post-meta">
                    <span className="ttm-meta-line">{blog.date}</span>
                  </div>
                </div>
                <div className="featured-content featured-content-blog align-self-center">
                  <div className="featured-title">
                    <h3><a href={blog.link}>{blog.title}</a></h3>
                  </div>
                  <div className="post-meta">
                    <span className="ttm-meta-line byline"><i className="fa fa-user-o"></i>&nbsp;&nbsp;{blog.author}</span>
                    <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                    <span className="ttm-meta-line byline"><i className="fa fa-folder-open-o"></i>&nbsp;&nbsp;{blog.category}</span>
                  </div>
                  <div className="post-footer">
                    <div className="post-footer-link">
                      <a className="ttm-btn btn-inline d-block ttm-btn-size-md ttm-icon-btn-right" href={blog.link}>Read More<i className="icon-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
