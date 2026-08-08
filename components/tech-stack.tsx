"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const CATEGORIES: Record<string, string[]> = {
  "Mobile App": ["Swift", "Kotlin", "Flutter", "React Native", "Java", "Objective-C", "Ionic", "Xamarin"],
  Frontend: ["React", "Vue.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Nuxt", "CSS3", "HTML5", "jQuery", "Bootstrap", "Sass"],
  "Backend & DB": ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB", "MySQL", "Redis", "GraphQL", "Django"],
  eCommerce: ["Shopify", "WooCommerce", "Magento", "WordPress", "Strapi", "Contentful", "Sanity", "BigCommerce"],
  Frameworks: ["Express", "NestJS", "Spring Boot", ".NET", "FastAPI", "Ruby on Rails", "Flask", "Fastify"],
}

const TABS = Object.keys(CATEGORIES)

import {
  SiSwift, SiKotlin, SiFlutter, SiReact, SiApple, SiIonic, SiVuedotjs, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNuxt, SiCss, SiHtml5, SiJquery, SiBootstrap, SiSass, SiNodedotjs, SiPython, SiPhp, SiLaravel, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiGraphql, SiDjango, SiShopify, SiWoocommerce, SiWordpress, SiStrapi, SiContentful, SiSanity, SiBigcommerce, SiExpress, SiNestjs, SiSpringboot, SiDotnet, SiFastapi, SiRubyonrails, SiFlask, SiFastify
} from "react-icons/si"
import { FaJava, FaMagento, FaMicrosoft } from "react-icons/fa"

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
}

export function TechStack() {
  const [active, setActive] = useState("Frontend")
  const [paused, setPaused] = useState(false)
  const [quickView, setQuickView] = useState(false)
  const { ref, inView } = useInView(0.2)

  useEffect(() => {
    if (paused || quickView) return
    const timer = setInterval(() => setActive((v) => TABS[(TABS.indexOf(v) + 1) % TABS.length]), 3000)
    return () => clearInterval(timer)
  }, [paused, quickView])

  // close modal on Escape key
  useEffect(() => {
    if (!quickView) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setQuickView(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [quickView])

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="glass-section relative overflow-hidden py-16 lg:py-24"
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

          {/* Tech Grid */}
          <div key={active} className="mx-auto mt-8">
            <div className="glass-card animate-blur-in rounded-[2.2rem] p-6 lg:p-8 shadow-2xl shadow-slate-200/50 border border-white">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {CATEGORIES[active].slice(0, 7).map((tech, i) => {
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
                {/* View All — opens Quick View modal */}
                <button
                  type="button"
                  onClick={() => setQuickView(true)}
                  className="animate-scale-in glass-hover flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-4 py-3.5 text-sm font-bold text-blue-600 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  style={{ animationDelay: `${7 * 40}ms` }}
                >
                  View All <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15,23,42,0.55)", backdropFilter: "blur(6px)" }}
          onClick={() => setQuickView(false)}
        >
          <div
            className="glass-card relative w-full max-w-3xl max-h-[82vh] overflow-y-auto rounded-[2rem] p-8 shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900" style={{ letterSpacing: "-0.02em" }}>{active}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{CATEGORIES[active].length} technologies</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/technologies"
                  className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                >
                  Full Page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setQuickView(false)}
                  className="glass-chip flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* All techs for active tab */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CATEGORIES[active].map((tech) => {
                const Icon = ICON_MAP[tech]
                return (
                  <div
                    key={tech}
                    className="glass-chip flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-800 border border-white shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                      {Icon ? <Icon className="h-4 w-4" /> : tech.slice(0, 2).toUpperCase()}
                    </span>
                    {tech}
                  </div>
                )
              })}
            </div>

            {/* Tab switcher inside modal */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActive(t)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                    active === t
                      ? "bg-blue-600 text-white"
                      : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
