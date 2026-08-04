"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Faq } from "@/components/faq"
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    budget: "$10k - $25k",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground">Company Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Inc."
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-foreground">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        >
                          <option>Web Development</option>
                          <option>Mobile App Development</option>
                          <option>Software Development</option>
                          <option>AI Development & Integration</option>
                          <option>UI/UX Design</option>
                          <option>Dedicated Team / Staff Augmentation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground">Estimated Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                        >
                          <option>&lt; $10k</option>
                          <option>$10k - $25k</option>
                          <option>$25k - $50k</option>
                          <option>$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground">Project Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your goals, timeline, or key feature requirements..."
                        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Office Details Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">Direct Contact</h3>
                  <div className="mt-4 space-y-4 text-xs">
                    <a href="mailto:info@ornitech.com" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Mail className="h-4 w-4 text-brand" /> info@ornitech.com
                    </a>
                    <a href="tel:+14256234723" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Phone className="h-4 w-4 text-brand" /> +1 (425) 623-4723 (Canada)
                    </a>
                    <a href="tel:+919727572204" className="flex items-center gap-3 text-muted-foreground hover:text-brand">
                      <Phone className="h-4 w-4 text-brand" /> +91 97275 72204 (India)
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Global Offices</h3>
                  <div className="space-y-4 text-xs">
                    <div className="border-b border-border/50 pb-3">
                      <p className="font-bold text-foreground">🇨🇦 Canada Headquarters</p>
                      <p className="mt-1 text-muted-foreground">106 Shaded Creek Dr, Kitchener, ON N2P 0K7</p>
                    </div>
                    <div className="border-b border-border/50 pb-3">
                      <p className="font-bold text-foreground">🇮🇳 India R&D Center</p>
                      <p className="mt-1 text-muted-foreground">Pragati IT Park, B 409-410, Utran, Surat, Gujarat 394105</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">🇮🇪 Ireland Office</p>
                      <p className="mt-1 text-muted-foreground">20 Hawthorn Close, Clondalkin, Dublin, D22 T6P8</p>
                    </div>
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
