"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dumbbell, HeartPulse, Landmark, ShoppingBag } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const INDUSTRIES = [
  { name: "Fitness & Wellness", icon: Dumbbell, image: "/industries/fitness.png", slug: "fitness-wellness", accent: "from-teal-400/20 to-emerald-400/10" },
  { name: "Healthcare & MedTech", icon: HeartPulse, image: "/industries/healthcare.png", slug: "healthcare-medtech", accent: "from-rose-400/20 to-pink-400/10" },
  { name: "Fintech & Banking", icon: Landmark, image: "/industries/fintech.png", slug: "fintech-banking", accent: "from-blue-400/20 to-indigo-400/10" },
  { name: "E-commerce & Retail", icon: ShoppingBag, image: "/industries/retail.png", slug: "ecommerce-retail", accent: "from-violet-400/20 to-purple-400/10" },
]

export function Industries() {
  const { ref, inView } = useInView(0.15)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden py-8 lg:py-12">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 liquid-gradient opacity-30 animate-liquid-float-slow" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <div>
            <span className="glass-chip inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand uppercase">
              Domain Expertise
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Industries We Serve
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground leading-relaxed">
              Deep vertical knowledge across the sectors where great software makes the biggest difference.
            </p>
          </div>
          <Link
            href="/industries"
            className="glass-chip inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:gap-3"
          >
            All industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Link
                key={ind.name}
                href={`/industries/${ind.slug}`}
              className={`group relative aspect-[3/4] w-[72vw] shrink-0 snap-start overflow-hidden rounded-3xl glass-hover transition-all duration-700 lg:w-auto ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={ind.image || "/placeholder.svg"}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Accent tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.accent} opacity-60`} />

                {/* Bottom glass label */}
                <div className="absolute inset-x-4 bottom-4">
                  <div className="glass rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{ind.name}</span>
                    </div>
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-muted-foreground transition-all group-hover:text-brand group-hover:gap-2">
                      Explore <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

