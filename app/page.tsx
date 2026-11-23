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
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Software Development Company in Surat | Web, Mobile & AI",
  description:
    "Ornitech is a Surat software development company building custom web apps, mobile apps, business software and AI solutions for startups and growing businesses.",
  path: "/",
})

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
