import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { CAREER_OPENINGS } from "@/lib/site-data"
import { ArrowRight, MapPin, Briefcase, Clock, Sparkles } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Careers Hero */}
        <section className="relative border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Join Our Engineering Team
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Build the Future of Software at <span className="text-brand">Ornitech</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Work on challenging global products, learn modern AI & cloud technologies, and grow your career alongside top-tier engineers.
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Current <span className="text-brand">Openings</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                Explore remote and hybrid engineering positions.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {CAREER_OPENINGS.map((job) => (
                <div
                  key={job.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-brand/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="rounded bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
                        {job.department}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-brand" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5 text-brand" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-brand" /> Experience: {job.experience}
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
                    >
                      Apply Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>

                  <div className="mt-4 border-t border-border/50 pt-4">
                    <h4 className="text-xs font-bold text-foreground">Key Requirements:</h4>
                    <ul className="mt-2 grid gap-1 text-xs text-muted-foreground sm:grid-cols-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
