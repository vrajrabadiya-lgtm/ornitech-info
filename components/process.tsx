"use client"

import { useState } from "react"
import { Compass, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const STEPS = [
  { icon: Compass, name: "Discovery", body: "We align on goals, scope, and success metrics before a single line of code is written.", steps: ["Stakeholder workshops", "Requirement gathering", "Technical feasibility review", "Roadmap and estimate"], deliverables: ["PROJECT BRIEF", "SCOPE DOCUMENT", "ESTIMATE", "ROADMAP"] },
  { icon: PenTool, name: "UI/UX Design", body: "We translate the plan into intuitive flows and a polished visual language your users will love.", steps: ["Map information architecture and key user journeys", "Create low- and high-fidelity wireframes", "Design the visual system and interactive prototypes", "Validate with usability testing and iterate"], deliverables: ["WIREFRAMES", "DESIGN SYSTEM", "INTERACTIVE PROTOTYPE", "USABILITY REPORT"] },
  { icon: Code2, name: "Development", body: "Our engineers build in tight, reviewable increments with clean, well-tested, maintainable code.", steps: ["Set up architecture, repositories, and CI/CD pipelines", "Develop features in iterative sprints", "Integrate APIs, services, and third-party systems", "Conduct continuous code reviews"], deliverables: ["SOURCE CODE", "API DOCUMENTATION", "SPRINT DEMOS", "STAGING BUILDS"] },
  { icon: ShieldCheck, name: "Quality Testing", body: "Rigorous testing across functionality, performance, and security so nothing slips through.", steps: ["Automated and manual test coverage", "Performance and load testing", "Security and penetration testing", "Cross-device and browser QA"], deliverables: ["TEST PLAN", "AUTOMATION SUITE", "QA REPORT", "BUG TRACKER"] },
  { icon: Rocket, name: "Deployment", body: "We ship to production with confidence using automated, zero-downtime release pipelines.", steps: ["Configure production infrastructure", "Automated release pipeline", "Monitoring and alerting setup", "Go-live and smoke testing"], deliverables: ["PRODUCTION RELEASE", "MONITORING DASHBOARD", "RUNBOOK", "RELEASE NOTES"] },
  { icon: LifeBuoy, name: "Support", body: "Post-launch we keep your product healthy with proactive monitoring, updates, and improvements.", steps: ["Ongoing maintenance and updates", "Performance monitoring", "Feature enhancements", "Dedicated support SLAs"], deliverables: ["SLA AGREEMENT", "MAINTENANCE PLAN", "UPTIME REPORTS", "CHANGE LOG"] },
]

export function Process() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView(0.2)
  const current = STEPS[active]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-8 lg:py-12">
      {/* Liquid background fluid orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-sky animate-liquid-float absolute left-0 top-0 h-[500px] w-[500px] opacity-60" />
        <div className="liquid-orb-blue animate-liquid-float-slow absolute right-0 bottom-0 h-[480px] w-[480px] opacity-65" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0 translate-y-8"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Our Development Process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A proven, transparent workflow that takes your idea from concept to a launched, supported product.
          </p>
        </div>

        {/* Step icons with Apple Liquid Glass chips */}
        <div className="relative mt-14 flex flex-wrap items-start justify-center gap-x-4 gap-y-5 sm:gap-x-8">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => setActive(i)}
                className="group relative flex w-16 flex-col items-center gap-2 text-center sm:w-20 cursor-pointer"
              >
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 sm:h-16 sm:w-16 ${i === active
                    ? "glass-card text-blue-600 scale-110 shadow-xl shadow-blue-500/20 border-white"
                    : "glass-chip text-slate-500 group-hover:text-blue-600 group-hover:scale-105"
                  }`}>
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                  {i === active && <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-blue-600 ring-2 ring-white shadow-sm" />}
                </span>
                <span className={`text-xs font-bold transition-colors duration-300 ${i === active ? "text-blue-600" : "text-slate-600"}`}>{s.name}</span>
              </button>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-8 h-1.5 max-w-xs overflow-hidden rounded-full bg-slate-100 border border-slate-200/60">
          <div
            className="h-full rounded-full bg-blue-600 shadow-sm"
            style={{ width: `${((active + 1) / STEPS.length) * 100}%`, transition: "width 0.3s ease" }}
          />
        </div>

        {/* Detail Apple Liquid Glass Card */}
        <div key={active} className="glass-card animate-blur-in mt-10 rounded-[2.2rem] p-8 lg:p-10 shadow-2xl shadow-slate-200/50 border border-white">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <span className="glass-chip rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                Step {active + 1}
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900" style={{ letterSpacing: "-0.02em" }}>{current.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{current.body}</p>
              <ul className="mt-6 space-y-2.5">
                {current.steps.map((st, i) => (
                  <li key={st} className="animate-slide-left flex gap-3 text-sm font-semibold text-slate-700" style={{ animationDelay: `${i * 80}ms` }}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    {st}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Deliverables</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {current.deliverables.map((d, i) => (
                  <div key={d} className="animate-scale-in glass-chip rounded-2xl p-4 text-center border border-white shadow-sm" style={{ animationDelay: `${i * 60}ms` }}>
                    <p className="text-[11px] font-black tracking-wider text-slate-800">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

