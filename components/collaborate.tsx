"use client"

import { useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const PROJECT_TYPES = ["AI/ML", "Website", "Mobile App", "Web App", "Landing Page", "SaaS Product", "UI/UX Design"]
const BUDGETS = ["< $10K", "$10K – $20K", "$20K – $50K", "$50K+"]

export function Collaborate() {
  const [type, setType] = useState("Website")
  const [budget, setBudget] = useState("$10K – $20K")
  const [agree, setAgree] = useState(false)
  const { ref, inView } = useInView(0.1)

  return (
    <section id="collaborate" ref={ref as React.RefObject<HTMLElement>} className="bg-accent/40 py-20">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className={`text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Let&apos;s <span className="text-brand">Collaborate</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tell us about your project and we&apos;ll come back with a plan, a timeline, and a quote.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`mt-10 rounded-3xl border border-border bg-background p-6 sm:p-10 transition-all duration-700 delay-200 ${inView ? "animate-scale-in" : "opacity-0 scale-95"}`}
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <fieldset>
              <legend className="text-sm font-bold">Project Type</legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      type === t
                        ? "bg-brand text-brand-foreground scale-105 shadow-sm"
                        : "border border-border text-muted-foreground hover:border-brand hover:scale-105"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold">Budget</legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      budget === b
                        ? "bg-brand text-brand-foreground scale-105 shadow-sm"
                        : "border border-border text-muted-foreground hover:border-brand hover:scale-105"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="text-sm font-bold">Task Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Describe what you want to build..."
              className="mt-3 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand focus:shadow-sm focus:shadow-brand/10"
            />
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold">Your Contacts</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { id: "name", placeholder: "Name", type: "text" },
                { id: "email", placeholder: "Email", type: "email" },
                { id: "website", placeholder: "Company Website", type: "url" },
                { id: "phone", placeholder: "Phone Number", type: "tel" },
              ].map((f) => (
                <input
                  key={f.id}
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  aria-label={f.placeholder}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-brand focus:shadow-sm focus:shadow-brand/10"
                />
              ))}
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-border accent-brand"
            />
            I agree to the processing of my personal data and accept the privacy policy.
          </label>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand/90 hover:gap-3 hover:shadow-lg hover:shadow-brand/25"
            >
              Submit <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all hover:border-brand hover:text-brand hover:gap-3"
            >
              <Phone className="h-4 w-4" /> Book a call
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
