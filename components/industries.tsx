"use client"

import Image from "next/image"
import { ArrowRight, Dumbbell, HeartPulse, Landmark, ShoppingBag } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const INDUSTRIES = [
  { name: "Fitness & Wellness", icon: Dumbbell, image: "/industries/fitness.png" },
  { name: "Healthcare & MedTech", icon: HeartPulse, image: "/industries/healthcare.png" },
  { name: "Fintech & Banking", icon: Landmark, image: "/industries/fintech.png" },
  { name: "E-commerce & Retail", icon: ShoppingBag, image: "/industries/retail.png" },
]

export function Industries() {
  const { ref, inView } = useInView(0.15)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Industries <span className="text-brand">We Serve</span>
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Deep domain experience across the sectors where great software makes the biggest difference.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind, i) => {
          const Icon = ind.icon
          return (
            <div
              key={ind.name}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border transition-all duration-700 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-2 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Image
                src={ind.image || "/placeholder.svg"}
                alt={ind.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-base font-semibold text-ink-foreground">{ind.name}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className={`mt-10 flex justify-center transition-all duration-700 delay-500 ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <a
          href="#collaborate"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand hover:text-brand hover:gap-3"
        >
          See our industries <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
