import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { SERVICES_DATA } from "@/lib/site-data"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <main>
        {/* Services Hero */}
        <section className="relative overflow-hidden border-b border-border/50 bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              <Sparkles className="h-4 w-4" /> Comprehensive Software Engineering
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Software & AI Services Engineered to <span className="text-brand">Scale Your Business</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From web platforms and mobile apps to custom AI integration and dedicated teams, Ornitech provides end-to-end engineering excellence for startups and enterprises.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_DATA.map((service) => (
                <div
                  key={service.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-brand/50 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      {service.badge && (
                        <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-foreground group-hover:text-brand">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDesc}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-border/50 pt-4">
                      {service.features.slice(0, 3).map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:underline"
                    >
                      Explore {service.title} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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
