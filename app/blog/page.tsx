import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { BLOG_POSTS } from "@/lib/site-data"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Blog Hero */}
        <section className="relative border-b border-border/50 bg-muted/30 py-20 lg:py-28 text-center">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              Engineering Insights & Articles
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Latest Insights from Our <span className="text-brand">Tech Team</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore technical guides, AI architecture patterns, mobile development updates, and software engineering best practices.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-brand/50 hover:shadow-md"
                >
                  <div>
                    <div className="overflow-hidden h-48 border-b border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="rounded bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
                        {post.category}
                      </span>
                      <h2 className="mt-3 text-lg font-bold text-foreground group-hover:text-brand">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between border-t border-border/50 pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                      >
                        Read Full Article <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
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
