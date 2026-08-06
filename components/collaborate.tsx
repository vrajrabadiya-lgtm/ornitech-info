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
    <section id="collaborate" ref={ref as React.RefObject<HTMLElement>} className="relative overflow-hidden py-24">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[450px] w-[450px] liquid-gradient opacity-35 animate-liquid-float" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] liquid-gradient opacity-30 animate-liquid-float-slow" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 ambient-glow opacity-50" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <span className="glass-chip inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand uppercase">
            Get Started
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>
            Let&apos;s Collaborate
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Tell us about your project and we&apos;ll come back with a plan, a timeline, and a quote.
          </p>
        </div>

        {/* Form card */}
        <div className={`mt-10 glass-card rounded-3xl p-6 sm:p-10 transition-all duration-700 delay-200 ${inView ? "animate-scale-in" : "opacity-0 scale-95"}`}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand" />
              <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Project type */}
                <fieldset>
                  <legend className="text-sm font-bold text-foreground">Project Type</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          type === t
                            ? "bg-brand text-white shadow-md shadow-brand/20"
                            : "glass-chip text-foreground/70 hover:text-brand"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Budget */}
                <fieldset>
                  <legend className="text-sm font-bold text-foreground">Budget</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                          budget === b
                            ? "bg-brand text-white shadow-md shadow-brand/20"
                            : "glass-chip text-foreground/70 hover:text-brand"
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
                <label htmlFor="message" className="text-sm font-bold text-foreground">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe what you want to build..."
                  className="mt-3 w-full resize-none rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:border-brand/40 focus:bg-white/70 focus:shadow-sm focus:shadow-brand/10"
                />
              </div>

              {/* Contacts */}
              <div className="mt-6">
                <p className="text-sm font-bold text-foreground">Your Contacts</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                      className="rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:border-brand/40 focus:bg-white/70 focus:shadow-sm focus:shadow-brand/10"
                    />
                  ))}
                </div>
              </div>

              {/* Checkbox */}
              <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-brand"
                />
                I agree to the processing of my personal data and accept the{" "}
                <Link href="/privacy-policy" className="text-brand hover:underline">privacy policy</Link>.
              </label>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand/90 hover:gap-3 hover:shadow-xl hover:shadow-brand/30"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="tel:+14256234723"
                  className="glass-chip inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:text-brand hover:gap-3"
                >
                  <Phone className="h-4 w-4" /> Book a Call
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
