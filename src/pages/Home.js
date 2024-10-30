import React from 'react'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import InfoSection from '../components/InfoSection/InfoSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import ConsultantSection from '../components/ConsultantSection/ConsultantSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import HealthCureTypeSection from '../components/HealthCureTypeSection/HealthCureTypeSection'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import OurSkillSection from '../components/OurSkillSection/OurSkillSection'
import AboutSection from '../components/AboutSection/AboutSection'
import BannerSection from '../components/BannerSection/BannerSection'

function Home() {
  return (
    <div class="site-main">
            <BannerSection />
            {/* <!--welcome-section--> */}
                <WelcomeSection />
            {/* <!--welcome-section end--> */}

            {/* <!--our-info-section--> */}
                <InfoSection />
            {/* <!--our-info-section end--> */}

            {/* <!--service-section--> */}
                <ServiceSection />
            {/* <!--service-section end--> */}

            {/* <!--consultant-section--> */}
                <ConsultantSection />
            {/* <!--consultant-section--> */}

            {/* <!--testimonial-section--> */}
                <TestimonialSection />
            {/* <!--testimonial-section-end--> */}

            {/* <!--health-cure-type-section--> */}
                <HealthCureTypeSection />
            {/* <!--health-cure-type-section-end--> */}

            {/* <!-- portfolio-section--> */}
                <PortfolioSection />

            {/* <!-- portfolio-section end--> */}
            {/* <!-- skill-section-end--> */}
                <OurSkillSection />
            {/* <!-- skill-section-end--> */}

            {/* <!-- about-section--> */}
                <AboutSection />
            {/* <!-- about-section-end--> */}

        </div>
  )
}

export default Home
