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
  "Cloud, DevOps & Security": "cloud-devops-security",
  "Data Analytics": "data-analytics",
  "Dedicated Development Team": "dedicated-development-team",
  "Staff Augmentation": "staff-augmentation",
}

const SERVICES = [
  {
    name: "Web Development",
    body: "Fast, accessible, SEO-ready websites and web apps built on modern frameworks and a scalable architecture.",
    points: ["Responsive Web Apps", "Progressive Web Apps", "CMS Integration", "Performance Optimization", "SEO Foundations"],
  },
  {
    name: "Mobile App Development",
    body: "Native and cross-platform mobile apps that feel great, load fast, and are built to scale with your business.",
    points: ["iOS & Android Native Apps", "Flutter & React Native", "App Store Optimization", "Maintenance & Support", "API & Backend Integration"],
  },
  {
    name: "Software Development",
    body: "Custom enterprise software and platforms engineered for reliability, security, and long-term maintainability.",
    points: ["Custom Enterprise Software", "SaaS Platforms", "System Integrations", "Legacy Modernization", "Microservices Architecture"],
  },
  {
    name: "Vibe Coding Development",
    body: "AI-assisted development using Claude, Cursor, and GitHub Copilot. Experienced engineers ship features faster without compromising code quality or production standards.",
    points: ["AI-Assisted Code Generation", "Automated Test Suite Generation", "Documentation Automation", "AI Code Review", "Codebase Acceleration"],
  },
  {
    name: "AI Development Services",
    body: "From LLM apps to computer vision, we design and ship AI features that solve real business problems.",
    points: ["LLM & RAG Applications", "Model Fine-Tuning", "Computer Vision", "Predictive Analytics", "MLOps Pipelines"],
  },
  {
    name: "AI Integration Services",
    body: "Embed AI into your existing products and workflows with secure, well-governed integrations.",
    points: ["OpenAI & Anthropic APIs", "Workflow Automation", "Chatbots & Assistants", "Data Pipeline Integration", "Governance & Safety"],
  },
  {
    name: "UI/UX Design",
    body: "Research-driven interfaces and design systems that turn complex products into intuitive experiences.",
    points: ["User Research", "Wireframes & Prototypes", "Design Systems", "Usability Testing", "Interaction Design"],
  },
  {
    name: "QA & Testing Services",
    body: "Comprehensive quality assurance so your product ships with confidence and stays reliable in production.",
    points: ["Manual & Exploratory Testing", "Test Automation (Cypress, Playwright)", "Performance & Load Testing", "Security Testing (OWASP)", "CI/CD Test Integration"],
  },
  {
    name: "Cloud, DevOps & Security",
    body: "Automated, secure infrastructure and pipelines that let your teams deploy quickly and safely.",
    points: ["AWS, GCP & Azure", "CI/CD Pipelines", "Kubernetes & Containers", "Monitoring & Observability", "Security Hardening"],
  },
  {
    name: "Data Analytics",
    body: "Turn raw data into decisions with pipelines, dashboards, and analytics your whole team can trust.",
    points: ["Data Warehousing", "ETL Pipelines", "BI Dashboards", "Data Visualization", "Reporting Automation"],
  },
  {
    name: "Dedicated Development Team",
    body: "A vetted, fully managed team that works as an extension of yours, aligned to your goals and timeline.",
    points: ["Handpicked Engineers", "Full Project Ownership", "Agile Delivery", "Transparent Reporting", "Flexible Scaling"],
  },
  {
    name: "Staff Augmentation",
    body: "Scale your capacity on demand with senior engineers who plug straight into your existing workflow.",
    points: ["On-Demand Talent", "Fast Onboarding", "Time-Zone Alignment", "No Overhead", "Long-Term Retention"],
  },
]

export function Services() {
  const [active, setActive] = useState(3)
  const { ref, inView } = useInView(0.1)
  const current = SERVICES[active]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={`max-w-2xl transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Services we offer</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          From idea to launch and beyond. A full-stack partner across every layer of your product.
        </p>
      </div>

      <div className={`mt-10 grid gap-6 lg:grid-cols-[340px_1fr] transition-all duration-700 delay-100 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col gap-1.5 rounded-2xl bg-ink p-3">
          {SERVICES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                i === active
                  ? "bg-brand text-brand-foreground translate-x-1 shadow-md"
                  : "text-ink-foreground/70 hover:bg-white/5 hover:text-ink-foreground hover:translate-x-1"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div key={active} className="animate-fade-up rounded-2xl border border-border p-8 lg:p-10">
          <h3 className="text-2xl font-bold">{current.name}</h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{current.body}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {current.points.map((p, i) => (
              <li
                key={p}
                className="animate-slide-left flex items-center gap-3 text-sm font-medium"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-brand transition-transform duration-200 hover:scale-110">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${SERVICE_SLUGS[current.name]}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
          >
            See more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
