import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { INDUSTRIES_DATA } from "@/lib/site-data"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((i) => ({
    slug: i.slug,
  }))
}

export default async function IndustryDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const ind = INDUSTRIES_DATA.find((i) => i.slug === params.slug)

  if (!ind) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative border-b border-border/50 bg-muted/20 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Industries
            </Link>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {ind.title} <span className="text-brand">Software Solutions</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {ind.fullDesc}
            </p>

            {ind.stats && (
              <div className="mt-10 flex flex-wrap gap-8 border-t border-border/60 pt-6">
                {ind.stats.map((s, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-extrabold text-brand sm:text-3xl">{s.value}</p>
                    <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Key <span className="text-brand">Solutions We Build</span> for {ind.title}
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {ind.solutions.map((sol, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                  <CheckCircle2 className="h-6 w-6 text-brand shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">{sol}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Custom tailored architecture built with security compliance and smooth user experiences.
                    </p>
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
