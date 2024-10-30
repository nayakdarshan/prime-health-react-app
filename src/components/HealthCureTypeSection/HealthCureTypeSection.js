import React from 'react';
import clientData from './HealthCureTypeSectionData.json';
import importImages from '../../utils/importImages';

function HealthCureTypeSection() {
    
  return (
    <section className="ttm-row health-cure-type-section bg-layer-equal-height ttm-bgcolor-grey clearfix">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-heading">
            <h3 className="title font-size-26">{clientData.title}</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="spacing-2">
            <div className="row slick_slider mx-0" data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1100,"settings":{"slidesToShow": 5}} , {"breakpoint":768,"settings":{"slidesToShow": 3}}, {"breakpoint":575,"settings":{"slidesToShow": 2}}]}'>
              {clientData.clients.map((client, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="client-box">
                    <div className="client-thumbnail">
                      <img
                        className="img-fluid"
                        src={importImages(client.image)}
                        alt={client.alt}
                        width={client.width}
                        height={client.height}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HealthCureTypeSection
