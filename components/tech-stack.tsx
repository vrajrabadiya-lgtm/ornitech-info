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

import { 
  SiSwift, SiKotlin, SiFlutter, SiReact, SiApple, SiIonic, SiVuedotjs, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNuxt, SiCss, SiHtml5, SiJquery, SiBootstrap, SiSass, SiNodedotjs, SiPython, SiPhp, SiLaravel, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiGraphql, SiDjango, SiShopify, SiWoocommerce, SiWordpress, SiStrapi, SiContentful, SiSanity, SiBigcommerce, SiExpress, SiNestjs, SiSpringboot, SiDotnet, SiFastapi, SiRubyonrails, SiFlask, SiFastify
} from "react-icons/si";
import { FaJava, FaMagento, FaMicrosoft } from "react-icons/fa";

const ICON_MAP: Record<string, React.ElementType> = {
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Flutter: SiFlutter,
  "React Native": SiReact,
  Java: FaJava,
  "Objective-C": SiApple,
  Ionic: SiIonic,
  Xamarin: FaMicrosoft,
  React: SiReact,
  "Vue.js": SiVuedotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Nuxt: SiNuxt,
  CSS3: SiCss,
  HTML5: SiHtml5,
  jQuery: SiJquery,
  Bootstrap: SiBootstrap,
  Sass: SiSass,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  PHP: SiPhp,
  Laravel: SiLaravel,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,
  GraphQL: SiGraphql,
  Django: SiDjango,
  Shopify: SiShopify,
  WooCommerce: SiWoocommerce,
  Magento: FaMagento,
  WordPress: SiWordpress,
  Strapi: SiStrapi,
  Contentful: SiContentful,
  Sanity: SiSanity,
  BigCommerce: SiBigcommerce,
  Express: SiExpress,
  NestJS: SiNestjs,
  "Spring Boot": SiSpringboot,
  ".NET": SiDotnet,
  FastAPI: SiFastapi,
  "Ruby on Rails": SiRubyonrails,
  Flask: SiFlask,
  Fastify: SiFastify,
};

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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {CATEGORIES[active].map((tech, i) => {
                const Icon = ICON_MAP[tech]
                return (
                  <div
                    key={tech}
                    className="animate-scale-in glass-chip glass-hover flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-800 cursor-default border border-white shadow-sm"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-xs font-black text-blue-600 shadow-inner">
                      {Icon ? <Icon className="h-5 w-5" /> : tech.slice(0, 2).toUpperCase()}
                    </span>
                    {tech}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
