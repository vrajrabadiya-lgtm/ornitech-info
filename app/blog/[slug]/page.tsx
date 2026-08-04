import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaBand } from "@/components/cta-band"
import { BLOG_POSTS } from "@/lib/site-data"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }))
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
            </Link>

            <span className="mt-6 block rounded-full bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand w-fit">
              {post.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-6 border-b border-t border-border/60 py-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2 font-semibold text-foreground">
                <User className="h-4 w-4 text-brand" /> {post.author.name} ({post.author.role})
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-brand" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-brand" /> {post.readTime}
              </span>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <img src={post.image} alt={post.title} className="h-96 w-full object-cover" />
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none mt-10 space-y-6 text-sm leading-relaxed text-foreground/90">
              <p className="text-base font-medium text-foreground">
                {post.excerpt}
              </p>
              <p>
                Building production software requires careful architectural planning, robust continuous integration, and clean domain isolation. Whether scaling web services or embedding generative AI features, engineering teams must maintain security compliance, comprehensive automated testing, and zero-downtime deployment pipelines.
              </p>
              <p>
                At Ornitech, we specialize in delivering enterprise-ready code bases engineered for high availability, low latency, and rapid iteration. Contact our team today to learn how we can partner on your next software initiative.
              </p>
            </div>
          </div>
        </article>

        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  )
}
