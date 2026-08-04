import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { MarkIcon } from "@/components/logo"

const AVATARS = ["/avatars/a1.png", "/avatars/a2.png", "/avatars/a3.png"]

const PILLS = [
  { label: "AI/ML Development", className: "left-1/2 top-2 -translate-x-1/2 bg-brand text-brand-foreground" },
  { label: "App Development", className: "left-2 top-24 bg-amber-100 text-amber-900" },
  { label: "CMS & CRM", className: "right-2 top-24 bg-emerald-100 text-emerald-800" },
  { label: "Frontend", className: "left-6 bottom-28 bg-violet-100 text-violet-800" },
  { label: "UI/UX Design", className: "right-2 bottom-28 bg-sky-100 text-sky-800" },
  { label: "Web Development", className: "left-1/2 bottom-6 -translate-x-1/2 bg-rose-100 text-rose-800" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <div className="animate-fade-up flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((src) => (
                <span key={src} className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-background">
                  <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" sizes="36px" />
                </span>
              ))}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-brand-foreground ring-2 ring-background">
                +5k
              </span>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-foreground">4.9/5</span>
                <span className="text-muted-foreground">Rating</span>
                <span className="flex text-highlight">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Trusted by Clients From Worldwide</p>
            </div>
          </div>

          <h1 className="animate-fade-up animation-delay-100 mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            Build software that{" "}
            <span className="relative text-brand">
              moves
              <svg
                className="absolute -bottom-2 left-0 w-full text-highlight"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            your business forward
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-md leading-relaxed text-muted-foreground">
            We design, build, and scale digital products. From mobile apps and web platforms to enterprise software,
            built for performance and shaped around the people who use them.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-all hover:bg-brand/90 hover:gap-3 hover:shadow-lg hover:shadow-brand/25"
            >
              Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-brand hover:text-brand hover:gap-3"
            >
              Hire Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="animate-fade-up animation-delay-400 mt-10 flex flex-wrap items-center gap-8">
            {[
              { name: "Clutch", rating: "4.9/5" },
              { name: "Google", rating: "4.8/5" },
            ].map((r) => (
              <div key={r.name}>
                <p className="text-[10px] font-semibold tracking-widest text-muted-foreground">REVIEWED ON</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-base font-bold text-foreground">{r.name}</span>
                  <span className="flex text-highlight">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </span>
                  <span className="text-xs text-muted-foreground">Rated {r.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orbit diagram */}
        <div className="animate-fade-in animation-delay-300 relative mx-auto hidden aspect-square w-full max-w-lg lg:block">
          <svg className="absolute inset-0 h-full w-full text-border" viewBox="0 0 400 400" aria-hidden="true">
            {[
              [200, 40],
              [70, 130],
              [330, 130],
              [90, 300],
              [330, 300],
              [200, 360],
            ].map(([x, y], i) => (
              <line
                key={i}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-xl shadow-brand/5 transition-transform duration-700 hover:scale-110">
            <MarkIcon className="h-12 w-12 text-brand" />
          </div>

          {PILLS.map((p, i) => (
            <span
              key={p.label}
              className={`animate-scale-in absolute whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-300 hover:scale-105 ${p.className}`}
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
