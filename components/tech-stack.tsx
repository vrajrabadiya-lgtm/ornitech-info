"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"

const CATEGORIES: Record<string, string[]> = {
  "Mobile App": ["Swift", "Kotlin", "Flutter", "React Native", "Java", "Objective-C", "Ionic", "Xamarin"],
  Frontend: ["React", "Vue.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Nuxt", "CSS3", "HTML5", "jQuery", "Bootstrap", "Sass"],
  "Backend & DB": ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "Django"],
  eCommerce: ["Shopify", "WooCommerce", "Magento", "WordPress", "Strapi", "Contentful", "Sanity", "BigCommerce"],
  Frameworks: ["Express", "NestJS", "Spring Boot", ".NET", "FastAPI", "Ruby on Rails", "Flask", "Fastify"],
}

const TABS = Object.keys(CATEGORIES)

const TAB_COLORS: Record<string, string> = {
  "Mobile App": "from-blue-400/20 to-indigo-400/10",
  Frontend: "from-violet-400/20 to-purple-400/10",
  "Backend & DB": "from-emerald-400/20 to-teal-400/10",
  eCommerce: "from-amber-400/20 to-orange-400/10",
  Frameworks: "from-rose-400/20 to-pink-400/10",
}

export function TechStack() {
  const [active, setActive] = useState("Frontend")
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView(0.2)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setActive((v) => TABS[(TABS.indexOf(v) + 1) % TABS.length]), 3000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="glass-section relative overflow-hidden py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Liquid fluid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute right-0 top-0 h-[500px] w-[500px] opacity-60" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute left-0 bottom-0 h-[450px] w-[450px] opacity-65" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            Battle-Tested Stack
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Our Tech Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600">Modern, proven technologies we use to build fast, scalable, and maintainable products.</p>
        </div>

        {/* Tab pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setActive(t); setPaused(true) }}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                active === t
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500 scale-105"
                  : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tech Liquid Glass Grid Container */}
        <div key={active} className="mx-auto mt-8">
          <div className="glass-card animate-blur-in rounded-[2.2rem] p-6 lg:p-8 shadow-2xl shadow-slate-200/50 border border-white">
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
              {CATEGORIES[active].map((tech, i) => (
                <div
                  key={tech}
                  className="animate-scale-in glass-chip glass-hover flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-800 cursor-default border border-white shadow-sm"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-xs font-black text-blue-600 shadow-inner">
                    {tech.slice(0, 2).toUpperCase()}
                  </span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
