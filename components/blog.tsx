"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const POSTS = [
  {
    slug: "building-scalable-nextjs-16-apps",
    category: "Engineering",
    date: "January 14, 2026",
    title: "How to choose the right tech stack for your startup",
    body: "The stack you pick on day one shapes how fast you can move on day 100. Here is a practical framework for deciding.",
    image: "/blog/tech-stack.png",
  },
  {
    slug: "flutter-vs-react-native-2026",
    category: "Design",
    date: "January 9, 2026",
    title: "Designing mobile apps people actually keep on their phones",
    body: "Retention starts with the first five minutes. We break down the onboarding patterns that keep users coming back.",
    image: "/blog/mobile-design.png",
  },
  {
    slug: "ai-rag-architecture-guide",
    category: "DevOps",
    date: "January 2, 2026",
    title: "Shipping faster without breaking things: our CI/CD playbook",
    body: "A look inside the pipelines, checks, and habits that let our teams deploy multiple times a day with confidence.",
    image: "/blog/cicd.png",
  },
]

export function Blog() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Latest Blog</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Insights, playbooks, and lessons from building software across industries.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {POSTS.map((p, i) => (
          <article
            key={p.title}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1 ${inView ? "animate-fade-up" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-brand-foreground">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                {p.date}
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-pretty">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
              >
                Continue reading <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className={`mt-10 flex justify-center transition-all duration-700 delay-500 ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-brand hover:text-brand hover:gap-3"
        >
          See our blog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
