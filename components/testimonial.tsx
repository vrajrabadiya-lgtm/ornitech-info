"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const REVIEWS = [
  { quote: "Ornitech felt like an extension of our own team. They shipped a complex marketplace in record time, and the quality held up under real traffic from day one.", name: "Rahul Mehta", role: "CEO, BazaarHub", location: "Mumbai, India", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { quote: "They took a vague idea and turned it into a polished product our customers love. Communication was clear, and every milestone landed on schedule.", name: "Priya Sharma", role: "Founder, FinPay India", location: "Bangalore, India", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { quote: "The engineering quality is truly exceptional. Our app has scaled to hundreds of thousands of users without a single major incident or performance issue.", name: "Arjun Patel", role: "CTO, MedEase", location: "Ahmedabad, India", avatar: "https://randomuser.me/api/portraits/men/75.jpg" },
]

export function Testimonial() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView(0.2)
  const r = REVIEWS[current]

  const prev = () => setCurrent((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((v) => (v + 1) % REVIEWS.length)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((v) => (v + 1) % REVIEWS.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="testimonials"
      className="glass-section relative overflow-hidden py-24"
    >
      {/* Ambient liquid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 opacity-65" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-1/4 bottom-0 h-[380px] w-[380px] opacity-60" />
      </div>

      <div className={`relative mx-auto max-w-3xl px-5 lg:px-8 ${inView ? "animate-blur-in" : "opacity-0"}`}>
        {/* Header */}
        <div className="text-center">
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            Client Stories
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Review Card — no key, no re-mount */}
        <div className="mt-10 glass-card rounded-[2.2rem] p-8 sm:p-10 shadow-2xl shadow-slate-200/50 border border-white min-h-[280px]">
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

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-7 bg-blue-600 shadow-sm" : "w-2 bg-slate-200 hover:bg-blue-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
