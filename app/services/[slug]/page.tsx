import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { SERVICES_DATA } from "@/lib/site-data"
import { ArrowLeft, CheckCircle2, ArrowRight, Layers, Cpu, Shield, Sparkles } from "lucide-react"

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({
    slug: s.slug,
  }))
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const service = SERVICES_DATA.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Service Hero */}
        <section className="relative border-b border-border/50 bg-muted/20 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Services
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                {service.badge && (
                  <span className="rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand">
                    {service.badge}
                  </span>
                )}
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.fullDesc}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
                  >
                    Discuss Your {service.title} Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-muted px-3 py-1.5 text-xs font-semibold text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Capabilities */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Key <span className="text-brand">Capabilities</span> & Deliverables
              </h2>
              <p className="mt-3 text-muted-foreground">
                What you get when you build your product with Ornitech.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand" />
                  <div>
                    <h3 className="font-bold text-foreground">{feature}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Built to industrial engineering standards with modern tooling and test coverage.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="border-t border-border/50 bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our <span className="text-brand">Process</span> for {service.title}
              </h2>
              <p className="mt-3 text-muted-foreground">
                Transparent sprint-based execution from requirements to post-launch maintenance.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
