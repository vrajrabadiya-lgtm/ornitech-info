"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const PROJECT_TYPES = ["AI/ML", "Website", "Mobile App", "Web App", "Landing Page", "SaaS Product", "UI/UX Design"]
const BUDGETS = ["< $10K", "$10K – $20K", "$20K – $50K", "$50K+"]

export function Collaborate() {
  const [type, setType] = useState("Website")
  const [budget, setBudget] = useState("$10K – $20K")
  const [agree, setAgree] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView(0.1)

  return (
    <section id="collaborate" ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden py-24 bg-white">
      {/* Liquid fluid background orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-0 top-1/4 h-[480px] w-[480px] opacity-65" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-0 bottom-1/4 h-[420px] w-[420px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase border border-blue-100 shadow-sm">
            Get Started
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Let&apos;s Collaborate
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tell us about your project and we&apos;ll come back with a plan, a timeline, and a quote.
          </p>
        </div>

        {/* Form Liquid Glass Card */}
        <div className={`mt-10 glass-card rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-slate-200/50 border border-white transition-all duration-700 delay-200 ${inView ? "animate-scale-in" : "opacity-0 scale-95"}`}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-blue-600" />
              <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
              <p className="text-slate-600 font-medium">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Project type */}
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Type</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          type === t
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500 scale-105"
                            : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Budget */}
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-widest text-slate-400">Budget</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                          budget === b
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500 scale-105"
                            : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Message */}
              <div className="mt-8">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe what you want to build..."
                  className="mt-3 w-full resize-none rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 outline-none backdrop-blur-md transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                />
              </div>

              {/* Contacts */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Contacts</p>
                <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                  {[
                    { id: "name", placeholder: "Full Name", type: "text" },
                    { id: "email", placeholder: "Email Address", type: "email" },
                    { id: "website", placeholder: "Company Website", type: "url" },
                    { id: "phone", placeholder: "Phone Number", type: "tel" },
                  ].map((f) => (
                    <input
                      key={f.id}
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      aria-label={f.placeholder}
                      className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none backdrop-blur-md transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                    />
                  ))}
                </div>
              </div>

              {/* Checkbox */}
              <label className="mt-6 flex items-start gap-3 text-xs font-semibold text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-blue-600"
                />
                I agree to the processing of my personal data and accept the{" "}
                <Link href="/privacy-policy" className="text-blue-600 underline">privacy policy</Link>.
              </label>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/35"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="tel:+14256234723"
                  className="glass-chip inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-slate-800 transition-all hover:text-blue-600 hover:gap-3 border border-slate-200/80"
                >
                  <Phone className="h-4 w-4 stroke-[2.2]" /> Book a Call
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
