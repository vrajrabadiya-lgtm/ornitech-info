"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const REVIEWS = [
  { quote: "Ornitech felt like an extension of our own team. They shipped a complex marketplace in record time, and the quality held up under real traffic from day one.", name: "Sophia Rodriguez", role: "CEO, RetailHub", location: "Singapore", avatar: "/avatars/sophia.png" },
  { quote: "They took a vague idea and turned it into a polished product our customers love. Communication was clear, and every milestone landed on schedule.", name: "Daniel Okafor", role: "Founder, PayFlow", location: "United Kingdom", avatar: "/avatars/a1.png" },
  { quote: "The engineering quality is exceptional. Our app has scaled to hundreds of thousands of users without a single major incident.", name: "Amelia Chen", role: "CTO, MedConnect", location: "Canada", avatar: "/avatars/a2.png" },
]

const INTERVAL = 4500

export function Testimonial() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView(0.2)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const r = REVIEWS[current]

  const goTo = (idx: number) => {
    setCurrent(idx)
    setProgress(0)
  }

  const prev = () => goTo((current - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => goTo((current + 1) % REVIEWS.length)

  // Start/stop auto-advance
  useEffect(() => {
    if (!inView || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
      return
    }

    setProgress(0)

    // Progress bar — updates every 50ms
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100
        return p + (50 / INTERVAL) * 100
      })
    }, 50)

    // Slide advance
    intervalRef.current = setInterval(() => {
      setCurrent((v) => (v + 1) % REVIEWS.length)
      setProgress(0)
    }, INTERVAL)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [inView, paused, current])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient liquid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 opacity-65" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-1/4 bottom-0 h-[380px] w-[380px] opacity-60" />
      </div>

      <div className={`relative mx-auto max-w-3xl px-5 lg:px-8 transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
        {/* Header */}
        <div className="text-center">
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            Client Stories
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Review Liquid Glass Card */}
        <div key={current} className="animate-fade-in mt-10 glass-card rounded-[2.2rem] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 border border-white">
          {/* Stars */}
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
          </div>

          <blockquote className="mt-5 text-lg sm:text-xl font-semibold leading-relaxed text-slate-900" style={{ letterSpacing: "-0.01em" }}>
            &ldquo;{r.quote}&rdquo;
          </blockquote>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-md">
                <Image src={r.avatar || "/placeholder.svg"} alt={r.name} fill className="object-cover" sizes="48px" />
              </span>
              <div>
                <p className="font-extrabold text-slate-900">{r.name}</p>
                <p className="text-xs font-semibold text-slate-500">{r.role} · {r.location}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="glass-chip flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all hover:text-blue-600 border border-slate-200/80 shadow-sm"
              >
                <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700"
              >
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators + progress */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-7 bg-blue-600 shadow-sm" : "w-2 bg-slate-200 hover:bg-blue-300"}`}
              />
            ))}
          </div>

          {!paused && inView && (
            <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-100 border border-slate-200/60">
              <div
                className="h-full rounded-full bg-blue-600 transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {paused && (
            <p className="text-[10px] font-bold text-slate-400 tracking-wide">Paused — move mouse away to resume</p>
          )}
        </div>
      </div>
    </section>
  )
}
