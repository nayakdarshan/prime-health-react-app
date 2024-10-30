import React from 'react'

function ConsultantSection() {
  return (
    <section class="ttm-row consultant-section bg-img2 ttm-bgcolor-dark ttm-textcolor-white ttm-bg ttm-bgimage-yes clearfix">
                <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                <div class="container">
                    <div class="row row-title">
                        <div class="col-lg-12 m-auto">
                            {/* <!-- section title --> */}
                            <div class="section-title title-style-center_text style2">
                                <div class="title-header">
                                    <h3>Choose a telehealth service</h3>
                                    <h2 class="title"><span>Talk to a doctor now</span> and get your meds delivered straight to <span>your door!</span></h2>
                                </div>
                            </div>
                            {/* <!-- section title end --> */}
                            <div class="consutant-doc-info d-sm-flex justify-content-center align-items-center">
                                <div class="pr-30 res-575-pr-0 text-center">
                                    <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mt-10" href="#" tabindex="0">See a doctor now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default ConsultantSection
