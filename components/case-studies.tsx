"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const FILTERS = ["All", "Mobile App", "Website", "SaaS Products", "CRM / ERP", "Logo Design"]

const CASES = [
  {
    tag: "HEALTHCARE INDUSTRY",
    category: "Mobile App",
    title: "HealthBridge Connect",
    body: "A patient-provider app unifying appointments, records, and secure messaging in one HIPAA-ready experience.",
    image: "/case-studies/healthcare-app.png",
    tint: "bg-emerald-50",
  },
  {
    tag: "SAAS INDUSTRY",
    category: "SaaS Products",
    title: "TextFlow Manager",
    body: "A team messaging platform that cut response times by 38% with smart routing and a refreshed inbox experience.",
    image: "/case-studies/saas-app.png",
    tint: "bg-rose-50",
  },
]

export function CaseStudies() {
  const [filter, setFilter] = useState("All")
  const { ref, inView } = useInView(0.1)
  const visible = CASES.filter((c) => filter === "All" || c.category === filter)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Our Work <span className="text-brand">Case Studies</span>
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Real products, real outcomes. A look at how we turn briefs into shipped, measurable results.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              filter === f
                ? "bg-brand text-brand-foreground scale-105 shadow-md shadow-brand/20"
                : "border border-border text-muted-foreground hover:border-brand hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((c, i) => (
          <article
            key={c.title}
            className="animate-scale-in group overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`p-5 ${c.tint}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="text-[11px] font-semibold tracking-widest text-brand">{c.tag}</p>
              <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
              <Link
                href="/portfolio"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
              >
                See case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand hover:text-brand hover:gap-3"
        >
          See our case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
