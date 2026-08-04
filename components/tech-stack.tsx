"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"

const CATEGORIES: Record<string, string[]> = {
  "Mobile App": ["Swift", "Kotlin", "Flutter", "React Native", "Java", "Objective-C", "Ionic", "Xamarin"],
  Frontend: ["React", "Vue.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Nuxt", "CSS3", "HTML5", "jQuery", "Bootstrap", "Sass"],
  "Backend & Database": ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "Django"],
  "eCommerce & CMS": ["Shopify", "WooCommerce", "Magento", "WordPress", "Strapi", "Contentful", "Sanity", "BigCommerce"],
  Frameworks: ["Express", "NestJS", "Spring Boot", ".NET", "FastAPI", "Ruby on Rails", "Flask", "Fastify"],
}

const TABS = Object.keys(CATEGORIES)

export function TechStack() {
  const [active, setActive] = useState("Frontend")
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView(0.2)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((v) => {
        const idx = TABS.indexOf(v)
        return TABS[(idx + 1) % TABS.length]
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="mx-auto max-w-7xl px-5 py-16 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Our <span className="text-brand">Tech</span> Expertise
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A modern, battle-tested stack we use to build fast, scalable, and maintainable products.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2.5">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => { setActive(t); setPaused(true) }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === t
                ? "bg-brand text-brand-foreground scale-105 shadow-md shadow-brand/20"
                : "border border-border text-muted-foreground hover:border-brand hover:text-brand"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div key={active} className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {CATEGORIES[active].map((tech, i) => (
          <div
            key={tech}
            className="animate-scale-in flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-5 text-sm font-semibold text-foreground transition-all hover:border-brand hover:text-brand hover:shadow-md hover:shadow-brand/10 hover:-translate-y-1"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-bold text-brand">
              {tech.slice(0, 2)}
            </span>
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}
