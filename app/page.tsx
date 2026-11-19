import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
// import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { CtaBand } from "@/components/cta-band"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { CaseStudies } from "@/components/case-studies"
import { TechStack } from "@/components/tech-stack"
// import { Blog } from "@/components/blog"
import { Testimonial } from "@/components/testimonial"
import { FounderSpotlight } from "@/components/founder-spotlight"
import { Faq } from "@/components/faq"
import { Collaborate } from "@/components/collaborate"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Ornitech — Best Software Development Company in Surat | Custom Web & Mobile Apps",
  description:
    "Looking for the best software company in Surat? Ornitech delivers world-class custom software development, mobile apps (iOS & Android), AI solutions, and web development. Contact us for a free quote.",
  keywords: [
    "best software company in surat",
    "software development company in surat",
    "top IT company in surat",
    "web development company in surat",
    "mobile app development in surat",
    "software company near me surat",
    "IT services surat gujarat",
    "hire software developers in surat",
    "custom software development company india",
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Services />
        <CtaBand />
        <Process />
        <Industries />
        <CaseStudies />
        <TechStack />
        {/* <Blog /> */}
        <Testimonial />
        <FounderSpotlight />
        <Faq />
        <Collaborate />
      </main>
      <SiteFooter />
    </div>
  )
}
