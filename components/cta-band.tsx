"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CtaBand() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-20 bg-white">
      {/* Liquid background fluid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      </div>

      <div className={`relative mx-auto max-w-4xl px-5 text-center lg:px-8 transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
        <div className="glass-card rounded-[2.5rem] px-8 py-14 lg:px-14 shadow-2xl shadow-slate-200/50 border border-white">
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm mb-4">
            Build With Confidence
          </span>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl text-slate-900">
            Ornitech is your destination for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">expert IT solutions</span> and product engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Let&apos;s discuss your project to see how we can help you achieve your business goals.
          </p>
          <a
            href="#collaborate"
            className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:gap-3 hover:bg-blue-700 hover:shadow-blue-600/35 mt-8"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
