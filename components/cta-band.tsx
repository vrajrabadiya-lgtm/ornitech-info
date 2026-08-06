"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CtaBand() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative py-20">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-gradient animate-liquid-float absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-55" />
        <div className="liquid-gradient animate-liquid-float-slow absolute -left-20 top-0 h-[300px] w-[300px] opacity-35" />
        <div className="liquid-gradient animate-liquid-float absolute -right-20 bottom-0 h-[300px] w-[300px] opacity-35" />
      </div>

      <div className={`relative mx-auto max-w-3xl px-5 text-center lg:px-8 transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
        <div className="glass-card rounded-[2.5rem] px-8 py-12 lg:px-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl glass-text-primary">
            Ornitech is your destination for <span className="bg-gradient-to-r from-brand to-highlight bg-clip-text text-transparent">expert IT solutions</span> and services.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Let&apos;s discuss your project to see how we can help you achieve your business goals.
          </p>
          <a
            href="#collaborate"
            className="glass-card relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 hover:shadow-xl hover:shadow-brand/30"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
