"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, ArrowUpRight } from "lucide-react"

const AVATARS = ["/avatars/a1.png", "/avatars/a2.png", "/avatars/a3.png"]
const ROTATING_WORDS = ["Mobile Apps", "Web Platforms", "AI Products", "SaaS Tools", "Enterprise Software"]
const WORKS = [
  { title: "HealthBridge", tag: "Healthcare App", color: "from-emerald-300/25 to-teal-300/15" },
  { title: "TextFlow", tag: "SaaS Platform", color: "from-blue-300/25 to-indigo-300/15" },
  { title: "PayFlow", tag: "Fintech App", color: "from-violet-300/25 to-purple-300/15" },
]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setWordIndex((v) => (v + 1) % ROTATING_WORDS.length); setVisible(true) }, 350)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section id="top" className="glass-section min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-gradient animate-liquid-float absolute -left-40 -top-40 h-[650px] w-[650px] opacity-45" />
        <div className="liquid-gradient animate-liquid-float-slow absolute -right-40 bottom-0 h-[550px] w-[550px] opacity-38" />
        <div
          ref={blobRef}
          className="absolute h-[400px] w-[400px] rounded-full opacity-18 transition-transform duration-700 ease-out"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45), rgba(6,182,212,0.25), transparent 70%)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,99,235,0.10)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Giant watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden" aria-hidden="true">
        <p className="text-center text-[22vw] font-black uppercase leading-none tracking-tighter text-brand/[0.035]">ORNITECH</p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top bar */}
        <div className="animate-blur-in flex items-center justify-between pt-12">
          <span className="glass-chip flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-brand">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Open for projects
          </span>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex -space-x-2">
              {AVATARS.map((src, i) => (
                <span key={i} className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
                  <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" sizes="28px" />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-xs font-semibold text-foreground">4.9 · 5k+ clients</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-16 text-center lg:mt-24">
          <p className="animate-blur-in text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Software Development Agency
          </p>
          <h1 className="animate-blur-in animation-delay-100 mt-5 text-[clamp(2.8rem,7vw,6rem)] font-black leading-[1.0]" style={{ letterSpacing: "-0.04em" }}>
            <span className="text-foreground">We turn ideas into</span>
            <br />
            <span
              className="inline-block bg-gradient-to-r from-brand via-blue-500 to-highlight bg-clip-text text-transparent transition-all duration-300"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>
          <p className="animate-blur-in animation-delay-200 mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ornitech is a full-service software agency. We design, engineer, and launch digital products — from first sketch to production — for startups and enterprises worldwide.
          </p>

          {/* CTAs */}
          <div className="animate-blur-in animation-delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background shadow-xl shadow-foreground/20 transition-all hover:gap-4 hover:bg-brand hover:shadow-brand/30"
            >
              Start Building
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/portfolio" className="glass-chip inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-foreground transition-all hover:gap-3 hover:text-brand">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Cards row */}
        {/*
        <div className="animate-blur-in animation-delay-400 relative mt-16 pb-16 lg:mt-20 lg:pb-24">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">What we ship</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKS.map((w, i) => (
              <Link
                key={w.title}
                href="/portfolio"
                className="glass-card group relative overflow-hidden rounded-3xl p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`mb-4 h-28 rounded-2xl bg-gradient-to-br ${w.color} transition-transform duration-500 group-hover:scale-105`} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{w.tag}</p>
                <p className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-brand">{w.title}</p>
                <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-brand" />
              </Link>
            ))}

            {/* Stats card */}
            {/* <div className="glass-card rounded-3xl p-5">
              <div className="space-y-4">
                {[{ n: "612+", l: "Projects" }, { n: "100+", l: "Engineers" }, { n: "10+", l: "Years" }].map((s) => (
                  <div key={s.l} className="flex items-baseline justify-between border-b border-white/40 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
                    <span className="text-2xl font-black text-brand" style={{ letterSpacing: "-0.04em" }}>{s.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Trust row */}
           {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Trusted by</span>
            {["Biocon", "AT&T", "Nextbite", "Masa", "RetailHub"].map((c) => (
              <span key={c} className="glass-chip rounded-xl px-4 py-2 text-sm font-bold text-foreground/60 transition-all hover:text-brand">{c}</span>
            ))}
            <div className="glass-chip flex items-center gap-2 rounded-xl px-4 py-2">
              <span className="text-sm">🇨🇦 🇮🇳 🇮🇪</span>
              <span className="text-xs font-semibold text-foreground">3 Global Offices</span>
            </div>
          </div>
        </div> */}
      </div> 
    </section>
  )
}
