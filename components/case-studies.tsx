"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import shapenticImage from "@/assets/project/1000336675.png"
import myEntryPassImage from "@/assets/project/1000336671.png"

const FILTERS = ["All", "AI / SaaS", "Event Tech"]

const CASES = [
  {
    tag: "AI / WEB DEVELOPMENT / SAAS",
    category: "AI / SaaS",
    title: "Shapentic — AI Website Builder",
    body: "An AI-powered platform that lets users create modern, fully functional websites simply by entering prompts — no coding or design expertise needed.",
    image: shapenticImage,
    tint: "bg-blue-50",
    stack: ["React.js", "Next.js", "Node.js", "OpenAI APIs", "MongoDB", "AWS"],
    link: "https://shapentic.com",
  },
  {
    tag: "EVENT TECH / TICKETING / ENTERTAINMENT",
    category: "Event Tech",
    title: "MyTicketPass — Smart Ticket Booking",
    body: "A modern digital platform for seamless ticket booking and live event management — helping users discover events and organizers manage ticket sales efficiently.",
    image: myEntryPassImage,
    tint: "bg-violet-50",
    stack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "AWS", "Payment Gateways"],
    link: "https://myentrypass.in",
  },
  /*
  {
    tag: "AI / COMPUTER VISION / SECURITY",
    category: "AI / Computer Vision",
    title: "AI Face Detection & Recognition",
    body: "An AI-powered face detection and recognition system for real-time video — detects faces, counts individuals, and identifies known persons using advanced ML models.",
    image: "/case-studies/face-detection.png",
    tint: "bg-emerald-50",
    stack: ["Python", "OpenCV", "TensorFlow", "FaceNet", "MongoDB", "Cloud Integration"],
    link: "/portfolio",
  },
  */
]

export function CaseStudies() {
  const [filter, setFilter] = useState("All")
  const { ref, inView } = useInView(0.1)
  const visible = CASES.filter((c) => filter === "All" || c.category === filter)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="relative mx-auto max-w-7xl px-5 py-8 lg:py-12 lg:px-8">
      {/* Ambient liquid background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute -left-24 top-1/4 h-[450px] w-[450px] opacity-60" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-0 top-0 h-[400px] w-[400px] opacity-65" />
      </div>

      <div className={`relative mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
        <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
          Proven Impact
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-slate-900" style={{ letterSpacing: "-0.03em" }}>
          Our Work <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Case Studies</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Real products, real outcomes. A look at how we turn briefs into shipped, measurable results.
        </p>
      </div>

      <div className="relative mt-8 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${filter === f
                ? "glass-chip text-blue-600 scale-105 shadow-md shadow-blue-500/15 border-white"
                : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={`relative mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:overflow-visible md:pb-0 ${
          visible.length === 1 ? "md:flex md:justify-center"
          : visible.length === 2 ? "md:grid md:grid-cols-2 md:max-w-3xl md:mx-auto"
          : "md:grid md:grid-cols-3"
        }`}>
        {visible.map((c, i) => (
          <article
            key={c.title}
            className={`glass-card animate-scale-in group flex flex-col overflow-hidden rounded-[2.2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 border border-white w-[80vw] shrink-0 snap-start md:w-auto ${
              visible.length === 1 ? "md:max-w-lg" : ""
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`p-4 ${c.tint}`}>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200/60 bg-white shadow-sm">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="glass-chip rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-blue-600 border border-blue-100 uppercase">
                {c.tag}
              </span>
              <h3 className="mt-3 text-lg font-black text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span key={s} className="glass-chip rounded-full px-2.5 py-1 text-[10px] font-bold text-slate-600 border border-slate-200/60">{s}</span>
                ))}
              </div>
              <Link
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-600 transition-all hover:gap-3"
              >
                See case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="relative mt-12 flex justify-center">
        <Link
          href="/portfolio"
          className="glass-chip inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:gap-3 hover:text-blue-600 border border-slate-200/80 shadow-md shadow-slate-200/40"
        >
          See all case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

