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
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-gradient animate-liquid-float absolute right-0 top-0 h-[500px] w-[500px] opacity-38" />
        <div className="liquid-gradient animate-liquid-float-slow absolute left-0 bottom-0 h-[450px] w-[450px] opacity-35" />
        <div className="ambient-glow absolute left-1/2 bottom-0 h-[400px] w-[700px] -translate-x-1/2 opacity-35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand uppercase">Battle-Tested Stack</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>Our Tech Expertise</h2>
          <p className="mt-3 text-base text-muted-foreground">Modern, proven technologies we use to build fast, scalable, and maintainable products.</p>
        </div>

        {/* Tab pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setActive(t); setPaused(true) }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === t ? "bg-brand text-white shadow-lg shadow-brand/25" : "glass-chip text-foreground/70 hover:text-brand"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div key={active} className={`mx-auto mt-8 overflow-hidden rounded-3xl bg-gradient-to-br ${TAB_COLORS[active]} p-1`}>
          <div className="glass rounded-[1.4rem] p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {CATEGORIES[active].map((tech, i) => (
                <div
                  key={tech}
                  className="animate-scale-in glass-card glass-hover flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-foreground cursor-default"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-[11px] font-bold text-brand">
                    {tech.slice(0, 2)}
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
