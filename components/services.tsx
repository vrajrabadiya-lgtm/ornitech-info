"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const SERVICE_SLUGS: Record<string, string> = {
  "Web Development": "web-development",
  "Mobile App Development": "mobile-app-development",
  "Software Development": "software-development",
  "Vibe Coding Development": "vibe-coding-development",
  "AI Development Services": "ai-development-services",
  "AI Integration Services": "ai-integration-services",
  "UI/UX Design": "ui-ux-design",
  "QA & Testing Services": "qa-testing",
  // "Cloud, DevOps & Security": "cloud-devops-security",
  "Data Analytics": "data-analytics",
  "Dedicated Development Team": "dedicated-development-team",
  "Staff Augmentation": "staff-augmentation",
}

const SERVICES = [
  { name: "Web Development", body: "Fast, accessible, SEO-ready websites and web apps built on modern frameworks and a scalable architecture.", points: ["Responsive Web Apps", "Progressive Web Apps", "CMS Integration", "Performance Optimization", "SEO Foundations"] },
  { name: "Mobile App Development", body: "Native and cross-platform mobile apps that feel great, load fast, and are built to scale with your business.", points: ["iOS & Android Native Apps", "Flutter & React Native", "App Store Optimization", "Maintenance & Support", "API & Backend Integration"] },
  { name: "Software Development", body: "Custom enterprise software and platforms engineered for reliability, security, and long-term maintainability.", points: ["Custom Enterprise Software", "SaaS Platforms", "System Integrations", "Legacy Modernization", "Microservices Architecture"] },
  { name: "Vibe Coding Development", body: "AI-assisted development using Claude, Cursor, and GitHub Copilot. Experienced engineers ship features faster without compromising code quality.", points: ["AI-Assisted Code Generation", "Automated Test Suite Generation", "Documentation Automation", "AI Code Review", "Codebase Acceleration"] },
  { name: "AI Development Services", body: "From LLM apps to computer vision, we design and ship AI features that solve real business problems.", points: ["LLM & RAG Applications", "Model Fine-Tuning", "Computer Vision", "Predictive Analytics", "MLOps Pipelines"] },
  { name: "AI Integration Services", body: "Embed AI into your existing products and workflows with secure, well-governed integrations.", points: ["OpenAI & Anthropic APIs", "Workflow Automation", "Chatbots & Assistants", "Data Pipeline Integration", "Governance & Safety"] },
  { name: "UI/UX Design", body: "Research-driven interfaces and design systems that turn complex products into intuitive experiences.", points: ["User Research", "Wireframes & Prototypes", "Design Systems", "Usability Testing", "Interaction Design"] },
  { name: "QA & Testing Services", body: "Comprehensive quality assurance so your product ships with confidence and stays reliable in production.", points: ["Manual & Exploratory Testing", "Test Automation (Cypress, Playwright)", "Performance & Load Testing", "Security Testing (OWASP)", "CI/CD Test Integration"] },
  // { name: "Cloud, DevOps & Security", body: "Automated, secure infrastructure and pipelines that let your teams deploy quickly and safely.", points: ["AWS, GCP & Azure", "CI/CD Pipelines", "Kubernetes & Containers", "Monitoring & Observability", "Security Hardening"] },
  { name: "Data Analytics", body: "Turn raw data into decisions with pipelines, dashboards, and analytics your whole team can trust.", points: ["Data Warehousing", "ETL Pipelines", "BI Dashboards", "Data Visualization", "Reporting Automation"] },
  { name: "Dedicated Development Team", body: "A vetted, fully managed team that works as an extension of yours, aligned to your goals and timeline.", points: ["Handpicked Engineers", "Full Project Ownership", "Agile Delivery", "Transparent Reporting", "Flexible Scaling"] },
  { name: "Staff Augmentation", body: "Scale your capacity on demand with senior engineers who plug straight into your existing workflow.", points: ["On-Demand Talent", "Fast Onboarding", "Time-Zone Alignment", "No Overhead", "Long-Term Retention"] },
]

export function Services() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView(0.1)
  const current = SERVICES[active]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float-slow absolute -right-24 -top-24 h-[550px] w-[550px] opacity-70" />
        <div className="liquid-orb-sky animate-liquid-float absolute -left-24 bottom-0 h-[480px] w-[480px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`max-w-2xl ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-balance sm:text-5xl text-slate-900" style={{ letterSpacing: "-0.03em" }}>
            Services we offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From initial strategy to cloud-scale deployment. A full-stack partner across every layer of your product.
          </p>
        </div>

        <div className={`mt-10 grid gap-6 lg:grid-cols-[280px_1fr] ${inView ? "animate-blur-in" : "opacity-0"}`}>
          {/* Sidebar */}
          <div className="glass-card flex flex-col gap-1.5 rounded-[2rem] p-3.5 shadow-xl shadow-slate-200/40 border border-white/90">
            {SERVICES.map((s, i) => (
              <button
                key={s.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition-colors duration-200 ${
                  i === active
                    ? "glass-chip text-blue-600 shadow-md shadow-blue-500/10 border-white"
                    : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-200 ${i === active ? "bg-blue-600" : "bg-slate-300 group-hover:bg-blue-400"}`} />
                {s.name}
              </button>
            ))}
          </div>

          {/* Detail panel — no key, no re-mount, content transitions via opacity only */}
          <div className="glass-card rounded-[2.2rem] p-8 lg:p-10 shadow-2xl shadow-slate-200/50 border border-white">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900" style={{ letterSpacing: "-0.02em" }}>{current.name}</h3>
              <span className="glass-chip shrink-0 rounded-full px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{current.body}</p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {current.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <span className="glass-chip flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-blue-600 shadow-sm border border-blue-100">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/services/${SERVICE_SLUGS[current.name]}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:gap-3 hover:bg-blue-700 hover:shadow-blue-600/35"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-slate-800 transition-all hover:text-blue-600 hover:gap-3 border border-slate-200/80"
              >
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
