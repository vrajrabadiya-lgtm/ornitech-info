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
      className="animate-fade-up glass-card rounded-[1.8rem] overflow-hidden transition-all duration-300 border border-white shadow-md shadow-slate-200/40"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`text-base font-extrabold transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
          {f.q}
        </span>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "glass-chip text-slate-500 border border-slate-200/80"}`}>
          {isOpen ? <Minus className="h-4 w-4 stroke-[2.5]" /> : <Plus className="h-4 w-4 stroke-[2.5]" />}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 200}px` : "0px",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "hidden",
        }}
      >
        <p className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100/80 pt-3">{f.a}</p>
      </div>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden py-24 bg-white">
      {/* Ambient liquid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-1/4 top-0 h-[380px] w-[380px] opacity-60" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-1/4 bottom-0 h-[340px] w-[340px] opacity-55" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="mt-10 space-y-4">
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
