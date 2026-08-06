"use client"

import { useState, useRef } from "react"
import { Plus, Minus } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const FAQS = [
  { q: "What services does Ornitech offer?", a: "We cover the full product lifecycle: mobile app development, web and software development, QA & testing, UI/UX design, data analytics, and cloud/DevOps. You can engage us for a single phase or end-to-end delivery." },
  { q: "How do you price a project?", a: "We offer fixed-price, time-and-materials, and dedicated-team models. After a short discovery call we recommend the model that fits your scope, timeline, and budget, then share a transparent estimate." },
  { q: "How long does a typical project take?", a: "Timelines depend on scope, but most MVPs ship in 8 to 16 weeks. We work in iterative sprints so you see working software early and often rather than waiting until the end." },
  { q: "Do you provide support after launch?", a: "Yes. We offer ongoing maintenance, monitoring, and enhancement plans with clear SLAs so your product stays secure, fast, and up to date long after launch." },
  { q: "Will I own the code and intellectual property?", a: "Absolutely. You retain full ownership of all source code, designs, and intellectual property produced during our engagement." },
]

function FaqItem({ f, isOpen, onToggle, delay }: { f: typeof FAQS[0]; isOpen: boolean; onToggle: () => void; delay: number }) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="animate-fade-up glass-card rounded-2xl overflow-hidden transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-brand" : "text-foreground"}`}>
          {f.q}
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-brand text-white" : "glass-chip text-muted-foreground"}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 200}px` : "0px",
          transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          overflow: "hidden",
        }}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden py-24">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[350px] w-[350px] liquid-gradient opacity-40 animate-liquid-float" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] liquid-gradient opacity-35 animate-liquid-float-slow" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              f={f}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
              delay={inView ? i * 70 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
