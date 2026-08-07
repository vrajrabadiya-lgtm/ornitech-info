"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CtaBand() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-24">
      {/* Liquid background fluid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float-slow absolute -right-24 -top-24 h-[550px] w-[550px] opacity-70" />
        <div className="liquid-orb-sky animate-liquid-float absolute -left-24 bottom-0 h-[480px] w-[480px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`${inView ? "animate-blur-in" : "opacity-0"}`}>
          <div className="glass-card rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-20 shadow-2xl shadow-slate-200/50 border border-white">
            <div className="mx-auto max-w-3xl text-center">
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
                <Sparkles className="h-3 w-3" /> Build With Confidence
              </span>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl text-slate-900" style={{ letterSpacing: "-0.03em" }}>
                Ornitech is your destination for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  expert IT solutions
                </span>{" "}
                and product engineering.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Let&apos;s discuss your project to see how we can help you achieve your business goals.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:gap-3 hover:bg-blue-700 hover:shadow-blue-600/35"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="glass-chip inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-slate-800 transition-all hover:text-blue-600 hover:gap-3 border border-slate-200/80"
                >
                  View services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
