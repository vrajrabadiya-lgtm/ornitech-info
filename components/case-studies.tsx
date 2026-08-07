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
    <section ref={ref as React.RefObject<HTMLElement>} className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      {/* Ambient liquid background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute -left-24 top-1/4 h-[450px] w-[450px] opacity-60" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-0 top-0 h-[400px] w-[400px] opacity-65" />
      </div>

      <div className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
        <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
          Proven Impact
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-slate-900" style={{ letterSpacing: "-0.03em" }}>
          Our Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Case Studies</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Real products, real outcomes. A look at how we turn briefs into shipped, measurable results.
        </p>
      </div>

      <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${filter === f
                ? "glass-chip text-blue-600 scale-105 shadow-md shadow-blue-500/15 border-white"
                : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="relative mt-10 grid gap-5 md:grid-cols-2">
        {visible.map((c, i) => (
          <article
            key={c.title}
            className="glass-card animate-scale-in group overflow-hidden rounded-[2.2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 border border-white"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-50/60 to-white/40">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-slate-200/60 shadow-sm">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <span className="glass-chip rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 border border-blue-100 uppercase">
                {c.tag}
              </span>
              <h3 className="mt-3 text-2xl font-black text-slate-900">{c.title}</h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">{c.body}</p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
              >
                See case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="glass-chip inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:gap-3 hover:text-blue-600 border border-slate-200/80 shadow-md shadow-slate-200/40"
        >
          See all case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
