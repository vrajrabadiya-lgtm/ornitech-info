import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import {
  Sparkles,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Mail,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
  Award
} from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Ronak Talaviya, Founder and CEO",
  description:
    "Meet Ronak Talaviya, founder of Ornitech, and learn about the team's approach to software engineering, AI integration and product development.",
  path: "/founder",
})

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Founder Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-muted/40 via-background to-background py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0 tech-grid-bg opacity-50" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl opacity-70" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Subtle outer decorative rings */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand via-blue-500 to-indigo-500 opacity-20 blur-xl" />
                  
                  <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white shadow-2xl shadow-slate-200/60 ring-1 ring-slate-900/5">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/ronak-talaviya.jpg"
                        alt="Ronak Talaviya - Founder & CEO of Ornitech"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 420px"
                        priority
                      />
                    </div>
                    {/* Caption badge overlay */}
                    <div className="border-t border-slate-100 bg-white/95 p-4 text-center backdrop-blur-md">
                      <p className="text-base font-extrabold text-slate-900">Ronak Talaviya</p>
                      <p className="text-xs font-semibold text-brand">Founder &amp; Chief Executive Officer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Intro Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                  <Sparkles className="h-3.5 w-3.5" /> Leadership &amp; Vision
                </div>

                <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ letterSpacing: "-0.03em" }}>
                  Engineering the Next Generation of <span className="text-brand">Digital Products</span>
                </h1>

                <p className="text-lg leading-relaxed text-slate-600">
                  Hi, I&apos;m <strong>Ronak Talaviya</strong>, Founder &amp; CEO of Ornitech. I founded Ornitech with a fundamental premise: that software products should be architected with uncompromising craft, speed, and long-term scalability from day one.
                </p>

                <p className="text-base leading-relaxed text-slate-600">
                  Too many founders and enterprise teams suffer from brittle code, slow agency handoffs, and bloated technical debt. At Ornitech, we operate as true engineering partners — taking ownership of architecture, cloud infrastructure, AI models, and user experience.
                </p>

                {/* Quick stats / Highlights */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 pt-2">
                  <div className="rounded-2xl border border-border bg-card p-4 text-left shadow-sm">
                    <Award className="h-5 w-5 text-brand" />
                    <p className="mt-2 text-xl font-black text-foreground">600+</p>
                    <p className="text-xs text-muted-foreground">Products Delivered</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4 text-left shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <p className="mt-2 text-xl font-black text-foreground">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime &amp; SLA Reliability</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border bg-card p-4 text-left shadow-sm">
                    <Layers className="h-5 w-5 text-blue-600" />
                    <p className="mt-2 text-xl font-black text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Code &amp; IP Ownership</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand/90 hover:gap-3"
                  >
                    Start a Project With Us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:hr@ornitech.in"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <Mail className="h-4 w-4" /> Direct Contact
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ornitech-solution/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-brand hover:text-brand hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Founder's Core Philosophy */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
                Principles
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                The Engineering Philosophy <span className="text-brand">We Live By</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Every project at Ornitech is guided by core engineering tenets set directly by Ronak Talaviya and our leadership team.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="glass-card rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Clean, Scalable Architecture</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We don&apos;t build disposable prototypes. We create maintainable, well-documented codebases with modern design patterns and modular components that your team can scale for years.
                </p>
              </div>

              <div className="glass-card rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">AI &amp; Automation Native</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  AI shouldn&apos;t just be a buzzword. We embed intelligence directly into business processes — from smart agentic workflows and LLM pipelines to production-grade automation.
                </p>
              </div>

              <div className="glass-card rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Radical Ownership</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  When you partner with us, we treat your business as our own. We guarantee 100% intellectual property transfer, direct Slack channel access, and transparent sprint cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
