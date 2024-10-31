import React from 'react'
import welcomeSectionData from '../../data/WelcomeSectionData.json';

const data = welcomeSectionData;

function WelcomeSection() {
  return (
    <section className="ttm-row welcome-section ttm-bgcolor-grey clearfix d-none">
      <div className="container-fluid">
        <div className="row plr15 res-1199-pl-0 res-1199-pr-0">
          {data.map((item, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={index}>
              <div className="featured-icon-box icon-align-before-content style19">
                <div className="featured-icon">
                  <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>
                      <a href={item.link} tabIndex="0">{item.title}</a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="featured-bottom">
                  <a className="" href={item.link} tabIndex="0">
                    <i className="fa fa-arrow-top-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
