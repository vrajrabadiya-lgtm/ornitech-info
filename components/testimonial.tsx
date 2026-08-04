"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const REVIEWS = [
  {
    quote: "Ornitech felt like an extension of our own team. They shipped a complex marketplace in record time, and the quality held up under real traffic from day one.",
    name: "Sophia Rodriguez",
    location: "Singapore",
    avatar: "/avatars/sophia.png",
  },
  {
    quote: "They took a vague idea and turned it into a polished product our customers love. Communication was clear, and every milestone landed on schedule.",
    name: "Daniel Okafor",
    location: "United Kingdom",
    avatar: "/avatars/a1.png",
  },
  {
    quote: "The engineering quality is exceptional. Our app has scaled to hundreds of thousands of users without a single major incident.",
    name: "Amelia Chen",
    location: "Canada",
    avatar: "/avatars/a2.png",
  },
]

export function Testimonial() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView(0.2)
  const r = REVIEWS[i]

  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setI((v) => (v + 1) % REVIEWS.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 4000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        color: "var(--border)",
      }}
    >
      <div className={`mx-auto max-w-3xl px-5 text-center text-foreground lg:px-8 transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          What <span className="text-brand">Our Clients</span> are Saying
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The partnerships behind our work, in their own words.
        </p>

        <div className="mt-10 flex justify-center gap-1 text-highlight">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="h-5 w-5 fill-current" />
          ))}
        </div>

        <div key={i} className="animate-fade-in">
          <blockquote className="mx-auto mt-6 max-w-2xl text-xl font-medium leading-relaxed text-pretty text-foreground/90">
            &ldquo;{r.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-background transition-transform duration-300 hover:scale-110">
              <Image src={r.avatar || "/placeholder.svg"} alt={r.name} fill className="object-cover" sizes="64px" />
            </span>
            <div>
              <p className="font-bold">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.location}</p>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === i ? "w-6 bg-brand" : "w-2 bg-border"}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-brand hover:text-brand hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-ink-foreground transition-all hover:bg-brand hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
