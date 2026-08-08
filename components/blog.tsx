"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Clock } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const POSTS = [
  { slug: "building-scalable-nextjs-16-apps", category: "Engineering", date: "Jan 14, 2026", read: "6 min", title: "How to choose the right tech stack for your startup", body: "The stack you pick on day one shapes how fast you move on day 100. A practical framework for deciding.", image: "/blog/tech-stack.png", accent: "from-blue-400/20 to-indigo-400/10" },
  { slug: "flutter-vs-react-native-2026", category: "Mobile", date: "Jan 9, 2026", read: "7 min", title: "Designing mobile apps people actually keep on their phones", body: "Retention starts with the first five minutes. The onboarding patterns that keep users coming back.", image: "/blog/mobile-design.png", accent: "from-violet-400/20 to-purple-400/10" },
  { slug: "ai-rag-architecture-guide", category: "DevOps", date: "Jan 2, 2026", read: "8 min", title: "Shipping faster without breaking things: our CI/CD playbook", body: "The pipelines, checks, and habits that let our teams deploy multiple times a day with confidence.", image: "/blog/cicd.png", accent: "from-amber-400/20 to-orange-400/10" },
]

const CAT_COLORS: Record<string, string> = {
  Engineering: "bg-blue-500/10 text-blue-700",
  Mobile: "bg-violet-500/10 text-violet-700",
  DevOps: "bg-amber-500/10 text-amber-700",
}

export function Blog() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="glass-section relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="liquid-gradient animate-liquid-float-slow absolute left-0 top-0 h-[450px] w-[450px] opacity-35" />
        <div className="liquid-gradient animate-liquid-float absolute right-0 bottom-0 h-[400px] w-[400px] opacity-38" />
        <div className="ambient-glow absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between transition-all duration-700 ${inView ? "animate-blur-in" : "opacity-0"}`}>
          <div>
            <span className="glass-chip inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand uppercase">From the Team</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ letterSpacing: "-0.03em" }}>Latest Insights</h2>
          </div>
          <Link href="/blog" className="glass-chip inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:gap-3">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {POSTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={`group flex flex-col overflow-hidden rounded-3xl glass-card glass-hover transition-all duration-700 w-[80vw] shrink-0 snap-start md:w-auto ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-sm ${CAT_COLORS[p.category] ?? "bg-white/60 text-foreground"}`}>{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.read} read</span>
                </div>
                <h3 className="mt-3 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-brand" style={{ letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
