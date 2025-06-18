import IntroTimeline from "@/components/sections/intro-timeline"
import FunFacts from "@/components/sections/fun-facts"
import Hobbies from "@/components/sections/hobbies"
import AboutMeHeroSection from "@/components/sections/aboutmeherosection";

import AchievementsSection from "@/components/sections/achievements-section";
import CTASection from "@/components/sections/ctasection";
import ContactPreview from "@/components/sections/contact-preview";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
        <div className="pt-20">
            <AboutMeHeroSection/>
            <IntroTimeline/>
            <div>
                <CTASection
                    labelText="Craft Smarter, Not Harder"
                    heroText="Building modern, responsive websites and apps tailored to your business needs."
                />
            </div>
            <AchievementsSection/>
            {/*<ContactPreview/>*/}
            {/*<FunFacts/>*/}
            {/*<Hobbies/>*/}
        </div>
    </main>
  )
}
