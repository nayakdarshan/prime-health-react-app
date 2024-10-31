import React from 'react';
import skillData from '../../data/OurSkillSectionData.json';

function OurSkillSection() {
  return (
    <section className="ttm-row portfolio-experience-section ttm-bgcolor-darkgrey mt_50 res-991-mt-0 pb-65 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6">
                {/* <!-- section title --> */}
                <div className="section-title mb-0">
                  <div className="title-header">
                    <h3 className="ttm-textcolor-skincolor">OUR SKILLS</h3>
                    <h2 className="title">What Are They Saying About Our Services</h2>
                  </div>
                </div>
                {/* <!-- section title end --> */}
              </div>
              <div className="col-lg-6 col-md-6 align-self-center">
                <div className="d-flex justify-content-start justify-content-md-center ">
                  <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-boxed-view ttm-fid-view-lefticon style4 ttm-textcolor-white">
                    <div className="ttm-fid-icon-wrapper ttm-icon_element-color-skincolor">
                      <i className="flaticon flaticon-heart-7"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span className="numinate">{skillData.happyCustomers}</span>
                        <span className="ml_10">+</span>
                      </h4>
                      <h3 className="ttm-fid-title">Happy Customer</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="">
              {/* <!-- progress-bar --> */}
              <div className="pb-20 pt-15 res-991-pb-0">
                {skillData.skills.map((skill, index) => (
                  <div className="ttm-progress-bar style3 mb-35 res-991-mb-30" data-percent={`${skill.percent}%`} key={index}>
                    <div className="progress-bar-title">{skill.title}</div>
                    {/* <!-- progress-bar-title --> */}
                    <div className="progress-bar-inner">
                      <div className="progress-bar progress-bar-color-bar_skincolor" style={{ width: `${skill.percent}%` }}>
                      </div>
                    </div>
                    <div className="progress-bar-percent" data-percentage={skill.percent}></div>
                    {/* <!-- progress-bar-percent --> */}
                  </div>
                ))}
              </div>
              {/* <!-- progress-bar END --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSkillSection;
