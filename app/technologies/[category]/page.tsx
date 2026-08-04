import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { TECH_CATEGORIES } from "@/lib/site-data"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return TECH_CATEGORIES.map((c) => ({
    category: c.slug,
  }))
}

export default async function TechCategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params
  const cat = TECH_CATEGORIES.find((c) => c.slug === params.category)

  if (!cat) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative border-b border-border/50 bg-muted/20 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Technologies
            </Link>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {cat.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {cat.shortDesc}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                      <div>
                        <h2 className="font-bold text-foreground">{item.name}</h2>
                        {item.highlight && (
                          <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
                            Recommended
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/50 pt-4 flex items-center gap-2 text-xs text-brand font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> Production Ready
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
