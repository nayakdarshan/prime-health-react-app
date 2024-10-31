import React from 'react'
import data from '../../data/InfoSectionData.json';
import importImages from '../../utils/importImages';

function InfoSection() {
  return (
    <section className="ttm-row our-info-section clearfix">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="ttm_single_image-wrapper">
            <img className="img-fluid" src={importImages(data.images[0].src)} width={data.images[0].width} height={data.images[0].height} alt={data.images[0].alt} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="pl-30 pt-50 res-1199-pl-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <div className="title-header">
                    <h3>{data.sectionData.subtitle}</h3>
                    <h2 className="title">{data.sectionData.title}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt_5">
              <p>{data.sectionData.description}</p>
            </div>
            <div className="row">
              {data.services.map((service, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="featured-icon-box icon-align-before-content style8">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-size-md style1 ttm-icon_element-color-skincolor ttm-bgcolor-grey">
                        <i className={service.icon}></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="featured-desc">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ttm-horizontal_sep mt-40 mb-40 res-991-mt-30 res-991-mb-30"></div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="ttm_single_image-wrapper">
                  <img className="img-fluid" src={importImages(data.images[1].src)} width={data.images[1].width} height={data.images[1].height} alt={data.images[1].alt} />
                </div>
              </div>
              <div className="col-md-8 col-sm-8 align-self-center res-575-mt-20">
                <h3 className="mb-0">Need a doctor's consultation? Book a telehealth appointment instantly.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection
