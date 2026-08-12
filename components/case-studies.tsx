"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import shapenticImage from "@/assets/project/1000336675.png"
import myEntryPassImage from "@/assets/project/1000336671.png"

const FILTERS = ["All", "AI / SaaS", "Event Tech"]

const CASES = [
  {
    tag: "AI / WEB DEVELOPMENT / SAAS",
    category: "AI / SaaS",
    title: "Shapentic — AI Website Builder",
    body: "Generative AI website builder that turns a simple prompt into a production-ready, marketing-grade site in seconds.",
    image: shapenticImage,
    tint: "bg-blue-50",
    stack: ["React.js", "Next.js", "Node.js", "AWS"],
    link: "https://shapentic.com",
  },
  {
    tag: "EVENT TECH / TICKETING / ENTERTAINMENT",
    category: "Event Tech",
    title: "MyTicketPass — Smart Ticket Booking",
    body: "Real-time event ticketing with QR check-in, waitlists, and seamless payouts for venues of every size.",
    image: myEntryPassImage,
    tint: "bg-violet-50",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://myentrypass.in",
  },
]

export function CaseStudies() {
  const [filter, setFilter] = useState("All")
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView(0.1)
  const visible = CASES.filter((c) => filter === "All" || c.category === filter)

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return
    const container = sliderRef.current
    const cards = container.querySelectorAll("article")
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      setMobileActiveIndex(index)
    }
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const container = sliderRef.current
    const cards = container.querySelectorAll("article")
    let minDiff = Infinity
    let activeIdx = 0

    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const diff = Math.abs(rect.left - containerRect.left)
      if (diff < minDiff) {
        minDiff = diff
        activeIdx = idx
      }
    })

    setMobileActiveIndex(activeIdx)
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12 lg:px-8">
      {/* Ambient liquid background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute -left-24 top-1/4 h-[450px] w-[450px] opacity-60" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-0 top-0 h-[400px] w-[400px] opacity-65" />
      </div>

      <div className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
        <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
          Proven Impact
        </span>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl text-slate-900" style={{ letterSpacing: "-0.03em" }}>
          Our Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Case Studies</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
          Real products, real outcomes. A look at how we turn briefs into shipped, measurable results.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f)
              setMobileActiveIndex(0)
            }}
            className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition-all duration-300 cursor-pointer ${filter === f
                ? "glass-chip text-blue-600 scale-105 shadow-md shadow-blue-500/15 border-white"
                : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Mobile-only Top Bar: Counter & Quick Navigation */}
      {visible.length > 1 && (
        <div className="mt-6 flex items-center justify-between px-2 md:hidden">
          <div className="flex items-center gap-2">
            <span className="glass-chip rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest text-purple-700 border border-purple-200/60 shadow-sm">
              {String(mobileActiveIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold text-slate-500">Swipe to explore</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollToCard(Math.max(0, mobileActiveIndex - 1))}
              disabled={mobileActiveIndex === 0}
              aria-label="Previous case study"
              className="glass-chip flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:text-purple-700 transition-colors border border-slate-200/80 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(Math.min(visible.length - 1, mobileActiveIndex + 1))}
              disabled={mobileActiveIndex === visible.length - 1}
              aria-label="Next case study"
              className="glass-chip flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:text-purple-700 transition-colors border border-slate-200/80 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Case Studies Cards Grid / Mobile Carousel */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className={`relative mt-4 md:mt-10 flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:overflow-visible md:pb-0 ${
          visible.length === 1 ? "md:flex md:justify-center"
          : visible.length === 2 ? "md:grid md:grid-cols-2 md:max-w-5xl md:mx-auto"
          : "md:grid md:grid-cols-3"
        }`}
      >
        {visible.map((c, i) => {
          const parts = c.title.split(" — ")
          const displayTitle = parts[0]
          const displaySubtitle = parts[1] || ""

          return (
            <article
              key={c.title}
              className={`group flex flex-col overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-900/10 w-[88vw] max-w-[360px] sm:w-[80vw] shrink-0 snap-center md:w-auto md:max-w-none cursor-pointer ${
                visible.length === 1 ? "md:max-w-lg" : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top Banner Image Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.2rem] bg-slate-950">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                {/* Top Controls Overlay */}
                <div className="absolute left-3.5 top-3.5 right-3.5 sm:left-4 sm:top-4 sm:right-4 flex items-center justify-between z-10">
                  <span className="rounded-full bg-white/95 backdrop-blur-sm px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold text-[#52277D] shadow-sm">
                    {c.category}
                  </span>

                  <Link
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : undefined}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110"
                    aria-label={`Open ${displayTitle}`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.5]" />
                  </Link>
                </div>

                {/* Title & Subtitle Overlay on Bottom Left of Image */}
                <div className="absolute left-4 bottom-3.5 right-4 sm:left-5 sm:bottom-4 sm:right-5 z-10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                    {displayTitle}
                  </h3>
                  {displaySubtitle && (
                    <p className="mt-0.5 text-xs font-semibold text-slate-200/90 drop-shadow-sm sm:text-sm">
                      {displaySubtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Content Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-7 bg-white">
                <div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#525B68]">
                    {c.body}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-slate-100 border border-slate-200/80 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-bold text-[#4A525D]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-5 sm:mt-6 pt-2">
                  <Link
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#6320EE] transition-all hover:gap-2.5 hover:text-[#4F16C8] cursor-pointer"
                  >
                    See case study <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Mobile Swipe Pagination Pill Indicators */}
      {visible.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {visible.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === mobileActiveIndex ? "w-8 bg-[#6320EE] shadow-sm" : "w-2.5 bg-slate-300 hover:bg-purple-300"
              }`}
            />
          ))}
        </div>
      )}

      <div className="relative mt-10 sm:mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="glass-chip inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-800 transition-all hover:gap-3 hover:text-blue-600 border border-slate-200/80 shadow-md shadow-slate-200/40"
        >
          See all case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
