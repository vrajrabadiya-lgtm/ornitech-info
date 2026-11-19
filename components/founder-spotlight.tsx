"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, ShieldCheck, Code2, Users, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function FounderSpotlight() {
  const { ref, inView } = useInView(0.15)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-8 lg:py-14">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float-slow absolute right-10 top-1/4 h-[420px] w-[420px] opacity-50" />
        <div className="liquid-orb-sky animate-liquid-float absolute -left-10 bottom-1/4 h-[380px] w-[380px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className={`transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <div className="glass-card rounded-[2.5rem] border border-white bg-white/70 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              
              {/* Founder Avatar / Badge Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative">
                  {/* Subtle decorative glow ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 opacity-70 blur-sm" />
                  
                  {/* Avatar Photo */}
                  <div className="relative h-36 w-36 overflow-hidden rounded-full shadow-2xl ring-4 ring-white">
                    <Image
                      src="/ronak-talaviya.jpg"
                      alt="Ronak Talaviya - Founder & CEO of Ornitech"
                      fill
                      className="object-cover object-top"
                      sizes="144px"
                      priority
                    />
                  </div>
                  
                  <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-md ring-2 ring-white">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>

                <Link href="/founder" className="group">
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    Ronak Talaviya
                  </h3>
                </Link>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                  Founder &amp; CEO
                </p>
                <Link href="/founder" className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 border border-blue-100 transition-colors hover:bg-blue-100">
                  <CheckCircle2 className="h-3 w-3 text-blue-600" /> Executive Leadership &rarr;
                </Link>
              </div>

              {/* Founder Message Column */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-5 border-t lg:border-t-0 lg:border-l border-slate-200/70 pt-6 lg:pt-0 lg:pl-10">
                <div>
                  <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
                    Founder&apos;s Note
                  </span>
                  <h4 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    &ldquo;We build software engineered to stand the test of time.&rdquo;
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Founded by <strong>Ronak Talaviya</strong>, Ornitech was created with a clear philosophy: bridge high-level vision with rigorous engineering craft. Every client works directly with engineers and leaders who genuinely care about architecture, speed, and real business impact.
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl bg-slate-50/80 p-3.5 border border-slate-200/60">
                    <Code2 className="h-4 w-4 text-blue-600" />
                    <p className="mt-2 text-xs font-bold text-slate-900">Architecture First</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Zero tech debt, scalable from day 1</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 p-3.5 border border-slate-200/60">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <p className="mt-2 text-xs font-bold text-slate-900">Direct Accountability</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">100% transparent delivery</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 p-3.5 border border-slate-200/60">
                    <Users className="h-4 w-4 text-blue-600" />
                    <p className="mt-2 text-xs font-bold text-slate-900">True Partnership</p>
                    <p className="mt-0.5 text-[11px] text-slate-500">Your vision, our engineering muscle</p>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 flex flex-wrap gap-3 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/25 transition-all hover:bg-blue-700 hover:gap-3"
                  >
                    Discuss Your Project With Us <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/founder"
                    className="glass-chip inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold text-slate-700 border border-slate-200 transition-all hover:text-blue-600 hover:border-blue-300"
                  >
                    Read Founder Story &rarr;
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
