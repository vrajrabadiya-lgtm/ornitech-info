import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientsMarquee } from "@/components/clients-marquee"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { CtaBand } from "@/components/cta-band"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { CaseStudies } from "@/components/case-studies"
import { TechStack } from "@/components/tech-stack"
import { Blog } from "@/components/blog"
import { Testimonial } from "@/components/testimonial"
import { Faq } from "@/components/faq"
import { Collaborate } from "@/components/collaborate"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ClientsMarquee />
        <Stats />
        <Services />
        <CtaBand />
        <Process />
        <Industries />
        <CaseStudies />
        <TechStack />
        <Blog />
        <Testimonial />
        <Faq />
        <Collaborate />
      </main>
      <SiteFooter />
    </div>
  )
}
