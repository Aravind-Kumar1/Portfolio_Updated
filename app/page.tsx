import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import FeaturedProjects from "@/components/sections/featured-projects"
import Testimonials from "@/components/sections/testimonials"
import ContactPreview from "@/components/sections/contact-preview"
import Uniqueness from "@/components/sections/uniqueness";
import MyServices from "@/components/sections/myservices";
import CTASection from "@/components/sections/ctasection";
import PortfolioLayout from "@/components/sections/portfoliolayout ";
import PremiumPortfolio from "@/components/sections/portfoliolayout ";
import CreativeAboutSection from "@/components/sections/featured-projects";
import GlowText from "@/components/sections/glowtext";


export default function HomePage() {
  return (
      <main className="overflow-hidden">
          <Hero/>
          {/*<Services/>*/}
          <CreativeAboutSection/>

          <MyServices/>

              <CTASection
                  labelText="Innovate with Ease"
                  heroText="I create responsive websites and designs that drive growth, with expertise in mobile apps for seamless experiences."
              />
          {/*<AnimatedTextReveal/>*/}
          <Uniqueness/>
          <PremiumPortfolio/>
          <Testimonials/>
          {/*<GlowText/>*/}


      </main>
  )
}
