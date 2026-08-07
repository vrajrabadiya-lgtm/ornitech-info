"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const STATS = [
  { kicker: "POWERING DIGITAL EXCELLENCE", value: 100, suffix: "+", label: "Tech Experts" },
  { kicker: "CRAFTING WINNING SOLUTIONS", value: 612, suffix: "+", label: "Projects Delivered" },
  { kicker: "EXPERIENCE MEETS INNOVATION", value: 10, suffix: "+", label: "Years of Experience" },
  { kicker: "TRUSTED WORLDWIDE PARTNERS", value: 300, suffix: "+", label: "Clients Served" },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const increment = target / (1800 / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])
  return <>{count}{suffix}</>
}

export function Stats() {
  const { ref, inView } = useInView(0.2)
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
      {/* Liquid fluid background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute -right-20 -top-20 h-[450px] w-[450px] opacity-65" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute -left-20 bottom-0 h-[400px] w-[400px] opacity-60" />
      </div>

      <div className="glass-card relative grid gap-8 rounded-[2.5rem] p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-14 shadow-2xl shadow-slate-200/50 border border-white">
        {/* Shimmer sweep */}
        <div className="glass-shimmer pointer-events-none absolute inset-0 rounded-[2.5rem]" />
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`relative text-center transition-all duration-700 ${inView ? "animate-blur-in opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: `${i * 130}ms` }}
          >
            {/* Vertical divider */}
            {i > 0 && <div className="absolute -left-4 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-slate-200/80 lg:block" />}
            <p className="mx-auto max-w-[10rem] text-[10px] font-bold leading-relaxed tracking-widest text-slate-400 uppercase">{s.kicker}</p>
            <p className="mt-3 text-5xl font-black text-blue-600 lg:text-6xl" style={{ letterSpacing: "-0.04em" }}>
              <Counter target={s.value} suffix={s.suffix} active={inView} />
            </p>
            <p className="mt-2 text-sm font-bold text-slate-800">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
