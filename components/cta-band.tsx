"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CtaBand() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-muted/50 py-20">
      <div className={`mx-auto max-w-3xl px-5 text-center lg:px-8 transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
          Ornitech is your destination for <span className="text-brand">expert IT solutions</span> and services.
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Let&apos;s discuss your project to see how we can help you achieve your business goals.
        </p>
        <a
          href="#collaborate"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand/90 hover:gap-3 hover:shadow-lg hover:shadow-brand/30"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
