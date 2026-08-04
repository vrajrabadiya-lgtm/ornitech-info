import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { PORTFOLIO_DATA } from "@/lib/site-data"
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Our Success Stories
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Featured Projects & <span className="text-brand">Case Studies</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore how we helped startups and enterprise leaders ship mission-critical web applications, mobile platforms, and AI tools.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
            {PORTFOLIO_DATA.map((project, idx) => (
              <div
                key={project.id}
                className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 lg:grid-cols-12 lg:items-center lg:p-8"
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Client: <span className="text-foreground">{project.client}</span>
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded bg-brand/5 border border-brand/20 px-2.5 py-0.5 text-[11px] font-medium text-brand">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                    >
                      Request Similar Project Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
