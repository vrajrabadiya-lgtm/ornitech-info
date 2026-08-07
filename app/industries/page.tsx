import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { INDUSTRIES_DATA } from "@/lib/site-data"
import { ArrowRight, CheckCircle2, Building2, HeartPulse, Landmark, ShoppingBag, GraduationCap, Plane, Truck, Clapperboard, Dumbbell, UtensilsCrossed, Factory, Store } from "lucide-react"

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse, Landmark, ShoppingBag, GraduationCap, Plane, Building2, Truck, Clapperboard, Dumbbell, UtensilsCrossed, Factory, Store
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Domain Expertise
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Software Solutions Built for Your <span className="text-brand">Specific Industry</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We bring deep vertical knowledge across healthcare, fintech, e-commerce, logistics, and more to ensure your software is compliant, scalable, and tailored to user workflows.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES_DATA.map((ind) => {
                const Icon = ICON_MAP[ind.iconName] || Building2
                return (
                <div
                  key={ind.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/50 hover:shadow-lg"
                >
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-brand">
                      {ind.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {ind.shortDesc}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-border/50 pt-4">
                      {ind.solutions.map((sol, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:underline"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
