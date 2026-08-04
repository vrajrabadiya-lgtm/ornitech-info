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
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{count}{suffix}</>
}

export function Stats() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-border bg-muted/40 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center transition-all duration-700 ${inView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <p className="mx-auto max-w-[9rem] text-[10px] font-semibold leading-relaxed tracking-widest text-muted-foreground">
              {s.kicker}
            </p>
            <p className="mt-3 text-4xl font-extrabold text-brand lg:text-5xl">
              <Counter target={s.value} suffix={s.suffix} active={inView} />
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
