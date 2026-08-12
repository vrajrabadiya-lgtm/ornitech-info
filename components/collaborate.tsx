"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const PROJECT_TYPES = ["AI/ML", "Website", "Mobile App", "Web App", "Landing Page", "SaaS Product", "UI/UX Design"]
const BUDGETS = ["< $10K", "$10K – $20K", "$20K – $50K", "$50K+"]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/

type Fields = { name: string; email: string; phone: string; website: string; message: string }
type Errors = Partial<Record<keyof Fields | "agree", string>>

export function Collaborate() {
  const [type, setType] = useState("Website")
  const [budget, setBudget] = useState("$10K – $20K")
  const [agree, setAgree] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const { ref, inView } = useInView(0.1)

  const [fields, setFields] = useState<Fields>({ name: "", email: "", phone: "", website: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields | "agree", boolean>>>({})

  const validate = (f: Fields, agreeVal: boolean): Errors => {
    const e: Errors = {}
    if (!f.name.trim()) e.name = "Full name is required."
    else if (f.name.trim().length < 2) e.name = "Name must be at least 2 characters."

    if (!f.email.trim()) e.email = "Email is required."
    else if (!EMAIL_RE.test(f.email)) e.email = "Enter a valid email address."

    if (f.phone && !PHONE_RE.test(f.phone)) e.phone = "Enter a valid phone number."
    if (f.website && !URL_RE.test(f.website)) e.website = "Enter a valid URL."

    if (!f.message.trim()) e.message = "Project details are required."
    else if (f.message.trim().length < 20) e.message = "Please provide at least 20 characters."

    if (!agreeVal) e.agree = "You must accept the privacy policy."
    return e
  }

  const handleBlur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(fields, agree))
  }

  const handleChange = (key: keyof Fields, value: string) => {
    const updated = { ...fields, [key]: value }
    setFields(updated)
    if (touched[key]) setErrors(validate(updated, agree))
  }

  const handleAgree = (val: boolean) => {
    setAgree(val)
    setTouched((t) => ({ ...t, agree: true }))
    setErrors((e) => ({ ...e, agree: val ? undefined : "You must accept the privacy policy." }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, phone: true, website: true, message: true, agree: true }
    setTouched(allTouched)
    const errs = validate(fields, agree)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    setSubmitError("")
    try {
      const payload = {
        ...fields,
        projectType: type,
        budget,
        agree,
      }
      const res = await fetch("/api/collaborate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setSubmitError(data.errors?.form || "Something went wrong. Please try again.")
        if (data.errors) setErrors(data.errors)
      }
    } catch {
      setSubmitError("Network error. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const cls = (key: keyof Fields) =>
    `rounded-2xl border bg-white/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none backdrop-blur-md transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 shadow-inner w-full ${
      touched[key] && errors[key]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
        : "border-slate-200/80 focus:border-blue-500 focus:ring-blue-500/10"
    }`

  return (
    <section id="collaborate" ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-orb-blue animate-liquid-float absolute left-0 top-1/4 h-[480px] w-[480px] opacity-65" />
        <div className="liquid-orb-sky animate-liquid-float-slow absolute right-0 bottom-1/4 h-[420px] w-[420px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
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

        <div className={`mt-10 glass-card rounded-[2.5rem] p-4 sm:p-10 shadow-2xl shadow-slate-200/50 border border-white transition-all duration-700 delay-200 ${inView ? "animate-scale-in" : "opacity-0 scale-95"}`}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-blue-600" />
              <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
              <p className="text-slate-600 font-medium">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-8 sm:grid-cols-2">
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Type</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((t) => (
                      <button key={t} type="button" onClick={() => setType(t)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${type === t ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500 scale-105" : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-widest text-slate-400">Budget</legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button key={b} type="button" onClick={() => setBudget(b)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${budget === b ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-500 scale-105" : "glass-chip text-slate-600 hover:text-blue-600 border-slate-200/80"}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Message */}
              <div className="mt-8">
                <label htmlFor="collab-message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Project Details *</label>
                <textarea
                  id="collab-message"
                  rows={4}
                  value={fields.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Describe what you want to build..."
                  className={`mt-3 resize-none ${cls("message")}`}
                />
                {touched.message && errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* Contacts */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Contacts</p>
                <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={fields.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={cls("name")}
                    />
                    {touched.name && errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={fields.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={cls("email")}
                    />
                    {touched.email && errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="Company Website"
                      value={fields.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      onBlur={() => handleBlur("website")}
                      className={cls("website")}
                    />
                    {touched.website && errors.website && <p className="mt-1 text-xs text-red-500">{errors.website}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={fields.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={cls("phone")}
                    />
                    {touched.phone && errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start gap-3 text-xs font-semibold text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => handleAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded accent-blue-600"
                  />
                  I agree to the processing of my personal data and accept the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 underline">privacy policy</Link>.
                </label>
                {touched.agree && errors.agree && <p className="mt-1 text-xs text-red-500">{errors.agree}</p>}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {submitError && (
                  <p className="w-full rounded-xl bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-600">
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/35 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
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

