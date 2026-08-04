"use client"

import { useState, useEffect } from "react"
import { Compass, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const STEPS = [
  {
    icon: Compass,
    name: "Discovery",
    body: "We align on goals, scope, and success metrics before a single line of code is written.",
    steps: ["Stakeholder workshops", "Requirement gathering", "Technical feasibility review", "Roadmap and estimate"],
    deliverables: ["PROJECT BRIEF", "SCOPE DOCUMENT", "ESTIMATE", "ROADMAP"],
  },
  {
    icon: PenTool,
    name: "UI/UX Design",
    body: "We translate the plan into intuitive flows and a polished visual language your users will love.",
    steps: ["Map information architecture and key user journeys", "Create low- and high-fidelity wireframes", "Design the visual system and interactive prototypes", "Validate with usability testing and iterate"],
    deliverables: ["WIREFRAMES", "DESIGN SYSTEM", "INTERACTIVE PROTOTYPE", "USABILITY REPORT"],
  },
  {
    icon: Code2,
    name: "Development",
    body: "Our engineers build in tight, reviewable increments with clean, well-tested, maintainable code.",
    steps: ["Set up architecture, repositories, and CI/CD pipelines", "Develop features in iterative sprints", "Integrate APIs, services, and third-party systems", "Conduct continuous code reviews"],
    deliverables: ["SOURCE CODE", "API DOCUMENTATION", "SPRINT DEMOS", "STAGING BUILDS"],
  },
  {
    icon: ShieldCheck,
    name: "Quality Testing",
    body: "Rigorous testing across functionality, performance, and security so nothing slips through.",
    steps: ["Automated and manual test coverage", "Performance and load testing", "Security and penetration testing", "Cross-device and browser QA"],
    deliverables: ["TEST PLAN", "AUTOMATION SUITE", "QA REPORT", "BUG TRACKER"],
  },
  {
    icon: Rocket,
    name: "Deployment",
    body: "We ship to production with confidence using automated, zero-downtime release pipelines.",
    steps: ["Configure production infrastructure", "Automated release pipeline", "Monitoring and alerting setup", "Go-live and smoke testing"],
    deliverables: ["PRODUCTION RELEASE", "MONITORING DASHBOARD", "RUNBOOK", "RELEASE NOTES"],
  },
  {
    icon: LifeBuoy,
    name: "Support",
    body: "Post-launch we keep your product healthy with proactive monitoring, updates, and improvements.",
    steps: ["Ongoing maintenance and updates", "Performance monitoring", "Feature enhancements", "Dedicated support SLAs"],
    deliverables: ["SLA AGREEMENT", "MAINTENANCE PLAN", "UPTIME REPORTS", "CHANGE LOG"],
  },
]

export function Process() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useInView(0.2)
  const current = STEPS[active]

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % STEPS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Our Development Process</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A proven, transparent workflow that takes your idea from concept to a launched, supported product.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-start justify-center gap-x-4 gap-y-6 sm:gap-x-10">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => { setActive(i); setPaused(true) }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="group flex w-20 flex-col items-center gap-2 text-center"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 ${
                  i === active
                    ? "border-brand bg-brand text-brand-foreground scale-110 shadow-lg shadow-brand/30"
                    : "border-border bg-background text-muted-foreground group-hover:border-brand group-hover:text-brand"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className={`text-xs font-semibold transition-colors duration-300 ${i === active ? "text-foreground" : "text-muted-foreground"}`}>
                {s.name}
              </span>
            </button>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-6 max-w-xs h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-brand rounded-full transition-none"
          style={{
            width: `${((active + 1) / STEPS.length) * 100}%`,
            transition: paused ? "none" : "width 3s linear",
          }}
        />
      </div>

      <div
        key={active}
        className="animate-fade-up mt-10 rounded-3xl border border-border p-8 lg:p-10"
      >
        <h3 className="text-xl font-bold">
          {active + 1}. {current.name}
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{current.body}</p>

        <p className="mt-8 text-sm font-bold">Steps:</p>
        <ul className="mt-3 space-y-2">
          {current.steps.map((st, i) => (
            <li
              key={st}
              className="animate-slide-left flex gap-3 text-sm text-muted-foreground"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {st}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm font-bold">Deliverables:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {current.deliverables.map((d, i) => (
            <span
              key={d}
              className="animate-scale-in rounded-full border border-border px-4 py-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
