import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { TECH_CATEGORIES } from "@/lib/site-data"
import { ArrowRight, Code, Server, Database, Smartphone, Cloud, Layout } from "lucide-react"

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Tech Hero */}
        <section className="relative overflow-hidden border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Battle-Tested Technology Stack
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Technologies We Use to <span className="text-brand">Build Modern Software</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We leverage modern frameworks, cloud-native infrastructure, scalable databases, and intuitive design tools to engineer resilient digital products.
            </p>
          </div>
        </section>

        {/* Tech Categories Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-16">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.slug} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{cat.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.shortDesc}</p>
                  </div>
                  <Link
                    href={`/technologies/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    View Category Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start gap-4 rounded-xl border border-border/60 bg-muted/20 p-4 transition-colors hover:border-brand/50"
                    >
                      <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                          {item.highlight && (
                            <span className="rounded bg-brand/10 px-1.5 py-0.5 text-[9px] font-bold text-brand">
                              Core
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
