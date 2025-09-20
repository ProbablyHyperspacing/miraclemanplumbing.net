import { HeroSection } from '@/components/sections/hero-section'
import { ServicesOverview } from '@/components/sections/services-overview'
import { CallToActionBar } from '@/components/sections/call-to-action-bar'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { AboutUs } from '@/components/sections/about-us'
import { OurServices } from '@/components/sections/our-services'
import { ExcellenceSection } from '@/components/sections/excellence-section'
import { ReviewsSection } from '@/components/sections/reviews-section'
import { RecentProjectsSection } from '@/components/sections/recent-projects-section'
import { SocialMediaSection } from '@/components/sections/social-media-section'
import { FAQSection } from '@/components/sections/faq-section'
import { FullSpectrumSection } from '@/components/sections/full-spectrum-section'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <CallToActionBar />
      <WhyChooseUs />
      <AboutUs />
      <OurServices />
      <CallToActionBar />
      <ExcellenceSection />
      <ReviewsSection />
      <RecentProjectsSection />
      <SocialMediaSection />
      <FAQSection />
      <FullSpectrumSection />
    </div>
  )
}