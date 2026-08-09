"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Faq } from "@/components/faq"
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    budget: "$10k - $25k",
    message: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof typeof formData, boolean>>>({})

  const validate = (data: typeof formData): Errors => {
    const e: Errors = {}
    if (!data.name.trim()) e.name = "Name is required."
    else if (data.name.trim().length < 2) e.name = "Name must be at least 2 characters."

    if (!data.email.trim()) e.email = "Email is required."
    else if (!EMAIL_RE.test(data.email)) e.email = "Enter a valid email address."

    if (data.phone && !PHONE_RE.test(data.phone)) e.phone = "Enter a valid phone number."

    if (!data.message.trim()) e.message = "Project details are required."
    else if (data.message.trim().length < 20) e.message = "Please provide at least 20 characters."

    return e
  }

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(formData))
  }

  const handleChange = (field: keyof typeof formData, value: string) => {
    const updated = { ...formData, [field]: value }
    setFormData(updated)
    if (touched[field]) setErrors(validate(updated))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]))
    setTouched(allTouched)
    const e2 = validate(formData)
    setErrors(e2)
    if (Object.keys(e2).length > 0) return

    setSubmitting(true)
    setSubmitError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  const field = (id: "name" | "email" | "phone" | "message") =>
    touched[id] && errors[id] ? "border-red-400 focus:border-red-500" : "border-border focus:border-brand"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Contact Hero */}
        <section className="relative border-b border-border/50 bg-muted/30 py-16 lg:py-24 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Get In Touch
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something <span className="text-brand">Extraordinary Together</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a project in mind? Fill out the form below or reach out directly to schedule a free technical discovery call with our team.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Form Column */}
              <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">Tell Us About Your Project</h2>
                <p className="mt-1 text-xs text-muted-foreground">We usually respond within 24 hours.</p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-brand/10 p-8 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-brand" />
                    <h3 className="mt-4 text-xl font-bold text-foreground">Thank You for Reaching Out!</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      We have received your message and our team will get back to you shortly at {formData.email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground">Your Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          placeholder="John Doe"
                          className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none ${field("name")}`}
                        />
                        {touched.name && errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          placeholder="john@company.com"
                          className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none ${field("email")}`}
                        />
                        {touched.email && errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          placeholder="+1 (555) 000-0000"
                          className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none ${field("phone")}`}
                        />
                        {touched.phone && errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground">Company Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Acme Inc."
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground">Service Required</label>
                      <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {["Web Development", "Mobile App Development", "Software Development", "AI Development & Integration", "UI/UX Design", "Dedicated Team / Staff Augmentation"].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleChange("service", s)}
                            className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors text-left ${
                              formData.service === s
                                ? "border-brand bg-brand text-brand-foreground"
                                : "border-border bg-background text-foreground hover:border-brand hover:text-brand"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground">Estimated Budget</label>
                      <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleChange("budget", b)}
                            className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors ${
                              formData.budget === b
                                ? "border-brand bg-brand text-brand-foreground"
                                : "border-border bg-background text-foreground hover:border-brand hover:text-brand"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground">Project Details *</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder="Briefly describe your goals, timeline, or key feature requirements..."
                        className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none ${field("message")}`}
                      />
                      {touched.message && errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <p className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Office Details Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">Direct Contact</h3>
                  <div className="mt-4 space-y-4 text-xs">
                    <a href="mailto:contact@ornitech.in" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Mail className="h-4 w-4 text-brand" /> contact@ornitech.in
                    </a>
                    {/* <a href="tel:+14256234723" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Phone className="h-4 w-4 text-brand" /> +1 (425) 623-4723 (Canada)
                    </a> */}
                    <a href="tel:+918200867325" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Phone className="h-4 w-4 text-brand" /> +91 82008 67325 (India)
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Global Offices</h3>
                  <div className="space-y-4 text-xs">
                    {/* <div className="border-b border-border/50 pb-3">
                      <p className="font-bold text-foreground">🇨🇦 Canada Headquarters</p>
                      <p className="mt-1 text-muted-foreground">106 Shaded Creek Dr, Kitchener, ON N2P 0K7</p>
                    </div> */}
                    <div className="border-b border-border/50 pb-3">
                      <p className="font-bold text-foreground">🇮🇳 India R&D Center</p>
                      <p className="mt-1 text-muted-foreground">Office No-324, Center Point Co-operative Society, Bali Sheri, Mahidharpura, Surat-395003</p>
                    </div>
                    {/* <div>
                      <p className="font-bold text-foreground">🇮🇪 Ireland Office</p>
                      <p className="mt-1 text-muted-foreground">20 Hawthorn Close, Clondalkin, Dublin, D22 T6P8</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>

      <SiteFooter />
    </div>
  )
}
